const { parkModel } = require("./Schema");
const { Router, application } = require("express");

const parkRoute = Router();

parkRoute.post("/create", async (req, res) => {
  try {
    const prod = await parkModel.create(req.body);
    res.status(200).send({ msg: "Data created successfully", prod });
  } catch (error) {
    res.status(500).json({ errMsg: "Invalid post request", error });
  }
});

parkRoute.get("/read", async (req, res) => {
  try {
    const data = await parkModel.find();
    res.status(200).send({ msg: "Data received", data });
  } catch (error) {
    res.status(500).json({ errMsg: "Invalid get request", error });
  }
});

parkRoute.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await parkModel.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Park not found" });
    }

    const updatedProduct = await parkModel.findByIdAndUpdate(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

parkRoute.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await parkModel.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Park not found" });
    }

    res.status(200).json({ message: "Park deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = { parkRoute };
