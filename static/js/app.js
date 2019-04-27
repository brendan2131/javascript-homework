// from data.js
var tableData = data;



// YOUR CODE HERE!
var tbody = d3.select("tbody");

function renderTable (renderData) {
  renderData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
});
};

renderTable(tableData);



var submit = d3.select("#filter-btn");



submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputValue = d3.select("#datetime").node().value;

  console.log(inputValue);

  if (inputValue == "") {
    renderTable(tableData)
  }

  else {
    
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    
    console.log(filteredData);
    
    d3.selectAll("td").remove();
    
    renderTable(filteredData);
  }
});
