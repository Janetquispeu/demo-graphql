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

const clientesDB = {};

// el resolver
const resolver = {
  getcliente: ({id}) => { 
    return new Cliente(id, clientesDB[id]);
  },
  crearCliente: ({input}) => {
    const id = require('crypto').randomBytes(5).toString('hex');
    clientesDB[id] = input;
    return new Cliente(id, input);
  }
};

export default resolver