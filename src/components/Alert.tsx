import React from "react";

interface AlertProps {
  message?: string;
}

const Alert = ({ message }: AlertProps) => {
  return (
    <>
      {message && (
        <div className="alert alert-primary" role="alert">
          {message}
        </div>
      )}
    </>
  );
};

export default Alert;
