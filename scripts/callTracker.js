var classToUseOnRow = "";
var callNumber = 0;
var numberOfCallGoal = 50;
var numberOfCallsTaken = 0;


var callTableRow = "<tr class=\"&class\">\n" +
    "<th scope=\"row\">Call</th>\n" +
    "<td>&callNumber</td>\n" +
    "<td>&time</td>\n" +
    "</tr>";

function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return strTime;
}

function toggleCallTableRowClass() {
    if(classToUseOnRow == "table-active") {
        classToUseOnRow = "table-light"
    } else if (classToUseOnRow == "table-light") {
        classToUseOnRow = "table-active"
    } else {
        classToUseOnRow = "table-active"
    }

    console.log("Class to use on row is "+classToUseOnRow);
}

function generateCallTableRow() {
    const currentTime = getTime();
    callNumber++;
    toggleCallTableRowClass();

    return callTableRow.replace("&time",currentTime).replace("&class",classToUseOnRow).replace("&callNumber",callNumber);
}

function updateRadialContainer(numberOfCallsTakenParameter) {
    const percentage = (numberOfCallsTakenParameter / numberOfCallGoal) * 100;
    console.log("percentage is :"+percentage);

    jQuery("#radial-container").empty();
    jQuery("#radial-container").radialProgress("init", {
        'size': 200,
        'fill': 10
    }).radialProgress("to", {'perc': percentage, 'time': 2000});
}

function addRowToCallTable() {
    console.log("Action :: Attempting to add row to call-table.")




    $("#call-table tbody").prepend(generateCallTableRow());


}

$(document).ready(function(){
    $("#trackCallButton").click(function(){
        console.log("Action :: trackCallButton was clicked.")
        numberOfCallsTaken++;

        updateRadialContainer(numberOfCallsTaken);
        addRowToCallTable();
    });
});

$(function(){
    updateRadialContainer(0);
});