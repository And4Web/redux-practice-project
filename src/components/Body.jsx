import React from "react";
import "./body.css";

import FormComponent from "./FormComponent";

function Body() {
  return (
    <div className="body">
      <div className="update-message">
        <h2>Update Your Account</h2>
        <p>
          Deleting account cannot be undone <strong>Anand</strong>! You should
          confirm your password to delete your account.
        </p>
        <button>Delete Account</button>
      </div>
      <FormComponent />
    </div>
  );
}

export default Body;
