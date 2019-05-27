import TrackCallButtonService from '../service/TrackCallButtonService.js'

const numberOfCallGoal = 50;

const trackCallButtonService = new TrackCallButtonService(numberOfCallGoal);

$(document).ready(function(){
    $("#trackCallButton").click(function(){
        console.log("Action :: trackCallButton was clicked.");
        trackCallButtonService.handleButtonClick();
    });
});