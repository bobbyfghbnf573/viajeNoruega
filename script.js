// Configura la fecha y hora objetivo para la cuenta atrás
const targetDate = new Date("2024-08-12T15:15:00").getTime();

// Actualiza la cuenta atrás cada segundo
const interval = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "¡El avión ya ha despegado!";
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString();
    document.getElementById("hours").innerText = hours.toString();
    document.getElementById("minutes").innerText = minutes.toString();
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}, 1000);
