const introtext = "IoT Consulting & Software Development";
const textContainer = document.getElementById('introtext');
let index = 0;

function init() {
    revealText();
    // Initialize EmailJS with your user ID
}
function revealText() {
   
    if (index < introtext.length) {
       const span = document.createElement('span');
       span.textContent = introtext[index];
       span.classList.add('hidden');
       textContainer.appendChild(span);
 
       // Add a small delay before making the character visible
       setTimeout(() => {
           span.classList.remove('hidden');
       }, 50);
 
       index++;
       setTimeout(revealText, 100); // Adjust the timing for each character
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

    // Collect form data
    const form = event.target;
    const formData = new FormData(form);

    // Prepare the email data
    const emailData = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        from_phone: formData.get('phone'),
        message: formData.get('message')
    };
    console.log(emailData);

    // Send email using EmailJS
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
    // https://dashboard.emailjs.com/admin/account
    emailjs.init("gGmZYwsOc8VX_zGIE"); // Replace YOUR_USER_ID with your actual EmailJS User ID

})();
init();