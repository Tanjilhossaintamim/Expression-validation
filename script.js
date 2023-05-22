// button
const gmailbtn = document.querySelector('#gmailbtn');
const phonebtn = document.querySelector('#phonebtn');
const postcodebtn = document.querySelector('#postcodebtn');


//display
const display = document.querySelector('#email');
const error_message_display = document.querySelector('#alert-diplay');

// expression 
let gmailexpression = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
let phone = /^(?:\+88|88)?(01[3-9]\d{8})$/
let postcode = /^[0-9]{4}$/

// click function
gmailbtn.onclick = () => {
    cleardisplay();
    removeclass()
    display.setAttribute('placeholder', 'Write Your Gmail')
    error_message_display.value = '';

    display.addEventListener('keyup', () => {
        display.value=display.value.toLowerCase();
        if (gmailexpression.test(display.value)) {
            
            showsuccessalart('Expression Match');

        }
        else {
            
            showalart('Gmail Not valid')

        }
    })
}

phonebtn.onclick = () => {
    cleardisplay();
    removeclass();
    display.setAttribute('placeholder', 'Write Your Phone Number')
    display.addEventListener('keyup', () => {
        if (phone.test(display.value)) {
           
            showsuccessalart('Expression Match');

        }
        else {
            
            showalart('Number Not Valid !')

        }
    })
}

postcodebtn.onclick = () => {
    removeclass();
    cleardisplay();
    display.setAttribute('placeholder', 'Write Your  PostCode')
    display.addEventListener('keyup', () => {
        if (postcode.test(display.value)) {
            showsuccessalart('Expression Match')
        }
        else {

            showalart('post code not valid !')

        }
    })
}

function showalart(message) {
    display.classList.remove('show-success')
    display.classList.add('show-error');
    error_message_display.innerText = ''
    error_message_display.innerText = message;
    error_message_display.style.color = 'red';

}
function showsuccessalart(message) {
    display.classList.remove('show-error')
    display.classList.add('show-success');
    error_message_display.innerText = ''
    error_message_display.innerText = message
    error_message_display.style.color = 'green'
}
function cleardisplay() {
    display.value = '';
    error_message_display.innerText = '';
}
function removeclass() {
    display.classList.remove('show-success');
    display.classList.remove('show-error');
    display.classList.remove('show-input');
    display.classList.add('show-input');
}