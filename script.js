const introtext = "IoT Consulting & Software Development Services";
const textContainer = document.getElementById('introtext');
let index = 0;

function init() {
    revealText();
}
function revealText() {
   
    if (index < introtext.length) {
       const span = document.createElement('span');
       span.textContent = introtext[index];
       span.classList.add('hidden');
       textContainer.appendChild(span);
 
       setTimeout(() => {
           span.classList.remove('hidden');
       }, 50);
 
       index++;
       setTimeout(revealText, 100); 
   }
 }

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('toggle-light-button').addEventListener('click', function(event) {
    val = this.value;
    console.log(val);
    if(val == 'on') {
        this.textContent = "OFF";
        this.value = "off";
        this.style = "background-color: red";
        document.getElementById('homediv').style.display = "none";
        alert("We can make it happen!")
    } else {
        this.textContent = "ON";
        this.value = "on";
        this.style = "background-color: green";
    }
});

function showMoreInfo(memberId) {
    const infoElement = document.getElementById(`info-${memberId}`);
    if (infoElement.style.display === 'none' || !infoElement.style.display) {
        infoElement.style.display = 'block';
    } else {
        infoElement.style.display = 'none';
    }
}

document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const emailData = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        from_phone: formData.get('phone'),
        message: formData.get('message')
    };
    console.log(emailData);

    emailjs.send('service_503741r', 'template_gqir1q7', emailData)
        .then(function(response) {
            console.log('Success:', response);
            alert("Message sent successfully!")
            form.reset();
        })
        .catch(function(error) {
            console.error('Error:', error);
            alert("Failed to send message.")
        });
});

(function() {
    emailjs.init("gGmZYwsOc8VX_zGIE"); 
})();
init();