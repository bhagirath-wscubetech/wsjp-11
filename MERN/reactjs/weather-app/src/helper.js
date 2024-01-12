function getDateFromStamp(timestamp, flag = 1) {
    // default parameter
    // flag = 1 // time 
    // flag = 2 // date
    // flag = 3 // date and time
    const d = new Date(timestamp);
    if (flag == 1) {
        return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    } else if (flag == 2) {
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    } else if (flag == 3) {
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    }

}

function getTimeDifference(timestamp) {
    // Convert timestamp to milliseconds
    const currentTime = new Date().getTime();
    const timestampMilliseconds = new Date(timestamp).getTime();

    // Calculate the time difference in milliseconds
    const timeDifference = currentTime - timestampMilliseconds;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    let result = "";
    if (days > 0) result += days + " day" + (days === 1 ? "" : "s") + " ";
    if (hours > 0) result += hours + " hour" + (hours === 1 ? "" : "s") + " ";
    if (minutes > 0) result += minutes + " minute" + (minutes === 1 ? "" : "s") + " ";
    if (seconds > 0) result += seconds + " second" + (seconds === 1 ? "" : "s") + " ";
    
    if (seconds == 0 && hours == 0 && minutes == 0 && days == 0) {
        return "just now";
    } else {
        // Check if the time is in the past or future
        result += timeDifference > 0 ? "ago" : "in future";
        return result.trim();
    }

    // Create a string to represent the time difference
}


export { getDateFromStamp, getTimeDifference }