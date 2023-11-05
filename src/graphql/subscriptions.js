/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onCreateWorkout(filter: $filter) {
      id
      title
      date
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onUpdateWorkout(filter: $filter) {
      id
      title
      date
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onDeleteWorkout(filter: $filter) {
      id
      title
      date
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onCreateExercise(filter: $filter) {
      id
      name
      workoutID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onUpdateExercise(filter: $filter) {
      id
      name
      workoutID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onDeleteExercise(filter: $filter) {
      id
      name
      workoutID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet($filter: ModelSubscriptionSetFilterInput) {
    onCreateSet(filter: $filter) {
      id
      weight
      repetitions
      exerciseID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet($filter: ModelSubscriptionSetFilterInput) {
    onUpdateSet(filter: $filter) {
      id
      weight
      repetitions
      exerciseID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet($filter: ModelSubscriptionSetFilterInput) {
    onDeleteSet(filter: $filter) {
      id
      weight
      repetitions
      exerciseID
      createdAt
      updatedAt
      __typename
    }
  }
`;
