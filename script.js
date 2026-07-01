
// Read data from SQL database
let databasePython = document.getElementById("databasePython");
let tablePython = document.getElementById("tablePython");

const connect = () => {
  if (databasePython.value === "") {
    return alert("Please enter a database name in the 'database' field, in the 'Read data from SQL database' section.");
  } else {
      document.editor.textbox.value+="\nconn = sqlite3.connect('" + databasePython.value + ".db')";
  }
}
