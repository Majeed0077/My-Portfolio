const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define MongoDB schema and model for User
const userSchema = new mongoose.Schema({
  _id: String,
  likes: [{
    projectId: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
  }],
});

const User = mongoose.model("User", userSchema);

// Middleware for user authentication
app.use(async (req, res, next) => {
  const userId = req.headers["user-id"] || "someUserId";
  req.user = await User.findById(userId).exec();

  if (!req.user) {
    req.user = await User.create({ _id: userId, likes: [] });
  }

  next();
});

// Routes
app.post("/api/like", async (req, res) => {
  const { projectId } = req.body;

  try {
    const existingLike = req.user.likes.find((like) => like.projectId === projectId);

    if (existingLike) {
      existingLike.count += 1;
    } else {
      req.user.likes.push({ projectId, count: 1 });
    }

    await req.user.save();

    // Emit a message to all connected clients with the updated like count
    io.emit("likeCountUpdate", { projectId, count: req.user.likes.find((like) => like.projectId === projectId).count });

    res.json({ success: true, count: req.user.likes.find((like) => like.projectId === projectId).count });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get("/api/like/:projectId", async (req, res) => {
  const { projectId } = req.params;

  try {
    const existingLike = req.user.likes.find((like) => like.projectId === projectId);

    if (existingLike) {
      res.json({ success: true, count: existingLike.count });
    } else {
      res.json({ success: true, count: 0 });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Existing code for MongoDB schema and model for Like
const likeSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: true,
    unique: true,
  },
  likes: [{ type: String }],
});

const Like = mongoose.model("Like", likeSchema);

// Existing code for socket.io
const server = http.createServer(app);
const io = socketIo(server);

app.post("/api/like", async (req, res) => {
  const { projectId } = req.body;

  try {
    const existingLike = await Like.findOne({ projectId });

    if (existingLike) {
      const userIndex = existingLike.likes.indexOf(req.user._id);

      if (userIndex !== -1) {
        existingLike.likes.splice(userIndex, 1);
      } else {
        existingLike.likes.push(req.user._id);
      }

      await existingLike.save();

      io.emit("likeCountUpdate", { projectId, count: existingLike.likes.length });

      res.json({ success: true, count: existingLike.likes.length });
    } else {
      const newLike = new Like({ projectId, likes: [req.user._id] });
      await newLike.save();

      io.emit("likeCountUpdate", { projectId, count: 1 });

      res.json({ success: true, count: 1 });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
