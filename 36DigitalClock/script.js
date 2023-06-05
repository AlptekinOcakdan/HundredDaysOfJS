function getCurrentDateTime() {
    const date = new Date();

    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    const dateString = `${day}, ${dayOfMonth} ${month} ${year}`;

    let hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    let session = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    const timeString = `${hour}:${padZero(minute)}:${padZero(second)} ${session}`;

    return { date: dateString, time: timeString };
}

function padZero(number) {
    return number.toString().padStart(2, "0");
}

function updateDateTime() {
    const { date, time } = getCurrentDateTime();
    document.querySelector(".date").textContent = date;
    document.querySelector(".time").textContent = time;
}

updateDateTime();

setInterval(updateDateTime, 1000);
