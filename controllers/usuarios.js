const { response, pedido } = require('express');


const usuariosGet = (req=pedido, res = response) => {
    const params=req.query;

    res.json({
        ok: true,
        msg: 'get api controller',
        params
    });
};

const usuariosPut = (req=pedido, res) => {
    // const id= req.params.id;
    const {id}= req.params;
    
    res.json({
        ok: true,
        msg: 'put api controller',
        id
    });
};

const usuariosPost = (req, res) => {
    // const body=req.body;
    const { nombre, edad } = req.body;

    res.json({
        ok: true,
        msg: 'post api controller',
        nombre,
        edad
    });
};

const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete api controller'
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