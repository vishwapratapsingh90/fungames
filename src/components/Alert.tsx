import React from "react";

interface AlertProps {
  message?: string;
  onClose: () => void;
}

const Alert = ({ message, onClose }: AlertProps) => {
  return (
    <>
      {message && (
        <div className="alert alert-primary alert-dismissible" role="alert">
          {message}
          {onClose && (
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                onClose();
              }}
            ></button>
          )}
        </div>
      )}
    </>
  );
};

export default Alert;
