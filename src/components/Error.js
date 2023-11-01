import React from 'react';
import './Error.css'; // You can create a separate CSS file for styling

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">Oops! Something Went Wrong</h1>
        <p className="error-message">
          We apologize for the inconvenience. It seems there was an error.
        </p>
        <p className="error-message">
          <a href="/" className="error-button">Go back to the home page</a>
        </p>

      </div>
    </div>
  );
}

export default Error;
