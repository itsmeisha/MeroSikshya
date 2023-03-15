import { userModel } from "../.config/models.js";

export const getOneUser = async (req, res) => {
  try {
    // getting the id from the url
    const id = req.params.id;

    // fetching the user from the db
    const user = await userModel.findOneById(id);

    // checking the existance of the user
    if (!user) return res.status(404).json({ msg: "could not find the user" });

    // sending the data to user
    return res
      .status(200)
      .json({ msg: `Successfully fetched the user with id ${id}`, user: user });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ msg: "error occured while getting the user", error: e });
  }
};
export const addOneUser = async (req, res) => {
  try {
    const user = req.body.user;

    if (user.token === "" || user.name === "" || user.school === "")
      return res.status(400).json({ msg: "invalid user data" });

    const existance = await userModel.findOne({ token: user.token });

    if (existance)
      return res.status(400).json({
        msg: "User already exists",
      });

    const addedUser = await new userModel(user);

    if (!addedUser)
      return res.status(400).json({ msg: "error while creating a new user" });

    return res
      .status(201)
      .json({ msg: "Successfully created a new user", user: addedUser });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      msg: `Something went wrong while adding the new user`,
      error: e,
    });
  }
};
