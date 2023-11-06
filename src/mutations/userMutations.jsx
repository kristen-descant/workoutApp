import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from '../graphql/queries';
import { createUser } from '../graphql/mutations';

export const checkUserExistence = async (userID, setUserExist) => {
    try {
    
      // Call the getUser query with the authenticated user's ID
      const response = await API.graphql(graphqlOperation(getUser, { id: userID }));
  
      // Check if the response contains user data
      if (response.data.getUser) {
        console.log('User exists:', response.data.getUser);
        setUserExist(true);
      } else {
        console.log('User does not exist in the database');
        setUserExist(false);
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
    }
  };
  
export const createUserFunction = async (input, setUserExist) => {
  try {
    const response = await API.graphql(graphqlOperation(createUser, { input: input }));
    // Check if the response contains data or errors
    if (response.data) {
      // Handle the response, e.g., set userExist to true if successful
      setUserExist(true);
    } 
  } catch (error) {
    console.error('Error creating user:', error);
  }
};
  