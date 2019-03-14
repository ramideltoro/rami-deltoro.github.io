import RadialContainerService from '../service/RadialContainerService.js'
import CallTableService from '../service/CallTableService.js'

export default class TrackCallButtonService {

    constructor(numberOfCallGoal) {
        this.numberOfCallsTaken=0;
        this.radialContainerService = new RadialContainerService(numberOfCallGoal);
        this.callTableService = new CallTableService();

    }


    handleButtonClick() {
        console.log("Action :: trackCallButton was clicked.")
        this.numberOfCallsTaken++;
        this.radialContainerService.updateRadialContainer(this.numberOfCallsTaken);
        this.callTableService.addRowToCallTable();
    }
}