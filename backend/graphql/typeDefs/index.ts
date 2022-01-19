export default `type Place {
  _id: ID!
  owner: User
  desciption: String
  mainPhoto: String
  photos: [String]
  priceByNight: Float
  reviews: [Review]
}

input inputPlaceType {
  type: String!
  owner: ID!
  desciption: String!
  mainPhoto: String!
  photos: [String]!
  priceByNight: Float!
}

type Mutation {
  createPlace(body: inputPlaceType!): Place
  updatePlace(_id: ID!, body: inputPlaceType!): Place
  deletePlace(_id: ID!): Place
}

type PaginationType {
  page: Int
  pages: Int
  count: Int
}

type PlaceEdgesType {
  edges: [Place]
  pagination: PaginationType
}

type listArgsType {
  page: Int
  limit: Int
  sortBy: String
  sortOrder: String
}

type searchArgsType {
  limit: Int
  query: String!
  fields: String!
}

type Query {
  readPlace(_id: ID!): Place
  listPlace(page: Int, limit: Int, sortBy: String, sortOrder: String): PlaceEdgesType
  searchPlace(limit: Int, query: String!, fields: String!): [Place]
}
 type Review {
  _id: ID!
  author: User
  feedback: String
  rate: Float
  place: ID
}

type Query {
  reviewByUser(_id: ID): [Review]
}

input inputReviewType {
  author: ID!
  feedback: String
  rate: Float!
  place: ID!
}

type Mutation {
  createReview(body: inputReviewType!): Review
  updateReview(_id: ID!, body: inputReviewType!): Review
  deleteReview(_id: ID!): Review
}

type PaginationType {
  page: Int
  pages: Int
  count: Int
}

type ReviewEdgesType {
  edges: [Review]
  pagination: PaginationType
}

type listArgsType {
  page: Int
  limit: Int
  sortBy: String
  sortOrder: String
}

type searchArgsType {
  limit: Int
  query: String!
  fields: String!
}

type Query {
  readReview(_id: ID!): Review
  listReview(page: Int, limit: Int, sortBy: String, sortOrder: String): ReviewEdgesType
  searchReview(limit: Int, query: String!, fields: String!): [Review]
}
 type User {
  _id: ID!
  name: String
  email: String
  photo: String
}

input inputUserType {
  name: String!
  email: String!
}

type Mutation {
  createUser(body: inputUserType!): User
  updateUser(_id: ID!, body: inputUserType!): User
  deleteUser(_id: ID!): User
}

type PaginationType {
  page: Int!
  pages: Int!
  count: Int!
}

type UserEdgesType {
  edges: [User]
  pagination: PaginationType!
}

type listArgsType {
  page: Int
  limit: Int
  sortBy: String
  sortOrder: String
}

type searchArgsType {
  limit: Int
  query: String!
  fields: String!
}

type Query {
  readUser(_id: ID!): User
  listUser(page: Int, limit: Int, sortBy: String, sortOrder: String): UserEdgesType
  searchUser(limit: Int, query: String!, fields: String!): [User]
}
`;