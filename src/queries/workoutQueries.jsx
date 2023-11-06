import { API, graphqlOperation } from 'aws-amplify';
import { listWorkouts } from '../graphql/queries';

export const fetchWorkouts = async (userID, setWorkouts) => {
    try {
      const filter = {
        userID: {eq: userID},
      };

      const workoutData = await API.graphql(
        graphqlOperation(listWorkouts, {filter: filter})
      );
      const workoutList = workoutData.data.listWorkouts.items;

      // Sort workouts by date
      workoutList.sort((a, b) => new Date(b.date) - new Date(a.date));
      console.log('workout list', workoutList);
      setWorkouts(workoutList);
    } catch (error){
        console.log('error on the fetching workouts', error);
    }
  };