import { createWorkoutFunction, deleteWorkoutFunction, updateWorkoutfunction } from "./mutations/workoutMutations";
import { createExerciseFunction, deleteExerciseFunction } from "./mutations/exerciseMutations";
import { createSetFunction } from "./mutations/setMutation";
import { fetchExercises } from "./queries/exerciseQueries";
import { fetchSets } from "./queries/setsQueries";

export const handleCreateWorkout = async (userID, title, date, setTitle, setDate, workoutCreation, setWorkoutCreation) => {
  // If required information is provided, create a workout.
  if (title && date) {
    const workoutInput = {
      title: title,
      date: date,
      userID: userID
    };

    try {
      // First, create the workout
      await createWorkoutFunction(workoutInput);

      // Then, clear the form fields after creating a workout
      setTitle('');
      setDate('');

      // Finally, toggle this to fetch workouts every time a workout is created.
      setWorkoutCreation(!workoutCreation);

    } catch (error) {
      console.log('Error handling create workout:', error);
    }
  }
};


export const handleWorkoutClick = (id, title, setActiveWorkout, setActiveWorkoutTitle) => {
    // Get the information of the workout that is clicked.
    setActiveWorkout(id);
    setActiveWorkoutTitle(title);
  };

  export const handleAddExercise = async (exerciseName, setExerciseName, activeWorkout, userID, setExercises) => {
    // If required information is provided create a workout.
    if (exerciseName) {
      const exerciseInput = {
        name: exerciseName,
        workoutID: activeWorkout,
        userID: userID
      };
  
      try {
        // First, create the exercise
        await createExerciseFunction(exerciseInput);
  
        // Then, clear the form field
        setExerciseName('');
  
        // Finally, fetch exercises again after adding a new exercise
        await fetchExercises(activeWorkout, setExercises);
  
      } catch (error) {
        console.log('Error handling add exercise:', error);
      }
    }
  };
  

  export const handleAddSet = async (exerciseID, currentWeight, currentRepetitions, activeWorkout, userID, setActiveExercise, setSets) => {
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
      };
  
      try {
        // First, create the set
        await createSetFunction(setInput);
  
        // Then, set active exercise back to null so that set input boxes disappear.
        setActiveExercise(null);
  
        // Finally, fetch sets again to update.
        await fetchSets(activeWorkout, setSets);
  
      } catch (error) {
        console.log('Error handling add set:', error);
      }
    } else {
      window.alert('Enter a valid weight and reps.');
    }
  };
  

export const handleDeleteWorkout = async (event, workoutID, workoutCreation, setWorkoutCreation) => {
    event.stopPropagation();
    
  try {
    // First, delete the workout
    await deleteWorkoutFunction(workoutID);

    // Then, update the workout creation state
    setWorkoutCreation(!workoutCreation);

    // Both the delete and state update are completed before moving on
  } catch (error) {
    console.log('Error handling delete and state update:', error);
  }
};

export const handleDeleteExercise = async (event, exerciseID, activeWorkout, setExercises) => {
  event.stopPropagation();
  try {
    // First, delete the exercise
    await deleteExerciseFunction(exerciseID);

    // Then, fetch the updated list of exercises
    await fetchExercises(activeWorkout, setExercises);

    // Both delete and fetch are completed before moving on
  } catch (error) {
    console.log('Error handling delete and fetch:', error);
  }
}