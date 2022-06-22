const { response, pedido } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');


const usuariosGet = async (req = pedido, res = response) => {
    const { limite = 5, desde = 0 } = req.query;
    const filtro={estado: true};
    
    const [total, usuarios]=await Promise.all([
        Usuario.countDocuments(filtro),
        Usuario.find(filtro)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({
        total,
        usuarios
    });
};





const usuariosPut = async (req = pedido, res) => {
    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    // console.log('antes');
    // console.log(resto, password);

    if (password) {
        //encriptar contraseña
        const salt = bcryptjs.genSaltSync(10);
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);
    // console.log('despues');
    // console.log(resto);

    res.json({
        msg: 'put api controller',
        id,
        usuario,
    });
};

const usuariosPost = async (req, res = response) => {
    const { nombre, correo, password, rol } = req.body; //body desestructurado 
    const usuario = new Usuario({ nombre, correo, password, rol });//creamos instancia a la bd
    //encriptar contraseña
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt);
    //guardar en bd
    await usuario.save();
    res.json({
        usuario
    });
};







const usuariosDelete =async (req, res) => {
    const { id } = req.params;

    //const usuarioBorradoFisico = await Usuario.findByIdAndDelete(id);

    const usuario = await Usuario.findByIdAndUpdate(id, {estado: true});



    res.json({
        usuario
    });
};

const usuariosPatch = (req, res) => {
    res.json({
        ok: true,
        msg: 'patch api controller'
    });
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}