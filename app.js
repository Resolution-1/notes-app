const validator = require("validator");
const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes");

// add, remove, read, list

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
    // console.log("Title: " + argv.title);
    // console.log("Body: " + argv.body);
  },
});

// create remove commad
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Remove note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// create list commad
yargs.command({
  command: "list",
  describe: "Displaying list",
  builder: {
    title: {
      describe: "List note",
      demandOption: false,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.listNote();
  },
});

// create read commad
yargs.command({
  command: "read",
  describe: "Reading the note",
  title: {
    describe: "List note",
    demandOption: true,
    type: "string",
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
