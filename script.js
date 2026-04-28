const targetDate = new Date("June 6, 2026 08:00:00").getTime();

const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".countdown-container").innerHTML = `
            <div style="direction: rtl;">
                <h1 style="font-size: 5rem; color: #fbbf24; text-shadow: 0 0 30px #fbbf24;">لقد بدأ الامتحان!</h1>
                <h2 style="font-size: 2.5rem; color: #fff; letter-spacing: 2px;">بالتوفيق لقد بدأ الامتحان</h2>
            </div>
        `;
    }
}, 1000);