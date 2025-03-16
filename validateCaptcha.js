function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaText = '';
    for (let i = 0; i < 5; i++) { // Generate a string of 5 random characters
        captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('captcha').innerText = captchaText;
}

function validateCaptcha() {
    const userInput = document.getElementById('captcha-input').value;
    const captchaText = document.getElementById('captcha').innerText;

    if (userInput === captchaText) {
        // Corrected syntax for window.location.href
        window.location.href = 'https://pryortechsolutions.com/status/' + document.getElementById('textbox').value + '.html';
    } else {
        alert('CAPTCHA did not match. Please try again.');
    }
}

// Generate CAPTCHA on page load
window.onload = generateCaptcha;
