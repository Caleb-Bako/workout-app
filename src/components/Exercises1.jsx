import { useCallback, useEffect, useState, useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./Exercises1.css";
import { UserContext } from "../UserContext";
import axios from "axios";

const Exercises1 = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [workouts, setWorkOuts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null); // New state for active workout index
  const { id } = useParams();

  useEffect(() => {
    axios.get('/workouts/' + id)
      .then(response => {
        setWorkOuts(response.data);
      })
      .catch(error => {
        console.error('Error fetching exercises:', error);
      });
  }, [id]);

  const handleExerciseClick = (workoutName, index) => {
    axios.get(`/workoutdetails/${workoutName}`)
      .then(response => {
        setSelectedWorkout(response.data[0]);
        setActiveIndex(index); // Set the clicked workout as active
      })
      .catch(error => {
        console.error('Error fetching exercise details:', error);
      });
  };

  return (
    user ? (
      <div className="exercises1">
        <main className="body2">
          <div className="left-section1">
            <div className="list-of-exercises1">
              {workouts.map((workout, index) => (
                <div  
                  key={index} // Unique key prop
                  className={`exercise20 ${activeIndex === index ? 'active' : ''}`} // Apply active class if workout is active
                  onClick={() => handleExerciseClick(workout.workoutName, index)}
                >
                  <div className="bench-press18">{workout.workoutName}</div>
                </div>
              ))}
            </div>
          </div>
          <section className="recommendation">
            <div>
              {selectedWorkout ? (
                <div>
                  <header className="heading1">
                    <h1 className="chest">{selectedWorkout.workoutName}</h1>
                  </header>
                  <div className="table">
                    <div className="table-header">
                      <div className="exercise-name">
                        <div className="number-of-sets">Exercise Name</div>
                      </div>
                      <div className="exercise-name">
                        <div className="number-of-sets">Number of sets</div>
                      </div>
                      <div className="exercise-name1">
                        <div className="number-of-reps">Number of reps</div>
                      </div>
                      <div className="exercise-name1">
                        <div className="required-equipment">Required equipment</div>
                      </div>
                    </div>
                    <div className="table-body">
                      <div className="column">
                        {selectedWorkout.exerciseName && selectedWorkout.exerciseName.map((exercise, index) => (
                          <div className="exercise-name3" key={index}>
                            <div className="bench-press24">{exercise}</div>
                          </div>
                        ))}
                      </div>
                      <div className="column">
                        {selectedWorkout.numberOfSets && selectedWorkout.numberOfSets.map((sets, index) => (
                          <div className="exercise-name3" key={index}>
                            <div className="bench-press24">{sets}</div>
                          </div>
                        ))}
                      </div>
                      <div className="column">
                        {selectedWorkout.numberofReps && selectedWorkout.numberofReps.map((reps, index) => (
                          <div className="exercise-name3" key={index}>
                            <div className="bench-press24">{reps}</div>
                          </div>
                        ))}
                      </div>
                      <div className="column">
                        {selectedWorkout.requiredEquipments && selectedWorkout.requiredEquipments.map((equipment, index) => (
                          <div className="exercise-name3" key={index}>
                            <div className="bench-press24">{equipment}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </section>
        </main>
      </div>
    ) : <Navigate to='/' />
  );
};

export default Exercises1;
