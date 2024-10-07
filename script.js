document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add your logic for what happens after form submission
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear the form
    this.reset();
});
