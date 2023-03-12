import { userModel } from "../.config/models.js";

export const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findOne({ id: id });
    if(!user)
    {
      return
     res.status(404).json({msg:`could not find the user`}); 
    }
     return res
      .status(200)
      .json({ msg: `Successfully fetched the user with id ${id}`, user: user });
  } catch (e) {
    return res.status(500).json(
      {msg:`error occured while getting the user`,error:e}
    );
  }
};
