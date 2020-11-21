function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let books = [
  {
    id: 'b1',
    name: 'Titanic',
    author: 'a1'
  },
  {
    id: 'b2',
    name: 'Mobidic',
    author: 'a1'
  },
  {
    id: 'b3',
    name: 'Senhor dos anéis',
    author: 'a2'
  },
]

let authors = [
  {
    id: 'a1',
    name: 'Breno',
    age: 37
  },
  {
    id: 'a2',
    name: 'Julio',
    age: 36
  }
]

const resolvers = {
  Query: {
    Book: (_, {id, name}, ctx) => {
      console.log({ctx})
      let returnedBook = []
      if(id) {
        returnedBook = [{...books.find((book) => book.id === id)}]
      }
      if(name) {
        if(returnedBook.length) {
          returnedBook = [{
            ...returnedBook.find(book => 
              book.name.search(name) !== -1 ? book : undefined
            )
          }]
        }
      }
      if(!id && !name) return books
      return returnedBook[0] && returnedBook[0].id ? returnedBook : []
      
    }
  },
  Mutation: {
    MergeBook: (_, {id, deleteIt, bookData}) => {
      if(!deleteIt) {
        if(id) {
          const updatedBook = {id, name: bookData.name, author: bookData.author}
          books = [...books.filter(book => book.id !== id), updatedBook]
          return [updatedBook]
        }
        const randomNumber = Math.floor(Math.random() * (100 - 10) + 10)
        const createdBook = {id: `b${randomNumber}`, name: bookData.name, author: bookData.author}
        books = [...books, createdBook]
        return [createdBook]
      }

      if(id) {
        books = [...books.filter(book => book.id !== id)]
        return []
      }
      return []

    }
  },
  Book: {
    name: (parent) => {
      return `${parent.name} xxx`
    },
    author: (parent) => {
      return authors.find((author) => author.id === parent.author)
    }
  }
}

export { resolvers }