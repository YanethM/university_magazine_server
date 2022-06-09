const jwt = require("jwt-simple");
const moment = require("moment");
const SECRET_KEY = "pon-tu-propia-clave-2022";
/* Función para crear el token de acceso */
exports.createAccessWithToken = (user) => {
  const payload = {
    id: user._id,
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    role: user.role,
    createToken: moment().unix(),
    /* La fecha de expiración del token será 12 horas después*/
    expiration_date: moment().add(12, "hours").unix(),
  };
  return jwt.encode(payload, SECRET_KEY);
};
exports.createRefreshToken = (user) => {
  const payload = {
    id: user._id,
    expiration_date: moment().add(30, "days").unix(),
  };
  return jwt.encode(payload, SECRET_KEY);
};

/* Función que descodifica cualquiera de los dos tokens */
exports.decodedToken = (token) => {
  return jwt.decode(token, SECRET_KEY, true);
};
