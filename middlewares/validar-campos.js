const { validationResult } = require('express-validator');

const validarCampos=(req,res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        //hay errores
        return res.status(400).json({
            msg: 'Hay errores',
            errors
        });
    }

    next();
};


module.exports={
    validarCampos
}



