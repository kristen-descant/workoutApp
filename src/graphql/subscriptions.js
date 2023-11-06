/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout(
    $filter: ModelSubscriptionWorkoutFilterInput
    $userID: String
  ) {
    onCreateWorkout(filter: $filter, userID: $userID) {
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
  subscription OnUpdateWorkout(
    $filter: ModelSubscriptionWorkoutFilterInput
    $userID: String
  ) {
    onUpdateWorkout(filter: $filter, userID: $userID) {
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
  subscription OnDeleteWorkout(
    $filter: ModelSubscriptionWorkoutFilterInput
    $userID: String
  ) {
    onDeleteWorkout(filter: $filter, userID: $userID) {
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
  subscription OnCreateExercise(
    $filter: ModelSubscriptionExerciseFilterInput
    $userID: String
  ) {
    onCreateExercise(filter: $filter, userID: $userID) {
      id
      name
      workoutID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise(
    $filter: ModelSubscriptionExerciseFilterInput
    $userID: String
  ) {
    onUpdateExercise(filter: $filter, userID: $userID) {
      id
      name
      workoutID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise(
    $filter: ModelSubscriptionExerciseFilterInput
    $userID: String
  ) {
    onDeleteExercise(filter: $filter, userID: $userID) {
      id
      name
      workoutID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet(
    $filter: ModelSubscriptionSetFilterInput
    $userID: String
  ) {
    onCreateSet(filter: $filter, userID: $userID) {
      id
      weight
      repetitions
      exerciseID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet(
    $filter: ModelSubscriptionSetFilterInput
    $userID: String
  ) {
    onUpdateSet(filter: $filter, userID: $userID) {
      id
      weight
      repetitions
      exerciseID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet(
    $filter: ModelSubscriptionSetFilterInput
    $userID: String
  ) {
    onDeleteSet(filter: $filter, userID: $userID) {
      id
      weight
      repetitions
      exerciseID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onCreateUser(filter: $filter, id: $id) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onUpdateUser(filter: $filter, id: $id) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onDeleteUser(filter: $filter, id: $id) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
