import React, { useState, useEffect, createRef } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";
import { useScreenshot } from "use-react-screenshot";

function App() {
  const imageRef = createRef(null);
  const [image, takeScreenShot] = useScreenshot();
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const getImage = () => {
    return takeScreenShot(imageRef.current);
  };

  useEffect(() => {
    if (image) {
      console.log("image:" + image);
    }
  }, [image]);

  return (
    <div className="App">
      <button onClick={getImage}>Send full screen</button>
      <div
        ref={imageRef}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <div style={{ width: 700 }}>
          <BarChart chartData={userData} />
        </div>
        <div style={{ width: 700 }}>
          <LineChart chartData={userData} />
        </div>
        <div style={{ width: 700 }}>
          <PieChart chartData={userData} />
        </div>
      </div>
    </div>
  );
}

export default App;
