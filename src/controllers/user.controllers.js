import { conn } from "../database/connection.js";

//GET users
export const allUserCtrl = async (_req, res) => {
  try {
    const [users] = await conn.query("SELECT * FROM `users`");
    res.json(users);
  } catch (error) {
    res.status(500).json({
      msg: "Error con la base de datos",
    });
  }
};

//POST /users
export const createUserCtrl = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const [result] = await conn.execute(
      "INSERT INTO `users`(`name`, `email`, `password`) VALUES ('?','?','?');",
      [name, email, password]
    );

    console.log(result);

    res.status(201).json({
      msg: "Usuario creado con exito",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Hubo un error en la base de datos",
    });
  }
};
