var tbody = d3.select('tbody')

console.log(data)

// data.forEach((ufo) => {
//     var row = tbody.append("tr");
//     Object.entries(ufo).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

var fillData = data;
var inputFeild = d3.select('#datetime');
var button = d3.select('#filter-btn');

// function handleClick() {
//     // console.log('clicked');
//     console.log(d3.event.target);
// }

button.on('click');
inputFeild.on('change', function () {
    var newText = d3.event.target.value;
    console.log(newText);
    var filteredData = fillData.filter(date => date.datetime === newText);

    console.log(filteredData);

    filteredData.forEach(function (FilterDate) {
        console.log(FilterDate);
        var row = tbody.append("tr");

        Object.entries(FilterDate).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
});