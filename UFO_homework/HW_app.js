// From data.js
var tableData = data;
console.log(data);
// Get a reference to the table body
var tbody = d3.select("tbody");

// Getting a reference to the filter table button 
var filterBtn = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#datetime");

var submit = d3.select("#filter-btn");

// Select the input element and get the raw HTML node.
var inputDate = d3.select("#datetime");

var button = d3.select(button);



function loadTableData(data) {
  console.log('In Load Table Data');
  console.log(data);
  //alert('CLEARING TABLE');
  tbody.html("");
  data.forEach(function (dataRows) {

    var row = tbody.append("tr");
    Object.values(dataRows).forEach((value) => {

      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
};


// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)



submit.on("click", function () {
  alert('CLEARING TABLE');
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Get the value property of the input element
  var inputValue = inputDate.property("value");
  console.log("checksubmit1");
  console.log(inputValue);
  console.log("checksubmit2");

  // Create Filtered dataset based on InputValue entered by user
  if (inputValue) {
    var filterdata = tableData.filter(onerec => onerec.datetime === inputValue);
  };
  console.log('Filtering Data');
  console.log(filterdata);



  // Build new UFO Table with the filtered subset of UFO Sighting data
  // buildTable(filterdata);


  loadTableData(filterdata);

  //loadTableData(filterdata);

});
loadTableData(tableData);
// loadTableData(tableData)