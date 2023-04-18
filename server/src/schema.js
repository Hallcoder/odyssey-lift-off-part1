const gql = require("graphql-tag");

const typeDefs = gql`
type Query{
    "Query to get tracks array for the homepage client"
    tracksForHome:[Track!]!
    track(id:ID!):Track
}
"A track is a group of modukes that teaches about a specific topic"
type Track{
    id: ID!
    title:String!
    author: Author!
    thumbnail: String!
    length: Int
    modulesCount: Int 
    "Description of this good track"
    description:String
    numberOfViews: Int
    "The module complete array"
    modules:[Module!]!
}
type Module{
    "Module's ID"
    id: ID!
    title: String!
    length: Int
}
"Author of a complete Track"
type Author{
    id: ID!
    name: String!
    photo: String!

}
`

module.exports = typeDefs