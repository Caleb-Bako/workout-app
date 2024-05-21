import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import "./Exercises.css";

const Exercises = () => {
  return (
    <form className="exercises">
      <div className="navigation-bar2">
        <div className="logo-container">
          <div className="logo2">
            <img
              className="vital-signs-icon2"
              loading="lazy"
              alt=""
              src="/vital-signs.svg"
            />
            <b className="active2">Active</b>
          </div>
          <nav className="nav-sections">
            <div className="dashboard">
              <img
                className="home-icon"
                loading="lazy"
                alt=""
                src="/home.svg"
              />
              <div className="dashboard1">Dashboard</div>
            </div>
            <div className="workouts">
              <img
                className="exercise-icon"
                loading="lazy"
                alt=""
                src="/exercise.svg"
              />
              <div className="workouts1">workouts</div>
            </div>
            <Button
              className="challenges"
              startIcon={
                <img width="24px" height="24px" src="/directions-run.svg" />
              }
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
              Exercises
            </Button>
            <div className="profile2">
              <img
                className="person-icon"
                loading="lazy"
                alt=""
                src="/person.svg"
              />
              <div className="profile3">Profile</div>
            </div>
          </nav>
        </div>
      </div>
      <main className="body">
        <div className="left-section">
          <div className="search-bar">
            <div className="help">
              <div className="search-exercise">Search exercise</div>
            </div>
            <div className="search">
              <img className="search-icon" alt="" src="/search.svg" />
            </div>
          </div>
          <div className="list-of-exercises">
            <div className="exercise">
              <div className="bench-press">Bench press</div>
            </div>
            <div className="exercise1">
              <div className="bench-press1">{`Pushup `}</div>
            </div>
            <div className="exercise2">
              <div className="bench-press2">Deadlifts</div>
            </div>
            <div className="exercise3">
              <div className="bench-press3">Barbell Squats</div>
            </div>
            <div className="exercise4">
              <div className="bench-press4">Dumbbell shoulder press</div>
            </div>
            <div className="exercise5">
              <div className="bench-press5">Literal raise</div>
            </div>
            <div className="exercise6">
              <div className="bench-press6">Bicep curls</div>
            </div>
            <div className="exercise7">
              <div className="bench-press7">Dips</div>
            </div>
            <div className="exercise8">
              <div className="bench-press8">Shoulder press</div>
            </div>
            <TextField
              className="exercise9"
              placeholder="Lunges"
              variant="standard"
              sx={{
                "& .MuiInputBase-root": { height: "40px", fontSize: "24px" },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
            <div className="exercise10">
              <div className="bench-press9">Calf raise</div>
            </div>
            <TextField
              className="exercise11"
              placeholder="Pullups"
              variant="standard"
              sx={{
                "& .MuiInputBase-root": { height: "40px", fontSize: "24px" },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
            <div className="exercise12">
              <div className="bench-press10">Jumping jacks</div>
            </div>
            <div className="exercise13">
              <div className="bench-press11">Barbell row</div>
            </div>
            <div className="exercise14">
              <div className="bench-press12">{`Bulgarian split squat `}</div>
            </div>
            <TextField
              className="exercise15"
              placeholder="Skipping"
              variant="standard"
              sx={{
                "& .MuiInputBase-root": { height: "40px", fontSize: "24px" },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
            <div className="exercise16">
              <div className="bench-press13">Tricep extension</div>
            </div>
            <div className="exercise17">
              <div className="bench-press14">Plank</div>
            </div>
            <div className="exercise18">
              <div className="bench-press15">Mountain climbers</div>
            </div>
          </div>
        </div>
        <div className="exercise-details">
          <div className="content">
            <div className="heading">
              <div className="bench-press16">Bench press</div>
            </div>
            <div className="body1">
              <div className="a-bench-press">
                A bench press is a strength training exercise that involves
                lying on a bench and pushing a weight upwards from the chest
                using the arms. Typically performed with a barbell, the bench
                press primarily targets the muscles of the chest, shoulders, and
                triceps. It's a compound movement that's widely used to build
                upper body strength and muscle mass.
              </div>
              <div className="description">
                <div className="how-to-perform">How to perform exercise</div>
                <div className="setup-lie-on-a-flat-bench-wit-wrapper">
                  <div className="setup-lie-on-container">
                    <ul className="setup-lie-on-a-flat-bench-wit">
                      <li className="setup-lie-on">
                        Setup: Lie on a flat bench with your feet planted firmly
                        on the ground. Grip the barbell slightly wider than
                        shoulder-width apart, with your palms facing away from
                        you.
                      </li>
                      <li className="execution-lower-the">
                        Execution: Lower the barbell down to your chest by
                        bending your elbows while keeping your back flat on the
                        bench. Once the barbell touches your chest, push it back
                        up until your arms are fully extended, without locking
                        out your elbows.
                      </li>
                      <li className="breathing-inhale-as">
                        Breathing: Inhale as you lower the barbell towards your
                        chest, and exhale as you push it back up.
                      </li>
                      <li>
                        Safety: Ensure proper form to prevent injury. Use a
                        spotter, especially when lifting heavy weights.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="targeted-muscles">
                <div className="targeted-muscles1">Targeted muscles</div>
                <div className="chest-tricep-and">{`Chest ,Tricep and Shoulder `}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </form>
  );
};

export default Exercises;
