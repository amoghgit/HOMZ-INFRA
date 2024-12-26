document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (event) => {
            if (link.textContent === 'Buy' || link.textContent === 'Rent') {
                event.preventDefault();
                document.querySelector('.recently-listed-properties').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (event) => {
            if (link.textContent === 'Buy' || link.textContent === 'Rent') {
                event.preventDefault();
                document.querySelector('.recently-listed-properties').scrollIntoView({ behavior: 'smooth' });
            } else if (link.textContent === 'Help') {
                event.preventDefault();
                document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (event) => {
            if (link.textContent === 'Buy' || link.textContent === 'Rent') {
                event.preventDefault();
                document.querySelector('.recently-listed-properties').scrollIntoView({ behavior: 'smooth' });
            } else if (link.textContent === 'Help') {
                event.preventDefault();
                document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Handle login button click
    document.querySelector('.login').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'https://codepen.io/Amogh-googal/full/bNbqLWb'; // Redirect to the login page
    });
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.login form').addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            if (data === 'Login successful') {
                alert('Login successful');
                // Redirect to homepage or user dashboard
                window.location.href = '/';
            } else {
                alert(data);
            }
        })
        .catch(error => console.error('Error:', error));
    });
});

