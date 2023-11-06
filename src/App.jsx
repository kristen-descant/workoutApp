import React, { useEffect, useState } from 'react';
import './App.css';
import { API, Amplify, graphqlOperation, Auth } from 'aws-amplify'
import awsExports from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { checkUserExistence, createUserFunction } from './mutations/userMutations';
import { fetchWorkouts } from './queries/workoutQueries';
import { createWorkoutFunction } from './mutations/workoutMutations';
import { fetchExercises } from './queries/exerciseQueries';
import { createExerciseFunction } from './mutations/exerciseMutations';

Amplify.configure(awsExports);

function App({ signOut, user }) {

  const [userID, setUserID] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userExist, setUserExist] = useState();
  const [workouts, setWorkouts] = useState([]);
  const [activeWorkout, setActiveWorkout] = useState();
  const [activeWorkoutTitle, setActiveWorkoutTitle] = useState();
  const [workoutCreation, setWorkoutCreation] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [exercises, setExercises] = useState([]);
  const [exerciseName, setExerciseName] = useState();

  useEffect(() => {

    Auth.currentAuthenticatedUser()
    .then(user => {
      // Access the user's unique identifier ("sub")
      setUserID(user.attributes.sub);
      setUserEmail(user.attributes.email)
      console.log(user.attributes)
    })
    .catch(error => {
      console.error('Error getting user ID:', error);
    });
  }, []);

  useEffect(() => {
    if (userID) {
      checkUserExistence(userID, setUserExist);
    }
    if (userID && !userExist) {
      const input = {
        id: userID,
        email: userEmail
      };
      console.log(userID, userEmail)
      createUserFunction(input, setUserExist);
    } else if (userID && userExist) {
      console.log('User exists in database');
    }
  }, [userID]);

  useEffect(() => {
    fetchWorkouts(userID, setWorkouts);
  }, [userID, workoutCreation]);

  const handleCreateWorkout = () => {
    if (title && date) {
      const workoutInput = {
        title: title,
        date: date,
        userID: userID
      };
      createWorkoutFunction(workoutInput);
      // Clear the form fields after creating a workout
      setTitle('');
      setDate('');
      setWorkoutCreation(!workoutCreation);
    }
  }

  const handleWorkoutClick = (id, title) => {
    setActiveWorkout(id);
    setActiveWorkoutTitle(title);
  }

  useEffect(() => {
    if (activeWorkout) {
      fetchExercises(activeWorkout, setExercises);
    }
  }, [activeWorkout]);

  const handleAddExercise = () => {
    if (exerciseName) {
      const exerciseInput = {
        name: exerciseName,
        workoutID: activeWorkout,
        userID: userID
      };
      createExerciseFunction(exerciseInput);
      // Clear form field
      setExerciseName('');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='signout'>
          <button onClick={signOut}>Sign out</button>
        </div>
        {
          !activeWorkout && (
          <div>
            <h1>Welcome to Workout Tracker App</h1>
            <div>
              <h3>Add a workout:</h3>
              <div>
                <input
                    type="text"
                    placeholder="Workout Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                <button onClick={handleCreateWorkout}>Create Workout</button>
              </div>
            </div>
            <div>
              <h3>My Workouts</h3>
              <ul className='workoutList'>
                {workouts.map((workout) => (
                  <li 
                    key={workout.id}
                    onClick={() => handleWorkoutClick(workout.id, workout.title)}>
                    <p>{workout.date} - {workout.title}</p>
                  </li>
                ))}
              </ul>
            </div>
        </div>
          )
        }
        {
          activeWorkout && (
            <div>
              <button onClick={() => 
                {setActiveWorkout(null)
                setExercises(null)}}>Back to workouts</button>
              <h2>{activeWorkoutTitle}</h2>
              <h3>Exercises:</h3>
              <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={exerciseName}
                    onChange={(e) => setExerciseName(e.target.value)}
                  />
                <button onClick={handleAddExercise}>Add</button>
              </div>
              {exercises && (
                <ul className='exerciseList'>
                {exercises
                  .filter((exercise) => exercise.workoutID === activeWorkout)
                  .map((exercise) => (
                    <li key={exercise.id}>
                      {exercise.name}
                    </li>
                  ))
                }
              </ul>
              )}
            </div>
          )
        }
      </header>
    </div>
  );
}

export default withAuthenticator(App);

// https://p2ms52alozdeleusq3nuxzlgqi.appsync-api.us-east-1.amazonaws.com/graphql
// GraphQL endpoint: https://p2ms52alozdeleusq3nuxzlgqi.appsync-api.us-east-1.amazonaws.com/graphql
// GraphQL API KEY: da2-nkvvm657ljbmzdx2odfrt2cpn4
