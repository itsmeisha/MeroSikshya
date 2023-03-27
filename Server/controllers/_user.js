import { userModel } from "../.config/models.js";

export const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findById(id);
    if (!user) return res.status(404).json({ msg: `could not find the user` });

    return res
      .status(200)
      .json({ msg: `Successfully fetched the user with id ${id}`, user: user });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ msg: `error occured while getting the user`, error: e });
  }
};
export const addOneUser = async (req, res) => {
  console.log(req.body);
  try {
    const user = req.body.user;
    if (user.token === " " || user.name === " " || user.school === " ")
      return res.status(400).json({ msg: `Invalid user informations` });
    const existance = await userModel.findOne({ token: user.token });
    if (existance)
      return res.status(400).json({ msg: `The user already exist` });
    const addedUser = await new userModel(user).save();
    if (!addedUser) return res.status(400).json({ msg: `Invalid info` });
    return res
      .status(200)
      .json({ msg: `New user has been updated Successfully`, user: addedUser });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ msg: `Error occured while adding new user`, error: e });
  }
};
export const deleteOneUser = async (req, res) => {
  try {
    const id=req.params.id;
    const existance = await userModel.findById(id);
    if (!existance)
    return res.status(404).json({msg:`User doesn't exist`});
    await userModel.deleteOne({ _id:id });
    return res
      .status(200)
      .json({ msg: `The user has been deleted successfully` });
    } catch (e) {
      console.log(e);
      return res
      .status(500)
      .json({ msg: `Error occured while deleting the user`, error: e });
  }
};
