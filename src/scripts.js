lucide.createIcons();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phone-error');


function formatPhoneNumber(value) {
    
    const cleaned = value.replace(/\D/g, '');

    if (cleaned.length > 11) {
        return value.substring(0, value.length - 1); 
    }

    const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);

    if (match) {
        const formattedNumber = (!match[2] ? match[1] : `(${match[1]}) ${match[2]}`) + (match[3] ? `-${match[3]}` : '');
        return formattedNumber;
    }

    return value;
}

phoneInput.addEventListener('input', function(event) {
    const formattedValue = formatPhoneNumber(this.value);
    this.value = formattedValue;
});

function validatePhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, ''); 
    return cleaned.length === 11; 
}

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("modal");
    var form = document.getElementById("contact-form1");
    var span = document.getElementsByClassName("close")[0];

    form.onsubmit = function(event) {
        const phoneValue = phoneInput.value;

        if (!validatePhoneNumber(phoneValue)) {
            phoneError.style.display = 'inline';
            event.preventDefault();
        } else {
            phoneError.style.display = 'none';
            modal.style.display = "block";
            
            form.reset();
            
            event.preventDefault(); 
        }
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
});



