const Auth = {};
const pool = require("../database");

Auth.InicioSesionApp = async (req, res) => {
  const { username } = req.body;
  const query =
    "SELECT id_usuario, password, roles_id FROM usuarios WHERE username = ?";
  return await pool.query(query, username);
};

Auth.RegistrarUsuario = (datosRegistro) => {
  const query = "INSERT INTO usuario SET ?";
  return pool.query(query, datosRegistro);
};

Auth.BuscarUsuario = async (cedula) => {
  const query = "SELECT Count(*) as Users from USUARIO WHERE cedula = ?";
  return await pool.query(query, cedula);
};

module.exports = Auth;
