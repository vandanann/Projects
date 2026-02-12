import dotnet from "../components/dotnet.json";

const DotNet = () => {
  return (
    <div class="w3-row-padding " id="main">
      {dotnet.map((data, i) => (
        <div key={i}>
          <div class="w3-quarter">
            <div class="w3-border w3-hover-border-yellow w3-round-large  w3-padding-16 w3-margin w3-hover-shadow ">
              <div
                class="w3-padding-large "
                style={{
                  height: "140px",

                  wordSpacing: "2px",
                  fontFamily: "Arvo",
                  fontSize: "16px",
                  textShadow: "1px 1px 1px lightblue",
                  wordWrap: "true",
                }}
              >
                {data.title}
              </div>

              <p
                class="w3-padding-32 w3-margin-top w3-margin"
                style={{
                  fontFamily: "Englebert",
                  letterSpacing: "2px",
                  color: "#7dbc09ff",
                }}
              >
                <span
                  class="w3-border w3-padding-small w3-rightbar w3-margin w3-border w3-hover-yellow w3-hover-border-yellow "
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Github
                </span>
                <span
                  class="w3-border w3-padding-small  w3-rightbar w3-border w3-hover-yellow w3-hover-border-yellow "
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  View Project
                </span>
              </p>
            </div>{" "}
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default DotNet;
