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
    $workoutID: String
  ) {
    onCreateExercise(filter: $filter, workoutID: $workoutID) {
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
  subscription OnUpdateExercise(
    $filter: ModelSubscriptionExerciseFilterInput
    $workoutID: String
  ) {
    onUpdateExercise(filter: $filter, workoutID: $workoutID) {
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
  subscription OnDeleteExercise(
    $filter: ModelSubscriptionExerciseFilterInput
    $workoutID: String
  ) {
    onDeleteExercise(filter: $filter, workoutID: $workoutID) {
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
  subscription OnCreateSet(
    $filter: ModelSubscriptionSetFilterInput
    $exerciseID: String
  ) {
    onCreateSet(filter: $filter, exerciseID: $exerciseID) {
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
  subscription OnUpdateSet(
    $filter: ModelSubscriptionSetFilterInput
    $exerciseID: String
  ) {
    onUpdateSet(filter: $filter, exerciseID: $exerciseID) {
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
  subscription OnDeleteSet(
    $filter: ModelSubscriptionSetFilterInput
    $exerciseID: String
  ) {
    onDeleteSet(filter: $filter, exerciseID: $exerciseID) {
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
