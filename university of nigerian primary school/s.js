document.getElementById('signupButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        const agree = confirm("Agree to our privacy terms and conditions?");
        if (agree) {
            window.location.href = 'index.html';
        }
    } else {
        alert("Please fill in all the fields.");
    }

    alert("Welcome " + username)
});
