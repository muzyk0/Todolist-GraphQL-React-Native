import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTask: Task;
  addTodolist: Todolist;
  login: LoginResponse;
  logout: Scalars['Boolean'];
  register: User;
  removeTask: Scalars['Boolean'];
  removeTodolist: Scalars['Boolean'];
  revokeRefreshTokensForUser: Scalars['Boolean'];
  updateTask: Task;
  updateTodolist: Todolist;
};


export type MutationAddTaskArgs = {
  description: Scalars['String'];
  title: Scalars['String'];
  todolistId: Scalars['Int'];
};


export type MutationAddTodolistArgs = {
  description?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRemoveTaskArgs = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  todolistId?: Maybe<Scalars['Int']>;
};


export type MutationRemoveTodolistArgs = {
  id: Scalars['Int'];
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['Int'];
};


export type MutationUpdateTaskArgs = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  todolistId?: Maybe<Scalars['Int']>;
};


export type MutationUpdateTodolistArgs = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  todolists: Array<Todolist>;
  users: Array<User>;
};

export type Task = {
  __typename?: 'Task';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Todolist = {
  __typename?: 'Todolist';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  tasks: Array<Task>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  todolists: Array<Todolist>;
  updatedAt: Scalars['DateTime'];
};

export type RemoveTaskMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveTaskMutation = { __typename?: 'Mutation', removeTask: boolean };

export type TaskSnippetFragment = { __typename?: 'Task', id: number, title: string, description: string };

export type TodolistSnippetFragment = { __typename?: 'Todolist', id: number, title: string, description?: string | null | undefined };

export type TodolistsQueryVariables = Exact<{ [key: string]: never; }>;


export type TodolistsQuery = { __typename?: 'Query', todolists: Array<{ __typename?: 'Todolist', id: number, title: string, description?: string | null | undefined, tasks: Array<{ __typename?: 'Task', id: number, title: string, description: string }> }> };

export type AddTodolistMutationVariables = Exact<{
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
}>;


export type AddTodolistMutation = { __typename?: 'Mutation', addTodolist: { __typename?: 'Todolist', id: number, title: string } };

export type RemoveTodolistMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveTodolistMutation = { __typename?: 'Mutation', removeTodolist: boolean };

export type UserSnippetFragment = { __typename?: 'User', id: number, name: string, email: string };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, name: string, email: string } | null | undefined };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, name: string, email: string }> };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string, user: { __typename?: 'User', id: number, name: string, email: string } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: number, name: string, email: string } };

export const TaskSnippetFragmentDoc = gql`
    fragment TaskSnippet on Task {
  id
  title
  description
}
    `;
export const TodolistSnippetFragmentDoc = gql`
    fragment TodolistSnippet on Todolist {
  id
  title
  description
}
    `;
export const UserSnippetFragmentDoc = gql`
    fragment UserSnippet on User {
  id
  name
  email
}
    `;
export const RemoveTaskDocument = gql`
    mutation RemoveTask($id: Int!) {
  removeTask(id: $id)
}
    `;
export type RemoveTaskMutationFn = Apollo.MutationFunction<RemoveTaskMutation, RemoveTaskMutationVariables>;

/**
 * __useRemoveTaskMutation__
 *
 * To run a mutation, you first call `useRemoveTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTaskMutation, { data, loading, error }] = useRemoveTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTaskMutation(baseOptions?: Apollo.MutationHookOptions<RemoveTaskMutation, RemoveTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveTaskMutation, RemoveTaskMutationVariables>(RemoveTaskDocument, options);
      }
export type RemoveTaskMutationHookResult = ReturnType<typeof useRemoveTaskMutation>;
export type RemoveTaskMutationResult = Apollo.MutationResult<RemoveTaskMutation>;
export type RemoveTaskMutationOptions = Apollo.BaseMutationOptions<RemoveTaskMutation, RemoveTaskMutationVariables>;
export const TodolistsDocument = gql`
    query Todolists {
  todolists {
    ...TodolistSnippet
    tasks {
      ...TaskSnippet
    }
  }
}
    ${TodolistSnippetFragmentDoc}
${TaskSnippetFragmentDoc}`;

/**
 * __useTodolistsQuery__
 *
 * To run a query within a React component, call `useTodolistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodolistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodolistsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodolistsQuery(baseOptions?: Apollo.QueryHookOptions<TodolistsQuery, TodolistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodolistsQuery, TodolistsQueryVariables>(TodolistsDocument, options);
      }
export function useTodolistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodolistsQuery, TodolistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodolistsQuery, TodolistsQueryVariables>(TodolistsDocument, options);
        }
export type TodolistsQueryHookResult = ReturnType<typeof useTodolistsQuery>;
export type TodolistsLazyQueryHookResult = ReturnType<typeof useTodolistsLazyQuery>;
export type TodolistsQueryResult = Apollo.QueryResult<TodolistsQuery, TodolistsQueryVariables>;
export const AddTodolistDocument = gql`
    mutation AddTodolist($title: String!, $description: String) {
  addTodolist(title: $title, description: $description) {
    id
    title
  }
}
    `;
export type AddTodolistMutationFn = Apollo.MutationFunction<AddTodolistMutation, AddTodolistMutationVariables>;

/**
 * __useAddTodolistMutation__
 *
 * To run a mutation, you first call `useAddTodolistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodolistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodolistMutation, { data, loading, error }] = useAddTodolistMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useAddTodolistMutation(baseOptions?: Apollo.MutationHookOptions<AddTodolistMutation, AddTodolistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTodolistMutation, AddTodolistMutationVariables>(AddTodolistDocument, options);
      }
export type AddTodolistMutationHookResult = ReturnType<typeof useAddTodolistMutation>;
export type AddTodolistMutationResult = Apollo.MutationResult<AddTodolistMutation>;
export type AddTodolistMutationOptions = Apollo.BaseMutationOptions<AddTodolistMutation, AddTodolistMutationVariables>;
export const RemoveTodolistDocument = gql`
    mutation RemoveTodolist($id: Int!) {
  removeTodolist(id: $id)
}
    `;
export type RemoveTodolistMutationFn = Apollo.MutationFunction<RemoveTodolistMutation, RemoveTodolistMutationVariables>;

/**
 * __useRemoveTodolistMutation__
 *
 * To run a mutation, you first call `useRemoveTodolistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTodolistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTodolistMutation, { data, loading, error }] = useRemoveTodolistMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTodolistMutation(baseOptions?: Apollo.MutationHookOptions<RemoveTodolistMutation, RemoveTodolistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveTodolistMutation, RemoveTodolistMutationVariables>(RemoveTodolistDocument, options);
      }
export type RemoveTodolistMutationHookResult = ReturnType<typeof useRemoveTodolistMutation>;
export type RemoveTodolistMutationResult = Apollo.MutationResult<RemoveTodolistMutation>;
export type RemoveTodolistMutationOptions = Apollo.BaseMutationOptions<RemoveTodolistMutation, RemoveTodolistMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...UserSnippet
  }
}
    ${UserSnippetFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    ...UserSnippet
  }
}
    ${UserSnippetFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    user {
      ...UserSnippet
    }
  }
}
    ${UserSnippetFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!, $name: String!) {
  register(email: $email, password: $password, name: $name) {
    id
    name
    email
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;