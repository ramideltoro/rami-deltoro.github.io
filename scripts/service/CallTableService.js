import TimeFormatterService from '../service/TimeFormatterService.js'

export default class CallTableService {

    constructor() {
        this.callTableRow = "<tr>\n" +
            "<th scope=\"row\">Call</th>\n" +
            "<td>&callNumber</td>\n" +
            "<td>&time</td>\n" +
            "</tr>";

        this.callNumber=0;
        this.timeFormatterService = new TimeFormatterService();
    }

    addRowToCallTable() {
        console.log("Action :: Attempting to add row to call-table.")
        const currentTime = this.timeFormatterService.getCurrentTime();
        this.callNumber++;
        const newRow = this.callTableRow.replace("&time", currentTime).replace("&callNumber", this.callNumber);

        $("#call-table tbody").prepend(newRow);
    }
}