import AP from 'apollo-server'
import schema from './schema.js'

const server = new AP.ApolloServer({
  schema,
  context: () => {
    return { breno: "teste"}
  }
})

server.init = () => {
  server.listen(3000, '0.0.0.0').then(() => {
    console.log('Server is on!')
  })
}

server.init();