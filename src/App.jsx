import Frontend from "./components/Frontend";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Home from "./components/Home";
import DotNet from "./components/DotNet";
import "./App.css";
function App() {
  const currentyear = new Date();
  const options = {
    year: "numeric",
    month: "long",
  };
  return (
    <>
      <div>
        <BrowserRouter>
          <nav
            class="w3-sidebar w3-margin w3-margin-right  w3-bar-block w3-medium w3-hide-small w3-center"
            style={{ background: "rgb(3, 26, 28)", height: "100vh" }}
          >
            <a class="w3-bar-item  w3-xxxlarge w3-padding-large ">
              <Link style={{ textDecoration: "none" }} to={"/"}>
                <p>VN</p>
              </Link>
            </a>
            <a class="w3-bar-item w3-padding-large  ">
              <Link style={{ textDecoration: "none" }} to={"/dotnet"}>
                <p>.NET Core</p>
              </Link>
            </a>
            <a class="w3-bar-item w3-padding-large  ">
              <Link style={{ textDecoration: "none" }} to={"/frontend"}>
                <p>Next.js </p>
              </Link>
            </a>
          </nav>

          <div class="w3-top w3-hide-large w3-hide-medium " id="myNavbar">
            <div
              class="w3-bar  w3-center"
              style={{
                background: "#012133",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <a href="/" class="w3-bar-item " style={{ fontSize: "14px" }}>
                Home
              </a>
              <a
                href="/frontend"
                class="w3-bar-item "
                style={{ fontSize: "14px" }}
              >
                Next.js
              </a>
              <a
                href="/dotnet"
                class="w3-bar-item "
                style={{ fontSize: "14px " }}
              >
                .NET Core
              </a>
            </div>
          </div>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/dotnet" element={<DotNet />} />
          </Routes>
        </BrowserRouter>
        <p class="w3-center w3-bar " style={{ fontFamily: "Poppins" }}>
          {" "}
          | Created by Vandana Nipane, Updated in{" "}
          {currentyear.toLocaleDateString(undefined, options)} |
        </p>
      </div>
    </>
  );
}

export default App;
