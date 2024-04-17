let countdown;
const timeDisplay = document.getElementById('time');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const alarmSound = document.getElementById('alarmSound');

function startTimer() {
    const minutes = parseInt(minutesInput.value);
    const seconds = parseInt(secondsInput.value);

    if (isNaN(minutes) || isNaN(seconds)) {
        alert('Vui lòng nhập số phút và giây.');
        return;
    }

    const totalTime = minutes * 60 + seconds;
    let remainingTime = totalTime;

    clearInterval(countdown);
    countdown = setInterval(() => {
        const minutesLeft = Math.floor(remainingTime / 60);
        const secondsLeft = remainingTime % 60;
        timeDisplay.textContent = `${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;

        if (remainingTime === 0) {
            clearInterval(countdown);
            timeDisplay.textContent = '00:00';
            alarmSound.play();
            setTimeout(() => {
                alarmSound.pause();
                alarmSound.currentTime = 0;
            }, 3000); // Dừng âm thanh sau 3 giây
            alert('Hết giờ!');
        } else {
            remainingTime--;
        }
    }, 1000);

    startBtn.disabled = true;
}

function resetTimer() {
    clearInterval(countdown);
    timeDisplay.textContent = '00:00';
    minutesInput.value = '0';
    secondsInput.value = '0';
    startBtn.disabled = false;
}
