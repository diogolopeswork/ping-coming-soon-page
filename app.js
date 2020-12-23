const email = document.querySelector('#email');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const errorMessage = document.getElementById('error-message');
const submitBtn = document.getElementById('btn');
const input = document.querySelector('input')

submitBtn.addEventListener('click', () => {
    if(!emailRegex.test(input.value)) {
        input.classList.add('error');
        
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.transform = 'scale(1)';
        }, 100);
    } else {
        if (input.classList.contains('error')) {
            input.classList.remove('error');
            errorMessage.style.transform = 'scale(0)';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 300);
        }
    }
});
