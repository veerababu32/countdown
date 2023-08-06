let countdownInterval;
let targetTime;

function startCountdown() {
  const daysInput = document.getElementById("days");
  const hoursInput = document.getElementById("hours");
  const minutesInput = document.getElementById("minutes");
  const secondsInput = document.getElementById("seconds");

  const days = parseInt(daysInput.value) || 0;
  const hours = parseInt(hoursInput.value) || 0;
  const minutes = parseInt(minutesInput.value) || 0;
  const seconds = parseInt(secondsInput.value) || 0;

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    alert("Please enter a valid countdown time.");
    return;
  }

  const currentTime = new Date();
  targetTime =
    currentTime.getTime() +
    days * 24 * 60 * 60 * 1000 +
    hours * 60 * 60 * 1000 +
    minutes * 60 * 1000 +
    seconds * 1000;
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const currentTime = new Date().getTime();
  const timeDifference = targetTime - currentTime;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").textContent = "Time is up!";
  } else {
    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesRemaining = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);
    document.getElementById(
      "countdown"
    ).textContent = `${daysRemaining}d ${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s`;
  }
}

function resetCountdown() {
  clearInterval(countdownInterval);
  document.getElementById("countdown").textContent = "";
  document.getElementById("days").value = "";
  document.getElementById("hours").value = "";
  document.getElementById("minutes").value = "";
  document.getElementById("seconds").value = "";
}
