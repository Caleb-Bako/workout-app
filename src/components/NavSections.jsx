import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./NavSections.css";

const NavSections = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);
  const onWorkoutsTextClick = useCallback(() => {
    navigate("/exercises");
  }, [navigate]);

  const onExercisesTextClick = useCallback(() => {
    navigate("/exercises1");
  }, [navigate]);

  const onProfileTextClick = useCallback(() => {
    navigate("/profille");
  }, [navigate]);

  return (
    <nav className="nav-sections2">
    <Button
      className="dashboard4"
      startIcon={<img width="24px" height="24px" src="/home.svg" />}
      disableElevation={true}
      variant="outlined"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "24",
        borderColor: "#fff",
        borderRadius: "0px 0px 0px 0px",
        "&:hover": { borderColor: "#fff" },
        height: 29,
      }}
    >
      Dashboard
    </Button>
    <div className="workouts3">
      <img
        className="exercise-icon1"
        loading="lazy"
        alt=""
        src="/exercise.svg"
      />
      <h3 className="workouts4" onClick={onWorkoutsTextClick}>
        workouts
      </h3>
    </div>
    <div className="challenges2">
      <img
        className="directions-run-icon1"
        loading="lazy"
        alt=""
        src="/directions-run.svg"
      />
      <h3 className="exercises3" onClick={onExercisesTextClick}>
        Exercises
      </h3>
    </div>
    <div className="profile6">
      <img className="person-icon2" loading="lazy" alt="" src="/person.svg" />
      <h3 className="profile7" onClick={onProfileTextClick}>
        Profile
      </h3>
    </div>
  </nav>
);
};

export default NavSections;
