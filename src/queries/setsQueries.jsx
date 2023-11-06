import { API, graphqlOperation } from 'aws-amplify';
import { listSets } from '../graphql/queries';

export const fetchSets = async (workoutID, setSets) => {
    try {
      const filter = {
        workoutID: {eq: workoutID},
      };

      const setData = await API.graphql(
        graphqlOperation(listSets, {filter: filter})
      );
      const setsList = setData.data.listSets.items;

      // Sort workouts by date
      setsList.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      console.log('set list', setsList);
      setSets(setsList);
    } catch (error){
        console.log('error on the fetching sets', error);
    }
};