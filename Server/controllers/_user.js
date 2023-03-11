import { userModel } from "../.config/models.js";

export const getOneUser = async (req, res) => {
  try {
    // getting the id from the url
    const id = req.params.id;

    // fetching the user from the db
    const user = await userModel.findOne({ id: id });

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
