export default class RadialContainerService {

    constructor(numberOfCallGoal) {
        this.numberOfCallGoal=numberOfCallGoal;
        this.updateRadialContainer(0);
    }

    updateRadialContainer(numberOfCallsTakenParameter) {
        const percentage = (numberOfCallsTakenParameter / this.numberOfCallGoal) * 100;
        console.log("percentage is :"+percentage);

        jQuery("#radial-container").empty();
        jQuery("#radial-container").radialProgress("init", {
            'size': 200,
            'fill': 10
        }).radialProgress("to", {'perc': percentage, 'time': 500});
    }
    
}