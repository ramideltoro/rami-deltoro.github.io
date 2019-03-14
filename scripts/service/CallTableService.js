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

        $(document).ready(function () {
            $('#call-table').DataTable({
                "scrollY": "270px",
                "scrollCollapse": true,
            });
            $('.dataTables_length').addClass('bs-select');
        });
    }

    generateCallTableRow() {
        const currentTime = this.timeFormatterService.getCurrentTime();
        this.callNumber++;

        return this.callTableRow.replace("&time",currentTime).replace("&callNumber",this.callNumber);
    }

    addRowToCallTable() {
        console.log("Action :: Attempting to add row to call-table.")


        $("#call-table tbody").prepend(this.generateCallTableRow());
    }


}