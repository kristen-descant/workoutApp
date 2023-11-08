import { API, graphqlOperation } from 'aws-amplify';
import { createExercise, deleteExercise } from '../graphql/mutations';

export const createExerciseFunction = async (input) => {
    try {
        const response = await API.graphql(graphqlOperation(createExercise, {input: input}));

        if (response.data) {
            console.log('exercise created');
        }
    } catch (error) {
        console.error('Error creating exercise:', error);
      }
};

export const deleteExerciseFunction = async (exerciseID) => {
    try {
      // Set id to the workout id to be deleted
      const filter = {
        id: exerciseID 
      };
  
      const response = await API.graphql(
        graphqlOperation(deleteExercise, {input: filter})
      );
      
      console.log('Exercise deleted.')
    } catch (error){
        console.log('error on deleting exercise', error);
    }
  };