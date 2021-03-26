var tbody = d3.select('tbody')

console.log(data)

// //assign data source to new variable dataset
var fillData = data;

// build table from data set
function BuildTable(data){
    // clear any existing data in html table
    tbody.html("");
    // loop throug each row in data and populate row/element into table with keys as columns
    data.forEach(function (element) {
        var row = tbody.append("tr");//tr means table row
        // for each dict/element assign the value to a cell in the table
        Object.values(element).forEach((value) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
}; 

// construct the table using the BuildTable function from the variable fillData
BuildTable(fillData)

// filter dataset by date entered in input feild
function dateData(){
    //assign data to new variable
    var filterData = data;
    //grab the value of the text inputed to the input box
    var inputFeild = d3.select('#datetime').property('value');
    console.log(inputFeild)
    //use if to varify that there was input entered if not it retuns false and keeps original dats displayed
    if (inputFeild){
        //collect the rows that contain input feild date
        var filterData=filterData.filter(row => row['datetime'] === inputFeild);
    }
    console.log(filterData)
    //construct a new table of the filtered data
    BuildTable(filterData)
}
//when the filter button is clicked run the dateData function and place it in the table in the html page.
d3.select('#filter-btn').on('click', dateData);

    

    