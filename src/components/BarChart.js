import React, { useEffect, createRef } from "react";
import { Bar } from "react-chartjs-2";
import { useScreenshot } from "use-react-screenshot";

function BarChart({ chartData }) {
  const imageRef = createRef(null);
  const [image, takeScreenShot] = useScreenshot();

  const getImage = () => {
    return takeScreenShot(imageRef.current);
  };

  useEffect(() => {
    if (image) {
      console.log("image:" + image);
    }
  }, [image]);

  return (
    <div>
      <button onClick={getImage}>Send only Bar Chart</button>

      <div
        ref={imageRef}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <Bar data={chartData} />
      </div>
    </div>
  );
}

export default BarChart;
