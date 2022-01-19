export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type InputPlaceType = {
  desciption: Scalars['String'];
  mainPhoto: Scalars['String'];
  owner: Scalars['ID'];
  photos: Array<InputMaybe<Scalars['String']>>;
  priceByNight: Scalars['Float'];
  type: Scalars['String'];
};

export type InputReviewType = {
  author: Scalars['ID'];
  feedback?: InputMaybe<Scalars['String']>;
  place: Scalars['ID'];
  rate: Scalars['Float'];
};

export type InputUserType = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPlace?: Maybe<Place>;
  createReview?: Maybe<Review>;
  createUser?: Maybe<User>;
  deletePlace?: Maybe<Place>;
  deleteReview?: Maybe<Review>;
  deleteUser?: Maybe<User>;
  updatePlace?: Maybe<Place>;
  updateReview?: Maybe<Review>;
  updateUser?: Maybe<User>;
};


export type MutationCreatePlaceArgs = {
  body: InputPlaceType;
};


export type MutationCreateReviewArgs = {
  body: InputReviewType;
};


export type MutationCreateUserArgs = {
  body: InputUserType;
};


export type MutationDeletePlaceArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteReviewArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  _id: Scalars['ID'];
};


export type MutationUpdatePlaceArgs = {
  _id: Scalars['ID'];
  body: InputPlaceType;
};


export type MutationUpdateReviewArgs = {
  _id: Scalars['ID'];
  body: InputReviewType;
};


export type MutationUpdateUserArgs = {
  _id: Scalars['ID'];
  body: InputUserType;
};

export type PaginationType = {
  __typename?: 'PaginationType';
  count: Scalars['Int'];
  page: Scalars['Int'];
  pages: Scalars['Int'];
};

export type Place = {
  __typename?: 'Place';
  _id: Scalars['ID'];
  desciption?: Maybe<Scalars['String']>;
  mainPhoto?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  priceByNight?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};

export type PlaceEdgesType = {
  __typename?: 'PlaceEdgesType';
  edges?: Maybe<Array<Maybe<Place>>>;
  pagination?: Maybe<PaginationType>;
};

export type Query = {
  __typename?: 'Query';
  listPlace?: Maybe<PlaceEdgesType>;
  listReview?: Maybe<ReviewEdgesType>;
  listUser?: Maybe<UserEdgesType>;
  readPlace?: Maybe<Place>;
  readReview?: Maybe<Review>;
  readUser?: Maybe<User>;
  reviewByUser?: Maybe<Array<Maybe<Review>>>;
  searchPlace?: Maybe<Array<Maybe<Place>>>;
  searchReview?: Maybe<Array<Maybe<Review>>>;
  searchUser?: Maybe<Array<Maybe<User>>>;
};


export type QueryListPlaceArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryListReviewArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryListUserArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryReadPlaceArgs = {
  _id: Scalars['ID'];
};


export type QueryReadReviewArgs = {
  _id: Scalars['ID'];
};


export type QueryReadUserArgs = {
  _id: Scalars['ID'];
};


export type QueryReviewByUserArgs = {
  _id?: InputMaybe<Scalars['ID']>;
};


export type QuerySearchPlaceArgs = {
  fields: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type QuerySearchReviewArgs = {
  fields: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type QuerySearchUserArgs = {
  fields: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['ID'];
  author?: Maybe<User>;
  feedback?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['ID']>;
  rate?: Maybe<Scalars['Float']>;
};

export type ReviewEdgesType = {
  __typename?: 'ReviewEdgesType';
  edges?: Maybe<Array<Maybe<Review>>>;
  pagination?: Maybe<PaginationType>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
};

export type UserEdgesType = {
  __typename?: 'UserEdgesType';
  edges?: Maybe<Array<Maybe<User>>>;
  pagination: PaginationType;
};
