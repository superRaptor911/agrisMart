import { useState, useEffect } from "react";
import FarmerDashIndicator from "../components/FarmerDashIndicator";
import FarmerSidebar from "../components/FarmerSidebar";
import bgImg from "../media/farmerDashboardbg.png";
import { getCurrentCity } from "../utility";

const FarmerDashboard = () => {
  const [location, setLocation] = useState<any>("");

  useEffect(() => {
    getCurrentCity().then((city) => setLocation(city));
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <img
        src={bgImg}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          zIndex: -1,
        }}
      />

      <div
        className="button3"
        style={{
          width: "max-content",
          position: "absolute",
          top: 50,
          left: "90%",
        }}
      >
        {location}
      </div>
      <FarmerSidebar />

      <div
        style={{
          margin: 80,
          marginTop: 36,
          color: "white",
          marginBottom: 81,
          marginLeft: 100,
        }}
      >
        <div className="homeTitleText">Your agricultural assistant</div>
        <div className="homeTitleContentText">
          Helping you to make right decisions
        </div>
      </div>

      <FarmerDashIndicator />
    </div>
  );
};

export default FarmerDashboard;
