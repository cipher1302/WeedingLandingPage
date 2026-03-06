import DayPlan from "./components/DayPlan/DayPlan";
import DressCodeComponent from "./components/DressCodeComponent/DressCodeComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import ImagesComponent from "./components/ImagesComponent/ImagesComponent";
import MainText from "./components/MainText/MainText";
import CountDown from "./components/CountDown/CountDown";
import FooterComponent from "./components/FooterComponent/FooterComponent";

function App() {
  return (
    <>
      <HeroComponent />
      <MainText />
      <ImagesComponent />
      <DayPlan />
      <DressCodeComponent />
      <CountDown />
      <FooterComponent />
    </>
  );
}

export default App;
