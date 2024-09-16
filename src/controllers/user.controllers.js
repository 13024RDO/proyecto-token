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
      "INSERT INTO `users`(`name`, `email`, `password`) VALUES (?,?,?);",
      [name, email, password]
    );

    const [userFinded] = await conn.execute(
      "SELECT * FROM users WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json({ userFinded });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Hubo un error en la base de datos",
    });
  }
};

//GET /users/:id
export const findUserByIdCtrl = async (req, res) => {
  const userId = Number(req.params.id);

  try {
    const [findedUser] = await conn.execute(
      "SELECT * FROM `users` WHERE id = ?;",
      [userId]
    );

    res.status(404).json(findedUser[0]);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Hubo un error en la base de datos",
    });
  }
};
