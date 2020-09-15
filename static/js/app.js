// from data.js
var data = d3.csv("../data/ALL_STATES.csv", function (data) {
    console.log(data);
  
  });
// from data.js
var tableData = data;

// YOUR CODE HERE!

// Copy data into rows on HTML 

function appendTable(data) {
    d3.select("tbody").html("");
    data.forEach((selection) => {
        var tableRow = d3.select("tbody").append("tr");
        Object.values(selection).forEach((value) => {
            var tableData = tableRow.append("td");
            tableData.text(value);
        });
    })
}
appendTable(tableData);

// Set Filter button function to filter by date 

function filterBtn() {
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    var filterDateTime = tableData;
    if (date) {
        filterDateTime = filterDateTime.filter((row) => row.datetime === date);
    }
    appendTable(filterDateTime);
}
d3.selectAll("#filter-btn").on("click", filterBtn);