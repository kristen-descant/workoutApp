import { createWorkoutFunction, deleteWorkoutFunction, updateWorkoutfunction } from "./mutations/workoutMutations";
import { createExerciseFunction } from "./mutations/exerciseMutations";
import { createSetFunction } from "./mutations/setMutation";
import { fetchExercises } from "./queries/exerciseQueries";
import { fetchSets } from "./queries/setsQueries";

export const handleCreateWorkout = (userID, title, date, setTitle, setDate, workoutCreation, setWorkoutCreation) => {
    // If required information is provided, create a workout.
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
      // Toggle this to fetch workouts every time a workout is created.
      setWorkoutCreation(!workoutCreation);
    }
  };

export const handleWorkoutClick = (id, title, setActiveWorkout, setActiveWorkoutTitle) => {
    // Get the information of the workout that is clicked.
    setActiveWorkout(id);
    setActiveWorkoutTitle(title);
  };

export const handleAddExercise = (exerciseName, setExerciseName, activeWorkout, userID, setExercises) => {
    // If required information is provided create a workout.
    if (exerciseName) {
        const exerciseInput = {
        name: exerciseName,
        workoutID: activeWorkout,
        userID: userID
        };
        createExerciseFunction(exerciseInput);
        // Clear form field
        setExerciseName('');
        // Fetch exercises again after adding a new exercise
        fetchExercises(activeWorkout, setExercises);
    }
};

export const handleAddSet = (exerciseID, currentWeight, currentRepetitions, activeWorkout, userID, setActiveExercise, setSets) => {
    // If required information is provided create a set.
    if (currentWeight && currentRepetitions) {
      const setInput = {
        // Weight and reps are stored in DynamoDB as numbers.
        // Convert string variables to numbers.
        weight: +currentWeight,
        repetitions: +currentRepetitions,
        exerciseID: exerciseID,
        workoutID: activeWorkout,
        userID: userID
      }
      createSetFunction(setInput);
      // setActiveExercise back to null so that set input boxes disappear.
      setActiveExercise(null);
      // Fetch sets again to update.
      fetchSets(activeWorkout, setSets);
    } else {
      window.alert('Enter a valid weight and reps.')
    }
}

export const handleDeleteWorkout = (event, workoutID, workoutCreation, setWorkoutCreation) => {
    event.stopPropagation();
    deleteWorkoutFunction(workoutID);
    setWorkoutCreation(!workoutCreation);
};