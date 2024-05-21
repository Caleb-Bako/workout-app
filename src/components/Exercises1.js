import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExerciseName from "./ExerciseName";
import "./Exercises1.css";

const Exercises1 = () => {
  const navigate = useNavigate();

  const onExercisesTextClick = useCallback(() => {
    navigate("/exercises1");
  }, [navigate]);

  return (
    <form className="exercises1">
      <div className="navigation-bar3">
        <div className="logo-parent1">
          <div className="logo3">
            <img
              className="vital-signs-icon3"
              loading="lazy"
              alt=""
              src="/vital-signs.svg"
            />
            <h1 className="active3">Active</h1>
          </div>
          <div className="nav-sections1">
            <div className="dashboard2">
              <img
                className="home-icon1"
                loading="lazy"
                alt=""
                src="/home.svg"
              />
              <h3 className="dashboard3">Dashboard</h3>
            </div>
            <Button
              className="workouts2"
              startIcon={<img width="24px" height="24px" src="/exercise.svg" />}
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
              workouts
            </Button>
            <div className="challenges1">
              <img
                className="directions-run-icon"
                loading="lazy"
                alt=""
                src="/directions-run.svg"
              />
              <h3 className="exercises2" onClick={onExercisesTextClick}>
                Exercises
              </h3>
            </div>
            <div className="profile4">
              <img
                className="person-icon1"
                loading="lazy"
                alt=""
                src="/person.svg"
              />
              <h3 className="profile5">Profile</h3>
            </div>
          </div>
        </div>
      </div>
      <main className="body2">
        <div className="left-section1">
          <div className="list-of-exercises1">
            <div className="exercise19">
              <div className="bench-press17">{` Chest `}</div>
            </div>
            <div className="exercise20">
              <div className="bench-press18">Legs</div>
            </div>
            <div className="exercise21">
              <div className="bench-press19">Shoulders</div>
            </div>
            <div className="exercise22">
              <div className="bench-press20">Back</div>
            </div>
            <div className="exercise23">
              <div className="bench-press21">Arms</div>
            </div>
            <div className="exercise24">
              <div className="bench-press22">Abs</div>
            </div>
            <div className="exercise25">
              <div className="bench-press23">Cardio</div>
            </div>
          </div>
        </div>
        <section className="recommendation">
          <header className="heading1">
            <h1 className="chest">Chest</h1>
          </header>
          <div className="table">
            <div className="table-header">
              <ExerciseName />
              <div className="exercise-name">
                <div className="number-of-sets">Number of sets</div>
              </div>
              <div className="exercise-name1">
                <div className="number-of-reps">Number of reps</div>
              </div>
              <button className="exercise-name2">
                <div className="required-equipment">{`Required equipment `}</div>
              </button>
            </div>
            <div className="table-body">
              <div className="table-content">
                <div className="exercise-name3">
                  <div className="bench-press24">{`Bench press `}</div>
                </div>
                <div className="exercise-name4">
                  <div className="sets">3 sets</div>
                </div>
                <div className="exercise-name5">
                  <div className="reps">8-10 reps</div>
                </div>
                <div className="exercise-name6">
                  <div className="barbell-or-dumbbell">
                    Barbell or Dumbbell, Bench
                  </div>
                </div>
              </div>
              <div className="table-content1">
                <div className="exercise-name7">
                  <div className="dips">Dips</div>
                </div>
                <div className="exercise-name8">
                  <div className="sets1">4 sets</div>
                </div>
                <div className="exercise-name9">
                  <div className="reps1">10-15 reps</div>
                </div>
                <div className="exercise-name10">
                  <div className="dip-bar-or">Dip bar or Inclined surface</div>
                </div>
              </div>
              <div className="table-content2">
                <div className="exercise-name11">
                  <div className="chest-flys">Chest flys</div>
                </div>
                <div className="exercise-name12">
                  <div className="sets2">4 sets</div>
                </div>
                <div className="exercise-name13">
                  <div className="reps2">10-15 reps</div>
                </div>
                <div className="exercise-name14">
                  <div className="flys-machine-or">
                    Flys machine or Dumbbell
                  </div>
                </div>
              </div>
              <div className="table-content3">
                <div className="exercise-name15">
                  <div className="push-ups">Push ups</div>
                </div>
                <div className="exercise-name16">
                  <div className="sets3">3 sets</div>
                </div>
                <div className="exercise-name17">
                  <div className="reps3">20-30 reps</div>
                </div>
                <div className="exercise-name18">
                  <div className="none">None</div>
                </div>
              </div>
              <div className="table-content4">
                <div className="exercise-name19">
                  <div className="inclined-bench-press">
                    Inclined Bench press
                  </div>
                </div>
                <div className="exercise-name20">
                  <div className="sets4">3 sets</div>
                </div>
                <div className="exercise-name21">
                  <div className="reps4">10-12 reps</div>
                </div>
                <div className="exercise-name22">
                  <div className="barbell-or-dumbbell1">
                    Barbell or dumbbell, Benchtt
                  </div>
                </div>
              </div>
              <div className="table-content5">
                <div className="exercise-name23">
                  <div className="wide-grip-push">Wide grip push ups</div>
                </div>
                <div className="exercise-name24">
                  <div className="sets5">3 sets</div>
                </div>
                <div className="exercise-name25">
                  <div className="reps5">20-25 reps</div>
                </div>
                <Button
                  className="exercise-name26"
                  disableElevation={true}
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#000",
                    fontSize: "16",
                    borderColor: "#000",
                    borderRadius: "0px 0px 0px 0px",
                    "&:hover": { borderColor: "#000" },
                  }}
                >
                  None
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </form>
  );
};

export default Exercises1;
