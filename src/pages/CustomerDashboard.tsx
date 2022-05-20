import { useNavigate } from "react-router-dom";
import bgImg from "../media/customerDashBg1.png";
import bgImg2 from "../media/customerDashBg2.png";
import icon from "../media/agrismart_logo.png";
import CustomerSidebar from "../components/CustomerSidebar";
import CustomerSearch from "../components/CustomerSearch";

const CustomerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        overflowY: "hidden",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",

          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          style={{
            left: 0,
            position: "absolute",
            objectFit: "cover",
            minWidth: "50vw",
            height: "100vh",
            zIndex: -1,
          }}
          src={bgImg}
          alt="gg"
        />

        <div
          style={{
            marginLeft: 100,
            marginTop: "auto",
            color: "white",
            marginBottom: 81,
          }}
        >
          <div className="homeTitleText">AgriSmart</div>
          <div className="homeTitleContentText">
            Experience quality grocery shopping at your fingertips.
          </div>
        </div>
      </div>
      <CustomerSidebar />
      <div style={{ width: "50vw", height: "100vh", backgroundColor: "brown" }}>
        <CustomerSearch />

        <img style={{ width: "615px", height: "412px" }} src={bgImg2} />
      </div>
    </div>
  );
};

export default CustomerDashboard;
