
userChoice = parseInt(prompt("Type in time to countdown"), 10);


if (isNaN(userChoice) || userChoice < 0) {
    alert("Please enter a valid positive number.");
} else {

     timer = setInterval(countDown, 1000);
}

function countDown() {
    console.log(userChoice); 
    userChoice--;

    
    if (userChoice < 0) {
        clearInterval(timer); 
        console.log("Countdown ended!"); 
    }
}


function notifyAfterDelay(message, delay) {

    setTimeout(function() {
        console.log(message); 
    }, delay);
}
notifyAfterDelay("Hello, World!", 3000);


function notifyAtIntervals(message, interval) {

    var notificationInterval = setInterval(function() {
        var userResponse = confirm(message);

        if (userResponse) {
            clearInterval(notificationInterval);
            console.log("Notifications stopped by the user.");
        }
    }, interval);
}
notifyAtIntervals("This is a notification. Click OK to stop.", 5000);