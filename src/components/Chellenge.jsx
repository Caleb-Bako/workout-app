import React from "react";
import { Button } from "@mui/material";
import "./Chellenge.css";

const Chellenge = ({
  hydrationChallenge,
  aimToDrinkAbout4LitersOfW,
  isSelected,
  onCompleted,
  onSkip,
}) => {
  const challengeStyle = {
    backgroundColor: isSelected ? "lightblue" : "white",
    border: isSelected ? "2px solid lightblue" : "none",
    borderRadius: isSelected ? "10px" : "0",
  };

  return (
    <div className="chellenge" style={challengeStyle}>
      <div className="challenge">
        <div className="hydration-challenge">{hydrationChallenge}</div>
        <div className="aim-to-drink">{aimToDrinkAbout4LitersOfW}</div>
      </div>
      <div className="actions">
        <Button
          className="button1"
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "rgba(0, 0, 0, 0.5)",
            fontSize: "16",
            borderColor: "#000",
            borderRadius: "40px",
            "&:hover": { borderColor: "#000" },
          }}
          onClick={onSkip} // Call onSkip function on click
        >
          Skip
        </Button>
        <Button
          className="button2"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#ffff",
            fontSize: "16",
            background: "#E71212",
            borderRadius: "40px",
            "&:hover": { background: "rgba(0, 0, 0, 0.5)" },
            height: 32,
          }}
          onClick={onCompleted} // Call onCompleted function on click
        >
          Completed
        </Button>
      </div>
    </div>
  );
};

export default Chellenge;
