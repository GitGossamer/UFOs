// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

let message  = ("Hello World")
console.log({message});

console.log(addition(4, 5));
addition(4, 5);

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

//

function buildTable(data) {

}

// New Function: "handleClick"
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};

// Building Dana's website:

// use a shortcut to autofill the basic HTML layout by typing an exclamation mark on the first line, then press enter on your keyboard.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

// Continue the setup by adding a link to Bootstrap's content delivery network (CDN). Under the title of the document, add this code to the link tag:
<link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />

<link rel="stylesheet" href="static/css/style.css">
<body>
  <div class="wrapper">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="index.html">UFO Sightings</a>
    </nav>
  </div>
</body>
<div class="jumbotron">
  <h1>The Truth Is Out There</h1>
</div>
<div class="container-fluid">
  <div class="row">
  </div>
</div>

<div class="col-md-4">

</div>
<div class="col-md-8">

</div>

<h3>UFO Sightings: Fact or Fancy? <small>Ufologists Weigh In</small></h3>
