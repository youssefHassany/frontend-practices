import Avatar from "./components/Avatar";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ position: "relative" }}>
        <img src="/sample.jpg" alt="" style={{ width: "400px" }} />
        <div
          style={{
            width: "60px",
            height: "60px",
            position: "absolute",
            top: 235,
            left: 165,
          }}
        >
          <Avatar />
        </div>

        <div
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            top: 375,
            left: 252,
          }}
        >
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default App;
