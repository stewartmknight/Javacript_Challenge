// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the table body
var tbody = d3.select("tbody");

// Create the table
function make_table(sightings_list){

    var myTable = document.getElementById("dataTable");
    myTable.innerHTML = "";

    sightings_list.forEach(function(tableRow) {
        // Create a row for each Object in tableData
        var row = tbody.append("tr");
    
        // Create a cell for each value in the Object
        Object.entries(tableRow).forEach(function([key, value]) {
            var cell = row.append('td');
            // Put value into the cell
            cell.text(value)
            console.log(value)
        });
    });
}



// Write the overall function
function create_table(event) {
    // Get the input value
    var inputDate = d3.select('#datetime').property('value')

    // get objects that equal the date
    var final_list = filter_date(tableData, inputDate)
    make_table(final_list)

}

// write the filter function
function filter_date(data, date) {
    var new_list = []
    data.forEach(function(sighting) {
        // console.log(sighting.datetime)
        // console.log(date)
        if (sighting.datetime == date){
            new_list.push(sighting)
        }
    })
    return new_list
}

// Select the Filter Table button
var button = d3.select('#filter-btn')

// Attach a listener to it
button.on('click', create_table)

make_table(tableData)