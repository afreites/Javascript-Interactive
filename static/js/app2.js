// from data.js
var ufo_data = data;
console.log(ufo_data)
// YOUR CODE HERE!

var Table = d3.select("tbody");

function resetTable(data){
    Table.html("");
    // var tbody = d3.select("tbody");
    // console.log(tbody)
    data.forEach(function(entry) {
        var row = Table.append("tr")
        Object.entries(entry).forEach(function([key,value]) {
        row.append("td").text(value);
        });
    });
};

resetTable(ufo_data)
var button = d3.select("#filter-btn");

// function resettable(){
//     filtered_results.addEventListener("click", resettable);
// };

button.on("click", function(){
d3.event.preventDefault();
// Select the input element and get the raw HTML node
var query = d3.select("#datetime").property("value");
console.log(query);

var filtered_results = ufo_data.filter(d => d.datetime === query)
console.log(filtered_results);

resetTable(filtered_results);


});
