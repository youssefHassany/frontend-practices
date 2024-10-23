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
            width: "80px",
            height: "80px",
            position: "absolute",
            top: 230,
            left: 155,
          }}
        >
          <Avatar />
        </div>

        <div
          style={{
            width: "60px",
            height: "60px",
            position: "absolute",
            top: 375,
            left: 248,
          }}
        >
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default App;
