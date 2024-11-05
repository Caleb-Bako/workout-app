import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { TextField } from "@mui/material";
import "./Exercises.css";
import { UserContext } from '../UserContext';
import { Navigate } from 'react-router-dom';

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios.get('/exercises')
      .then(response => {
        setExercises(response.data);
        setFilteredExercises(response.data); // Initialize with all exercises
      })
      .catch(error => {
        console.error('Error fetching exercises:', error);
      });
  }, []);

  const handleExerciseClick = (exerciseName) => {
    axios.get(`/exercises/${exerciseName}`)
      .then(response => {
        setSelectedExercise(response.data);
      })
      .catch(error => {
        console.error('Error fetching exercise details:', error);
      });
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredExercises(exercises.filter(exercise => 
      exercise.exerciseName.toLowerCase().includes(query)
    ));
  };

  return (
    user ?
    <form className="exercises">
      <main className="body">
        <div className="left-section">
            <div className="help">
            <TextField
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search exercises"
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: '21px 21px 0 0',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '21px 0 0 21px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#000',
                  }
                }}
              />
              <div className='sc'>
              <img className="search-icon" alt="" src="/search.svg" />
              </div>
          </div>
          <div className="list-of-exercises">
            {filteredExercises.map((exercise) => (
              <div 
                key={exercise._id} 
                className={`exercise ${selectedExercise && selectedExercise.exerciseName === exercise.exerciseName ? 'active' : ''}`}
                onClick={() => handleExerciseClick(exercise.exerciseName)}
              >
                <div>{exercise.exerciseName}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="exercise-details">
          {selectedExercise ? (
            <div className="content">
              <div className="heading">
                <div>{selectedExercise.exerciseName}</div>
              </div>
              <div className="body1">
                <div className="a-bench-press">
                  {selectedExercise.description}
                </div>
                <div className="description">
                  <div className="how-to-perform">How to perform exercise</div>
                  <div className="setup-lie-on-a-flat-bench-wit-wrapper">
                    <ul className="setup-lie-on-a-flat-bench-wit">
                      {selectedExercise.performExercise.map((muscle, index) => (
                        <li key={index}>{muscle}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="targeted-muscles">
                  <div className="targeted-muscles1">Targeted muscles</div>
                  <div className="a-bench-press">{selectedExercise.targetedMuscles}</div>
                </div>
              </div>
            </div>
          ) : (
            <div>Select an exercise to see details</div>
          )}
        </div>
      </main>
    </form>:<Navigate to={'/'}/>
  );
};

export default Exercises;
