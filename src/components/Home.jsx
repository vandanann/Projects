const Home = () => {
  return (
    <div class="w3-padding-large  " id="main">
      <header
        class="header w3-border w3-container w3-padding-32 w3-center "
        id="home"
      >
        <h1
          class="w3-xlarge w3-padding-large w3-hide-small w3-opacity-min"
          style={{
            fontFamily: "Englebert",
            color: "#290416",
            letterSpacing: "2px",
          }}
        >
          Welcome to my portfolio !
        </h1>
        <br />
        <h1
          class="w3-padding-large w3-hide-small "
          style={{
            wordSpacing: "2px",
            fontFamily: "Arvo",
            fontSize: "21px",
            textShadow: "1px 1px 1px lightblue",
            wordWrap: "true",
          }}
        >
          I am Vandana Nipane. I have 6 years of experience in .NET Core. I am
          specialized in designing aesthetic responsive frontend UIs. My strong
          suit includes developing .NET Core APIs, Microservices & Applications,
          React-Redux / Next.js frontend integration. Thanks.
        </h1>
        <h1
          class="w3-small w3-padding w3-hide-medium w3-hide-large"
          style={{
            wordSpacing: "2px",
            fontFamily: "Arvo",

            textShadow: "1px 1px 1px lightblue",
            wordWrap: "true",
          }}
        >
          <span class="w3-hide-large w3-hide-medium">
            Hello, I am Vandana Nipane. I have 6 years of experience in .NET
            Core. I am specialized in designing aesthetic responsive frontend
            UIs. <br />
            My strong suit includes developing .NET Core APIs, Microservices &
            Applications, React-Redux / Next.js frontend integration. Thanks.
          </span>
        </h1>
      </header>
    </div>
  );
};
export default Home;
