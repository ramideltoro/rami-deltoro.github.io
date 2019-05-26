import TimeFormatterService from '../service/TimeFormatterService.js'

export default class CallTableService {

    constructor() {
        this.callNumber=0;
        this.timeFormatterService = new TimeFormatterService();
    }

    addRowToCallTable() {
        console.log("Action :: Attempting to add row to call-table.")

        const currentTime = this.timeFormatterService.getCurrentTime();
        this.callNumber++;
        const callTable = $('#call-table').DataTable();

        callTable.row.add([
            "Call",
            this.callNumber,
            currentTime
        ]).draw(false);

        callTable.order( [ 1, 'desc' ] ).draw();
    }
}