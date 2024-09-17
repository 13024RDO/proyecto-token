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

    if (findedUser.length < 1) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    res.status(200).json(findedUser[0]);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Hubo un error en la base de datos",
    });
  }
};

//PATCH /users/:id
export const updateUserCtrl = async (req, res) => {
  const userId = +req.params.id;
  const { name, email, password } = req.body;

  try {
    const [result] = await conn.execute(
      "UPDATE users SET name=?, email=?, password=? WHERE  id = ?",
      [name, email, password, userId]
    );

    if (result.affectedRows == 0) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    const findedUser = await conn.execute("SELECT * FROM  users WHERE id = ?", [
      userId,
    ]);

    res.status(200).json(findedUser[0]);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Hubo un error en la base de datos",
    });
  }
};

//DELETE /users/:id
export const deleteUserCtrl = async (req, res) => {
  const userId = +req.params.id;

  try {
    const [result] = await conn.execute("DELETE FROM users WHERE id = ?", [
      userId,
    ]);

    if (result.affectedRows == 0) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    res.status(200).json({
      msg: "User delete success",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Hubo un error con la base de datos",
    });
  }
};
