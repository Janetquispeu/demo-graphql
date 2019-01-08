import express from 'express';
// graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema'

const app = express();

app.get('/', (req, res)=> {
  res.send('Todo Listo')
});

// el resolver
const root = {cliente: () => { 
  return {
    "id": 1332232,
    "nombre": "Juan",
    "apellido": "De la Torre",
    "empresa": "Udemy",
    "emails": [
      {"email": "corr@gmail.com"},
    ]
  }
}};

app.use('/graphql', graphqlHTTP({
  // que schema va a utilizar
  schema,
  // el resolver se pasa como rootValue
  rootValue: root,
  // Utilzar graphiql
  graphiql: true
}));

app.listen(8000, () => console.log('El servidor esta funcionando http://localhost:8000/'));