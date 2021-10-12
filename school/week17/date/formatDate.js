function formatDate(date) {
    let diff = Date.now() - date;

    if (diff < 1000) {
        return 'прямо сейчас';
    }

    let seconds = Math.floor(diff / 1000);
    if (seconds < 60) {
        return seconds + ' секунд назад';
    }

    let minutes = Math.floor(diff / 60000);
    if (minutes < 60) {
        return minutes + ' минут назад';
    }

    let month = date.getMonth() + 1;
    let day = String(date.getDate()).padStart(2, '0');
    let year = date.getFullYear();
    let hour = String(date.getHours()).padStart(2, '0');
    let min = String(date.getMinutes()).padStart(2, '0');
    return day + "." + month + "." + year + ", " + hour + ":" + min;
}

console.log(formatDate(new Date(new Date - 1))); //`right now`

console.log(formatDate(new Date(new Date - 30 * 1000))); //`30 seconds ago`

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // `5 minutes ago`

//yesterday 11.10.2021, 21:40
console.log(formatDate(new Date(new Date - 86400 * 1000)));