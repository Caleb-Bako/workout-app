import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./NavSections.css";

const NavSections = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <nav className="nav-sections3">
      <div className="dashboard5">
        <img className="home-icon2" loading="lazy" alt="" src="/home.svg" />
        <div className="dashboard6" onClick={onDashboardTextClick}>
          Dashboard
        </div>
      </div>
      <div className="workouts5">
        <img
          className="exercise-icon2"
          loading="lazy"
          alt=""
          src="/exercise.svg"
        />
        <div className="workouts6">workouts</div>
      </div>
      <div className="challenges5">
        <img
          className="directions-run-icon2"
          loading="lazy"
          alt=""
          src="/directions-run.svg"
        />
        <div className="exercises4">Exercises</div>
      </div>
      <Button
        className="profile8"
        startIcon={<img width="24px" height="24px" src="/person.svg" />}
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
        Profile
      </Button>
    </nav>
  );
};

export default NavSections;
