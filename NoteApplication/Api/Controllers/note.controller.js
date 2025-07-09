const { get } = require("mongoose");
const noteModel = require("../Models/notes.model");

const noteController = {
  test: (req, res) => {
    res.status(201).json({ message: "test router working" });
  },
  create: async (req, res) => {
  if (!req.body.title || !req.body.content) {
    return res
      .status(400)
      .json({ message: "Title and content are required" });
  }

  try {
    const note = await noteModel.create({
      ...req.body,
      userId: req?.user?._id,
    });

    res.status(201).json({
      message: "Note created successfully",
      note, // you can include the note in response
    });
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({
      message: error.message || "Internal server error",
    });
  }
},

  getById: async (req, res) => {
    const { noteId } = req.params;
    if(!noteId) {
      return res.status(400).json({ message: "Note ID is required" });
    }
    try {
      const isExistNote = await noteModel.findById(noteId);
      if (!isExistNote) {
        return res.status(404).json({ message: "Note not found" });
      }

      if(isExistNote.userId !== req?.user?._id) {
        return res.status(403).json({ message: "You do not have permission to access this note" });
      }

      res.status(200).json(isExistNote);
    } catch (error) { 
      console.error("Error fetching note:", error);
      res.status(500).json({ message: error.message || "Internal server error" });
    }
  },

  update: async (req, res) => {
    const { noteId } = req.params;
    if (!noteId) {
      return res.status(400).json({ message: "Note ID is required" });
    }
    try {
      const isExistNote = await noteModel.findById(noteId);
       if (!isExistNote) {
        return res.status(404).json({ message: "Note not found" });
      }
      await noteModel.findByIdAndUpdate(noteId,{$set: {...req.body}});
      res.status(200).json({ message: "Note updated successfully" });
    }
    catch (error) { 
      console.error("Error fetching note:", error);
      res.status(500).json({ message: error.message || "Internal server error" });
    }
  },

  delete: async (req, res) => {
    const { noteId } = req.params;
    if (!noteId) {
      return res.status(400).json({ message: "Note ID is required" });
    }
    try {
      const isExistNote = await noteModel.findById(noteId);
      if (!isExistNote) {
        return res.status(404).json({ message: "Note not found" });
      }
      await noteModel.findByIdAndDelete(noteId);
      res.status(200).json({ message: "Note deleted successfully" });
    }
    catch (error) {
      console.error("Error deleting note:", error);
      res.status(500).json({ message: error.message || "Internal server error" });
    }
  },

 getAllNotes: async (req, res) => {
  const { userId } = req.params;
  console.log("req.user",req.user)

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const notes = await noteModel.find({ userId });

   
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: error.message || "Internal server error" });
  }
}

};

module.exports = noteController;
