import Chellenge from "./Chellenge";
import "./ButtomSection.css";

const ButtomSection = () => {
  return (
    <div className="buttom-section">
      <h1 className="challenges3">Challenges</h1>
      <div className="challenges4">
        <Chellenge
          hydrationChallenge="Hydration challenge"
          aimToDrinkAbout4LitersOfW="Aim to drink about 4 liters of water in a single day for 30 days"
        />
        <Chellenge
          hydrationChallenge="Walk 10,000 steps"
          aimToDrinkAbout4LitersOfW="Walk 10,000 steps in a day to promote overall health and fitness "
          propDisplay="unset"
          propMinWidth="unset"
        />
        <Chellenge
          hydrationChallenge="Sugar-free week"
          aimToDrinkAbout4LitersOfW="Cut out added sugars from your diet for a week "
          propDisplay="inline-block"
          propMinWidth="128px"
        />
      </div>
    </div>
  );
};

export default ButtomSection;
