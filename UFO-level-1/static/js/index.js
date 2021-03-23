var tbody = d3.select('tbody')

console.log(data)

data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

    var button = d3.select("#button");

    // Select the form
    var form = d3.select("#form");

    button.on("click", runEnter);
    form.on("submit",runEnter);

    function runEnter() {

        // Prevent the page from refreshing
        d3.event.preventDefault();
    
        // Select the input element and get the raw HTML node
        var inputElement = d3.select("#example-form-input");
    
        // Get the value property of the input element
        var inputValue = inputElement.property("value");

        var tbody = d3.select("tbody");

    // Use D3 to select the table
        var table = d3.select("table");

    // Use D3 to set the table class to `table table-striped`
        table.attr("class", "ufo-table table-striped");

    // Iterate through each student/grade pair
        data.forEach(([ date, city, state, country, shape, comment]) => {

    // Append one table row per student/grade
            var row = tbody.append("tr");

    // append one cell for the student and one cell for the grade
            row.append("td").text(date/time);
            row.append("td").text(city);
            row.append("td").text(state);
            row.append("td").text(country);
            row.append("td").text(shape);
            row.append("td").text(comment);
    
        d3.select("table").text(data);