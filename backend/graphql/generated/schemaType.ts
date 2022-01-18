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

export type Mutation = {
  __typename?: 'Mutation';
  addReview?: Maybe<Review>;
  addUser?: Maybe<User>;
  placeCreate?: Maybe<Place>;
  placeDelete?: Maybe<Place>;
  placeUpdate?: Maybe<Place>;
};


export type MutationAddReviewArgs = {
  body?: InputMaybe<InputReviewType>;
};


export type MutationAddUserArgs = {
  body?: InputMaybe<InputUserType>;
};


export type MutationPlaceCreateArgs = {
  body?: InputMaybe<InputPlaceType>;
};


export type MutationPlaceDeleteArgs = {
  _id?: InputMaybe<Scalars['ID']>;
};


export type MutationPlaceUpdateArgs = {
  body?: InputMaybe<InputPlaceType>;
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

export type PlacePagination = {
  __typename?: 'PlacePagination';
  edges?: Maybe<Array<Maybe<Place>>>;
  pagination?: Maybe<PaginationInfo>;
};

export type Query = {
  __typename?: 'Query';
  place?: Maybe<Place>;
  placeList?: Maybe<PlacePagination>;
  reviewByUser?: Maybe<Array<Maybe<Review>>>;
  user?: Maybe<User>;
  userList?: Maybe<Array<Maybe<User>>>;
};


export type QueryPlaceArgs = {
  _id?: InputMaybe<Scalars['ID']>;
};


export type QueryPlaceListArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryReviewByUserArgs = {
  _id?: InputMaybe<Scalars['ID']>;
};


export type QueryUserArgs = {
  _id?: InputMaybe<Scalars['ID']>;
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['ID'];
  author?: Maybe<User>;
  feedback?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['ID']>;
  rate?: Maybe<Scalars['Float']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
};

export type InputPlaceType = {
  desciption?: InputMaybe<Scalars['String']>;
  mainPhoto?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  priceByNight?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type InputReviewType = {
  _id?: InputMaybe<Scalars['ID']>;
  feedback?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['ID']>;
  rate?: InputMaybe<Scalars['Float']>;
};

export type InputUserType = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type PaginationInfo = {
  __typename?: 'paginationInfo';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
};
