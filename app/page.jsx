import "./globals.css";

// import components
import Meditation from "./components/mainPage/meditation";
import LowerText from "./components/mainPage/lowerText";

//import files

export default function Home() {
  return (
    <div>
      <Meditation />
      <LowerText />
    </div>
  );
}
