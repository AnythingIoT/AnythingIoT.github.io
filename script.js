const introtext = "IoT Consulting and Software Development Services";
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

document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
    this.reset();
});

document.getElementById('toggle-light-button').addEventListener('click', function(event) {
    val = this.value;
    console.log(val);
    if(val == 'on') {
        this.textContent = "OFF";
        this.value = "off";
        this.style = "background-color: red";
        document.getElementById('homediv').style.display = "none";
        alert("We build fast and from scratch. Contact us today!")
    } else {
        this.textContent = "ON";
        this.value = "on";
        this.style = "background-color: green";
    }
});

init();