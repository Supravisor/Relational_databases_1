
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

// Using pandas read_sql method
let tablePandas = document.getElementById("tablePandas");
let databasePandas = document.getElementById("databasePandas");
let index = document.getElementById("index");
let dates = document.getElementById("dates");

const readSql = (arg) => {
  if (databasePandas.value === "") {
    return alert("Please enter a database name in the 'database' field, in the 'Using pandas read_sql method' section.");
  } else if (tablePandas.value === "") {
      return alert("Please enter a table name in the 'table' field, in the 'Using pandas read_sql method' section.");
  } else {
      let keep = "";

      if (index.value) {
        keep += ",\n        index_col='" + index.value + "'";
      }

      if (dates.value) {
        keep += ",\n        parse_dates=['" + dates.value.replaceAll(/\s*,\s*/g, "', '") + "']";
      }

      if (arg === "read_sql_table()") {
        document.editor.textbox.value+="\nengine = create_engine('sqlite:///" + databasePandas.value + ".db')\nconnection = engine.connect()\ndf = pd." + arg.slice(0, -2) + "('" + tablePandas.value + "', con=connection" + keep + ")\nconnection.close()";
      } else {
          document.editor.textbox.value+="\nconn = sqlite3.connect('" + databasePandas.value + ".db')\ndf = pd." + arg.slice(0, -2) + "('SELECT * FROM " + tablePandas.value + ";', conn" + keep + ")\nconnection.close()";
      }
  }
}

// Data at a glance
const data = (stat) => {
  document.editor.textbox.value+= '\ndf' + '.' + stat;
}

// Data cleaning
let column = document.getElementById("column");

const isna = (arg) => {
  if (column.value === "") {
    return alert("Please enter a column name in the 'column' field, in the 'Data cleaning' section.");
  } else {
      document.editor.textbox.value+="\ndf['" + column.value + "']." + arg + ".sum()";
  }
}

// Numerical analysis
const stats = (arg) => {
  if (column.value === "") {
    return alert("Please enter a column name in the 'column' field, in the 'Data cleaning' section.");
  } else if (arg === "quantile()") {
      document.editor.textbox.value+="\ndf['" + column.value + "']." + arg.slice(0, -1) + "[0.25, 0.5, 0.75])";
  } else {
      document.editor.textbox.value+="\ndf['" + column.value + "']." + arg;
  }
}
