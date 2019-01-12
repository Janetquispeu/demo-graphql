import mongoose from 'mongoose'
import { Clientes } from './db'

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clientes', {userNewUrlParser: true})

// Definir el schema del cliente
const clientesSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  empresa: String,
  email: String,
  edad: Number,
  tipo: String,
  pedidos: Array
});

const Clintes = mongoose.model('clientes', clientesSchema)

export { Clientes };