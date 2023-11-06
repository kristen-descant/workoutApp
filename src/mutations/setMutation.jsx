import { API, graphqlOperation } from 'aws-amplify';
import { createSet } from '../graphql/mutations';

export const createSetFunction = async (input) => {
    try {
        const response = await API.graphql(graphqlOperation(createSet, {input: input}));

        if (response.data) {
            console.log('exercise created');
        }
    } catch (error) {
        console.error('Error creating exercise:', error);
      }
};