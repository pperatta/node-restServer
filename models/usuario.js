

const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true,'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true,'La contraseña es obligatorio'],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: [true,'El rol es obligatorio'],
        emun: ['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    },
});


UsuarioSchema.methods.toJSON=function(){
    const {__v,password,...usuario_resto}=this.toObject();
    return usuario_resto;
}



module.exports =model('Usuario', UsuarioSchema);