
document.getElementById('submit-btn').addEventListener('click', function() {
    const name = document.getElementById('appointment_name').value;
    const email = document.getElementById('appointment_email').value;
    const date = document.getElementById('appointment_date').value;
    const time = document.querySelector('.appointment_time').value;
    const service = document.querySelector('select[name="appointment_service"]').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `SLOT BOOKED BY ${name}%0AName: ${name}%0AEmail: ${email}%0ADate: ${date}%0ATime: ${time}%0AService: ${service}%0APhone: ${phone}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/9962165423?text=${whatsappMessage}`;
    window.alert('DONT WORRY ABOUT BROWSER WARNINGS')
    window.open(whatsappURL, '_blank');
    
});