function countdown() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYearTime = new Date(now.getFullYear() + 1, 0, 1);
    const currentTime = now.getTime();
    const difference = newYearTime - currentTime;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(countdown, 1000);
countdown();

