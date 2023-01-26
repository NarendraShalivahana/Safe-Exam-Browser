//To maintain single window and we have to delete new tab when new tab event done.
chrome.tabs.onCreated.addListener(function(newTab) {
    chrome.storage.local.get('enabled', function(settings){
        if (settings.enabled == true){
			// check all the open tabs
			chrome.tabs.query({}, function(tabs){
			  checkTabs(tabs, newTab);
			});
		}
    });
});

function checkTabs(tabs, newTab){
	var newURL = newTab.url;
	// if an attempt to open a new tab was made close the new tab
	if(tabs.length > 1) {
		if (newTab.url != ''){
			chrome.tabs.remove(newTab.id, function(){
			});
		}
	}
}

// To Set Up Exam Window  To Full Screen 
chrome.fullscreen("https://www.elitmus.com/");

// To check camera and microphone permissions are granted or not
chrome.storage.local.get(function(curTab)) {
    if (! curTab.camera ){
        alert("Camera access is required.");
    }
    if(! curTab.microphone){
        alert("Microphone access is required");
    }
}







