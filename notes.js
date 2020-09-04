const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNote();
  const duplicateNote = notes.find(function (note) {
    return note.title === title;
  });
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("Notes taken");
  } else {
    console.log("Note title already taken");
  }
};

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNote = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const removeNote = function (title) {
  const notes = loadNote();
  const newNotes = notes.filter((note) => note.title != title);
  if (notes.length > newNotes.length) {
    console.log(chalk.green.inverse("Note removed"));
    saveNotes(newNotes);
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};
const listNote = function () {
  const notes = loadNote();
  console.log(chalk.green.inverse("Notes"));
  notes.forEach((title) => {
    console.log(title.title);
  });
};
const readNote = (title) => {
  const notes = loadNote();
  const result = notes.find((note) => note.title === title);
  console.log(result.title);
  console.log(result.body);
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
