import { useMemo } from "react";
import { Button } from "@mui/material";
import "./Chellenge.css";

const Chellenge = ({
  hydrationChallenge,
  aimToDrinkAbout4LitersOfW,
  propDisplay,
  propMinWidth,
}) => {
  const hydrationChallengeStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="chellenge">
      <div className="challenge">
        <div className="hydration-challenge" style={hydrationChallengeStyle}>
          {hydrationChallenge}
        </div>
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
        >
          Skip
        </Button>
        <Button
          className="button2"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "rgba(0, 0, 0, 0.5)",
            borderRadius: "40px",
            "&:hover": { background: "rgba(0, 0, 0, 0.5)" },
            height: 32,
          }}
        >{`Completed `}</Button>
      </div>
    </div>
  );
};

export default Chellenge;
