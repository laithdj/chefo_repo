let jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        let decode = jwt.verify(req.body.token, "secretkey");
        req.userDate = decode;
        next();
    } catch (err) {
        return res.json({ message: 'uth failed' });
    }


}