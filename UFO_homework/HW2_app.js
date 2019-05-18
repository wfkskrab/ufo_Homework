// From data.js
var tableData = data;
console.log(data);
// Get a reference to the table body
var tbody = d3.select("#tbody");

// Getting a reference to the filter table button 
var filterBtn = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#datetime");

var submit = d3.select("#filter-btn"); 

// Select the input element and get the raw HTML node.
var inputDate = d3.select("#datetime");

var button = d3.select(button);
console.log(button);



function loadTableData(dataRows) {
   console.log('In Load Table Data');

  // alert('cLEARING TABLE');
  // tbody.html("");
  d3.select("tbody")
  
    .selectAll("tr")
  
    .data(dataRows)
  
    .enter()
  
    .append("tr")
  
    .html(function(d) {
  
      return `<td>${d.datetime}</td> <td>${d.city}</td> <td>${d.state}</td> <td>${d.country}</td>
  
              <td>${d.shape}</td> <td>${d.durationMinutes}</td> <td>${d.comments}</td>     `;
  
    });
  
   
  }

loadTableData(tableData);

var button =d3.select("filter-btn");

console.log("filter-btn");