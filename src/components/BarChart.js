import React, { useEffect, createRef, useRef, useState } from "react";
import { Bar, getDatasetAtEvent } from "react-chartjs-2";
import { useScreenshot } from "use-react-screenshot";

function BarChart({ chartData }) {

  const chartRef = useRef();
  const imageRef = createRef(null);
  const [image, takeScreenShot] = useScreenshot();
  const [datasets,setDatasets] = useState(null);

  const getImage = () => {
    console.log('chartRef:' + chartRef);
    return takeScreenShot(imageRef.current);
  };

  useEffect(() => {
    if (image) {
      // console.log("image:" + image);
      const dataToServer = {
        imageBlob: image,
        chartDatasets: datasets
      }
    }
  }, [image]);


  const onClick = (event) => {
    console.log(getDatasetAtEvent(chartRef.current, event));
    setDatasets(getDatasetAtEvent(chartRef.current, event))
  }

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
        <Bar data={chartData}  ref={chartRef} onClick={onClick} />
      </div>
    </div>
  );
}

export default BarChart;
