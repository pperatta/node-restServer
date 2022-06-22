const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async (rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`)
    }
}

const emailExiste = async (correo = '') => {
    //verificar si existe el correo
    const existeEmail = await Usuario.findOne({ correo: correo });
    if (existeEmail) {
        //correo repetido
        throw new Error (`El correo ${correo} ya está registrado`)
    }
}

const existeUsuarioPorId = async (id = '') => {
    //verificar si existe el id en la base de datos
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        //correo repetido
        throw new Error (`El Id ${id} no existe`);
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}

