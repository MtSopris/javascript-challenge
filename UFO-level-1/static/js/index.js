var tbody = d3.select('tbody')

console.log(data)

data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

d3.select("#filter-btn").on('click', function(){
    console.log('#.form-control'.text());
});