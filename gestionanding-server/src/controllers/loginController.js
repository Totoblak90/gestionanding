const bcryptjs = require('bcryptjs');

module.exports = {
    login: (req, res) => {

        


        res.json({
            ok: true,
            msg: "El login funciona"
        })
    }
}