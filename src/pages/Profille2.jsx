import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import NavSections from "../components/NavSections";
import "./Profille.css";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Profille2 = ({name,userName,pass}) => {
  const [checkChecked, setCheckChecked] = useState(true);
  const [check2Checked, setCheck2Checked] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [trainMethod,setTrainMethod] = useState([]);
  const [gender,setGender] = useState([]);
  const [fitnessLevel,setFitnessLevel] = useState([]);
  const [checkBoxStates, setCheckBoxStates] = useState({
    buildMuscle: false,
    loseWeight: false,
    flexibility: false,
    improveFitness: false,
    gainMass: false,
  });
  const {user} = useContext(UserContext);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckBoxStates((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  async function saveForm(ev) {
    ev.preventDefault();
    try {
        await axios.post("/signup", {
            name,userName,pass,checkboxes: checkBoxStates,gender,trainMethod,fitnessLevel
        });
        alert('SignUp Successful');
        setRedirect(true);
    } catch (e) {
        alert('SignUp Failed');
    }
}

if (redirect) {
    return <Navigate to={'/profile'} />
}
console.log(trainMethod);
  return (
    <div className="profille1">
      <main className="profile">
        <section className="profile-parent">
          <h1 className="profile1">Profile</h1>
          <div className="user-information">
            <div className="first-section">
              <div className="gender">
                <div className="gender1">Gender:</div>
                <FormControl
                  className="gender2"
                  variant="standard"
                  sx={{
                    borderColor: "#000",
                    borderStyle: "SOLID",
                    borderTopWidth: "0.10000000149011612px",
                    borderRightWidth: "0.10000000149011612px",
                    borderBottomWidth: "0.10000000149011612px",
                    borderLeftWidth: "0.10000000149011612px",
                    backgroundColor: "#fbfbfb",
                    borderRadius: "8px",
                    width: "100%",
                    height: "49px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "49px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "49px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "49px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "49px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#000",
                      fontSize: 24,
                      fontWeight: "Light",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "26.5px",
                    },
                  }}
                >
                  <InputLabel color="secondary" />
                  <Select
                    value={gender}
                    onChange={ev => setGender(ev.target.value)}
                    color="secondary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="24px"
                        height="24px"
                        src="/arrow-drop-down.svg"
                        style={{ marginRight: "26.5px" }}
                      />
                    )}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Male"><em>Male</em></MenuItem>
                    <MenuItem value="Female"><em>Female</em></MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
            </div>
            <div className="second-section">
            <div className="flex-section">
              <div className="training-method">
                <div className="preferred-training-method">
                  Preferred training method
                </div>
                <FormControl
                  className="parent"
                  variant="standard"
                  sx={{
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fbfbfb",
                    borderRadius: "0px 0px 0px 0px",
                    width: "87.03071672354949%",
                    height: "45px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "45px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "45px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "45px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "45px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#000",
                      fontSize: 24,
                      fontWeight: "Light",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "16px",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                   <Select
                    value={trainMethod}
                    onChange={ev => setTrainMethod(ev.target.value)}
                    color="primary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="24px"
                        height="24px"
                        src="/arrow-drop-down-1.png"
                        style={{ marginRight: "16px" }}
                      />
                    )}
                  >
                    <MenuItem value=""><em>Both</em></MenuItem>
                    <MenuItem value="Weight">weight lifting</MenuItem>
                    <MenuItem value = "Body">body weight</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
              <div className="frame-container">
                <div className="fitness-level-wrapper">
                  <div className="fitness-level">{`Fitness level: `}</div>
                </div>
                <FormControl
                  className="options"
                  variant="standard"
                  sx={{
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fbfbfb",
                    borderRadius: "0px 0px 0px 0px",
                    width: "100%",
                    height: "45px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "45px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "45px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "45px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "45px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#000",
                      fontSize: 24,
                      fontWeight: "Light",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "16px",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select
                    value={fitnessLevel}
                    onChange={ev => setFitnessLevel(ev.target.value)}
                    color="primary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="24px"
                        height="24px"
                        src="/arrow-drop-down-2.png"
                        style={{ marginRight: "16px" }}
                      />
                    )}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Intermediate">Intermediate</MenuItem>
                    <MenuItem value="Beginner">Beginner</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
              </div>
              <div className="fitness-goal">
                <div className="fitness-goal1">Fitness goal</div>
                <div className="select">
                  <div className="level-parent">
                    <div className="levels">
                      <div className="text2">
                        <div className="check-parent">
                          <input
                            className="check"
                            checked={checkBoxStates.buildMuscle}
                            name="buildMuscle"
                            type="checkbox"
                            onChange={handleCheckboxChange}
                          />
                          <div className="build-muscle">Build muscle</div>
                        </div>
                        <div className="check-group">
                          <input 
                          className="check" 
                          type="checkbox"
                          name="loseWeight"
                          checked={checkBoxStates.loseWeight} 
                          onChange={handleCheckboxChange}
                          />
                          <div className="loss-weight">Loss weight</div>
                        </div>
                        <div className="check-group">
                          <input 
                          className="check" 
                          type="checkbox"
                          name="flexibility"
                          checked={checkBoxStates.flexibility} 
                          onChange={handleCheckboxChange}
                          />
                          <div className="loss-weight">Flexibility and Mobility</div>
                        </div>
                        <div className="check-container">
                          <input
                            className="check"
                            name="improveFitness"
                            checked={checkBoxStates.improveFitness}
                            type="checkbox"
                            onChange={handleCheckboxChange}
                          />
                          <div className="improve-overall-fitnness">
                            Improve overall fitnness
                          </div>
                        </div>
                        <div className="frame-div">
                          <input 
                            className="check"
                            name="gainMass"
                            checked={checkBoxStates.gainMass}
                            type="checkbox"
                            onChange={handleCheckboxChange}/>
                          <div className="gain-mass">Gain Muscle mass</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Button
          className="button"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#ffff",
            fontSize: "24",
            background: "#E71212;",
            borderRadius: "40px",
            "&:hover": { background: "rgba(0, 0, 0, 0.48)" },
            width: 280,
            height: 61,
          }}
          onClick={saveForm}
        >
          Create
        </Button>
      </main>
    </div>
  );
};

export default Profille2;
