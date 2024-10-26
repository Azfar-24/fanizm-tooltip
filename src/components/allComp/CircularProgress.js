import React, { useEffect, useState } from 'react';
// import './CircularProgress.css'; // Import the CSS file

const CircularProgress = ({ duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + (100 / (duration / 1000)); // Increment based on duration
      });
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [duration]);

  return (
    <div className="circular-progress">
      <svg>
        <circle className="background" cx="50" cy="50" r="45" />
        <circle
          className="progress-fn"
          cx="50"
          cy="50"
          r="45"
          style={{ strokeDasharray: `${progress} 100` }}
        />
      </svg>
      <div className="percentage">5:00</div>
      {/* <div className="percentage">{Math.round(progress)}</div> */}
    </div>
  );
};

export default CircularProgress;
