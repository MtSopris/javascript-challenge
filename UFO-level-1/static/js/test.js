var tbody = d3.select('tbody')

console.log(data)

data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

inDate=d3.select('#datetime');
// test-
d3.selectAll("#filter-btn").on('click', function(){
    dateEntered = inDate.property("value");
    console.log(dateEntered.value);
    console.log("this button was just clicked")
});

// test-
// d3.select("#filter-btn").on('click', function(){
//     console.log(d3.select('.form-control').text());
//      console.log("this button was just clicked")
// });

// test-
// date=d3.select('#datetime')
// d3.select("#filter-btn").on('click', function(){
//     console.log(date.text());
// });

// // test-
// var input=d3.select("#datetime");
// var button=d3.select("#filter-btn");

// function inputReturn(date) {
//     inputText= d3.date.target.value;
//     console.log(date);
// }

