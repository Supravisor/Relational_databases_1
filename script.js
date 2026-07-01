
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

const cursor = () => {
  if (tablePython.value === "") {
    return alert("Please enter a table name in the 'table' field, in the 'Read data from SQL database' section.");
  } else {
      document.editor.textbox.value+="\ncur = conn.cursor()\ncur.execute('SELECT * From " + tablePython.value + " LIMIT 5;')\nresults = cur.fetchall()\ndf = pd.DataFrame(results)\ncur.close()\nconn.close()";
  }
}
