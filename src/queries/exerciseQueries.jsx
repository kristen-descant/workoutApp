import { API, graphqlOperation } from 'aws-amplify';
import { listExercises } from '../graphql/queries';

export const fetchExercises = async (workoutID, setExercises) => {
    try {
      const filter = {
        workoutID: {eq: workoutID},
      };

      const exerciseData = await API.graphql(
        graphqlOperation(listExercises, {filter: filter})
      );
      const exerciseList = exerciseData.data.listExercises.items;

      // Sort workouts by date
      exerciseList.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      console.log('exercise list', exerciseList);
      setExercises(exerciseList);
    } catch (error){
        console.log('error on the fetching exercises', error);
    }
};