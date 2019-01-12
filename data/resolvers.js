import mongoose from 'mongoose'
import { Clientes } from './db';

class Cliente {
  constructor(id, {nombre, apellido, empresa,
  email, edad, tipo, pedidos}) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.empresa = empresa;
    this.email = email;
    this.edad = edad;
    this.tipo = tipo;
    this.pedidos = pedidos;
  }
}

// el resolver
export const resolver = {
  Query: {
    getcliente: ({id}) => { 
      return new Cliente(id, clientesDB[id]);
    }
  },
  Mutation: {
    crearCliente: (root, {input}) => {
      const nuevoCliente = new Clientes({
        id : id,
        nombre : input.nombreid,
        apellido : input.apellidoid,
        empresa : input.empresaid,
        email : input.emailid,
        edad : input.edadid,
        tipo : input.tipoid,
        pedidos : input.pedidosid,
      })

      const id = require('crypto').randomBytes(5).toString('hex');
      clientesDB[id] = input;
      return new Cliente(id, input);
    }
  }
};

export default resolver