import { API, graphqlOperation } from 'aws-amplify';
import { createExercise } from '../graphql/mutations';

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