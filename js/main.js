function isWatchOut(){
	var dateAtOpen = new Date();
	var currentEpoch = dateAtOpen.getTime();
	var releaseDayEpoch = 1429927201000;
	if (releaseDayEpoch < currentEpoch){
		return true;
	} else {
		return false;
	}
}

function changeOutput(){
	if (isWatchOut() === true) {
		$("#answer").text("Yes");
	} else {
		$("#answer").text("No");
	}
}
