import React from "react";
import "./body.css";

function Body() {
  return (
    <div className="body">
      <div className="update-message">
        <p>
          Deleting account cannot be undone <strong>Anand</strong>! You should
          confirm your password to delete your account.
        </p>
        <span>Delete Account</span>
      </div>
    </div>
  );
}

export default Body;
