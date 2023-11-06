import { API, graphqlOperation } from 'aws-amplify';
import { createWorkout } from '../graphql/mutations';

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