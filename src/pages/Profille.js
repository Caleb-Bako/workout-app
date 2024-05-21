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

const Profille = () => {
  const [checkChecked, setCheckChecked] = useState(true);
  const [check2Checked, setCheck2Checked] = useState(true);
  return (
    <div className="profille1">
      <div className="navigation-bar1">
        <div className="logo-group">
          <div className="logo1">
            <img
              className="vital-signs-icon1"
              loading="lazy"
              alt=""
              src="/vital-signs.svg"
            />
            <b className="active1">Active</b>
          </div>
          <NavSections />
        </div>
      </div>
      <main className="profile">
        <section className="profile-parent">
          <h1 className="profile1">Profile</h1>
          <div className="user-information">
            <div className="first-section">
              <div className="name">
                <div className="text1">
                  <div className="name1">Name</div>
                </div>
                <TextField
                  className="input-field"
                  placeholder="John snow"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#000" },
                    "& .MuiInputBase-root": {
                      height: "49px",
                      backgroundColor: "#fbfbfb",
                      borderRadius: "8px",
                      fontSize: "24px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
              </div>
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
                    <MenuItem>Male</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
            </div>
            <div className="second-section">
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
                    <MenuItem>weight lifting</MenuItem>
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
                    <MenuItem>Intermediate</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
              <div className="fitness-goal">
                <div className="fitness-goal1">Fitness goal</div>
                <div className="select">
                  <div className="level-parent">
                    <FormControl
                      className="level"
                      variant="standard"
                      sx={{
                        borderTopWidth: "0.20000000298023224px",
                        borderRightWidth: "0.20000000298023224px",
                        borderBottomWidth: "0.20000000298023224px",
                        borderLeftWidth: "0.20000000298023224px",
                        backgroundColor: "#fbfbfb",
                        borderRadius: "8px",
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
                      <InputLabel color="secondary" />
                      <Select
                        color="secondary"
                        disableUnderline
                        displayEmpty
                        IconComponent={() => (
                          <img
                            width="24px"
                            height="24px"
                            src="/arrow-drop-down-3.svg"
                            style={{ marginRight: "40.30000000000291px" }}
                          />
                        )}
                      >
                        <MenuItem>2 selected</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                    <div className="levels">
                      <div className="text2">
                        <div className="check-parent">
                          <input
                            className="check"
                            checked={checkChecked}
                            type="checkbox"
                            onChange={(event) =>
                              setCheckChecked(event.target.checked)
                            }
                          />
                          <div className="build-muscle">Build muscle</div>
                        </div>
                        <div className="check-group">
                          <input className="check1" type="checkbox" />
                          <div className="loss-weight">Loss weight</div>
                        </div>
                        <div className="check-container">
                          <input
                            className="check2"
                            checked={check2Checked}
                            type="checkbox"
                            onChange={(event) =>
                              setCheck2Checked(event.target.checked)
                            }
                          />
                          <div className="improve-overall-fitnness">
                            Improve overall fitnness
                          </div>
                        </div>
                        <div className="frame-div">
                          <input className="check3" type="checkbox" />
                          <div className="gain-mass">Gain mass</div>
                        </div>
                        <div className="check-parent1">
                          <input className="check4" type="checkbox" />
                          <div className="improve-endurance">{`Improve endurance `}</div>
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
            color: "#fff",
            fontSize: "24",
            background: "rgba(0, 0, 0, 0.48)",
            borderRadius: "40px",
            "&:hover": { background: "rgba(0, 0, 0, 0.48)" },
            width: 280,
            height: 61,
          }}
        >
          Save
        </Button>
      </main>
    </div>
  );
};

export default Profille;
