const User = require('../models/user');

// Método para actualizar datos del usuario
const updateUser = async (req, res) => {
    // Buscamos al usuario y actualizamos sus datos
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // Si el usuario no existe
    if (!user)
        return res.status(400).json({
            msg: "Usuario no existe."
        });
    // Si el usuario existe
    res.status(200).json({
        user,
        msg: "Información de cuenta actualizada exitosamente."
    });
};

module.exports = {
    updateUser
}