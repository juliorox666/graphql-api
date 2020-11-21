const typeDefs = `
  type Book {
    id: ID
    name: String
    author: Author
  }

  type Author {
    id: ID
    name: String
    age: Int
    book: [Book]
  }

  type Query {
    Book(
      id: ID
      name: String
    )
    : [Book]!
  }

  type Mutation {
    MergeBook(
      id: ID
      deleteIt: Boolean
      bookData: BookDataInput
    ) : [Book]!
  }

  input BookDataInput {
    name: String
    author: String
  }
`

export { typeDefs }