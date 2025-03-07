import "./App.css";
import Router from "./Router";
import SocialMediaIcons from "./Layouts/SocialMediaIcons";
import ScrollToTopButton from "./Layouts/ScrollToTopButton";



function App() {
  return (
    <>
    <SocialMediaIcons />
    <ScrollToTopButton/>
      <Router />
    </>
  );
}

export default App;
