import { API, graphqlOperation } from 'aws-amplify';
import { createWorkout, deleteWorkout, updateWorkout } from '../graphql/mutations';

export const createWorkoutFunction = async (input) => {
  try {
      const response = await API.graphql(graphqlOperation(createWorkout, {input: input}));

      if (response.data) {
          console.log('workout created');
      }
  } catch (error) {
      console.error('Error creating wrokout:', error);
    }
};

export const deleteWorkoutFunction = async (workoutID) => {
  try {
    // Set id to the workout id to be deleted
    const filter = {
      id: workoutID 
    };

    const response = await API.graphql(
      graphqlOperation(deleteWorkout, {input: filter})
    );
    
    console.log('Workout deleted.')
  } catch (error){
      console.log('error on deleting workout', error);
  }
};

// export const updateWorkoutfunction = async (input) => {
//   try {

//     const response = await API.graphql(
//       graphqlOperation(updateWorkout, {input: input})
//     );
    
//     console.log('Workout updated.')
//   } catch (error){
//       console.log('error on deleting workout', error);
//   }
// }