import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="text-center p-5 m-5">
      <div className="spinner-border" role="status" style={{width:"5rem", height:"5rem"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;