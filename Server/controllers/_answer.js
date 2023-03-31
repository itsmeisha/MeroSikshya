import { answerModel } from "../.config/models.js";

//getting answer from id
export const getAnswerById = async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).jsom({ msg: `Invalid id ` });
  try {
    const existance = await answerModel.findById(id);
    if (!existance)
      return res.status(404).json({ msg: `Answer doesnot exist` });

    return res
      .status(200)
      .json({ msg: `Answer has been successfully fetched`, answer: existance });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ msg: `Error occured while getting the answer`, error: e });
  }
};

//getting answer from subject
export const getAnswerBySubject = async (req, res) => {
  try {
    const subject = req.params.subject;
    if (!subject) return res.status(400).json({ msg: `Invalid subject` });

    const answer = await answerModel.find({ subject: subject });
    if (answer.length === 0)
      return res.status(404).json({ msg: `No answer found ` });

    return res
      .status(200)
      .json({ msg: `Answer has been fetched successfully`, answer: answer });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ msg: `Error occured while fetching the answer` });
  }
};

//adding a answer
export const addAnswer = async (req, res) => {
  try {
    const answer = req.body.answer;

    if (
      answer.title === "" ||
      answer.content === "" ||
      answer.images === "" ||
      answer.id === ""
    )
      return res.status(400).json({ msg: `Invalid answer ` });

    const existance = await answerModel.findOne({ _id: answer.id });
    if (existance) return res.status(400).json({ msg: `Answer already exist` });

    const addedAnswer = await new answerModel(answer).save();
    if (!addedAnswer)
      return res
        .status(400)
        .json({ msg: `Something went wrong while adding the answer` });

    return res
      .status(201)
      .json({
        msg: `New answer has been added successfully`,
        answer: addedAnswer,
      });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ msg: `Error occured while adding a new answer`, error: e });
  }
};

//deleting a answer
export const deleteAnswer = async (req, res) => {
  try {
    const id = req.params.id;
    const existance = await answerModel.findById(id);
    if (!existance)
      return res.status(400).json({ msg: `Answer doesnot exist` });

    await answerModel.deleteOne({ _id: id });
    return res
      .status(200)
      .json({ msg: `Answer has been deleted successfully` });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ msg: `Error occured while deleting the answer`, error: e });
  }
};
