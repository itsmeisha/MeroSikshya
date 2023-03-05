import { userModel } from "../.config/models";

export const getOneUser = async (req, res) => {
  try {
    const id = req.body.id;

    const user = await userModel.FindOne({ id: id });
    res
      .status(200)
      .json({ msg: `Successfully fetched the user with id ${id}`, user: user });
  } catch (e) {}
};
