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


// Animation 
document.querySelector('#h1').style.opacity = 0;
document.querySelector('#logo').style.opacity = 0;
document.querySelector('#span').style.opacity = 0;
document.querySelector('#p').style.opacity = 0;
document.querySelector('#email').style.opacity = 0;
document.querySelector('.btn').style.opacity = 0;
document.querySelector('#illustration').style.opacity = 0;
document.querySelector('.social-content').style.opacity = 0;

setTimeout(() => {
    document.querySelector('#logo').style.opacity = 1;
}, 100);

setTimeout(() => {
    document.querySelector('#h1').style.opacity = 1;
    document.querySelector('#span').style.opacity = 1;
}, 500);

setTimeout(() => {
    document.querySelector('#p').style.opacity = 1;
}, 550);

setTimeout(() => {
    document.querySelector('#email').style.opacity = 1;
    document.querySelector('.btn').style.opacity = 1;
}, 600);

setTimeout(() => {
    document.querySelector('#illustration').style.opacity = 1;
}, 1200);

setTimeout(() => {
    document.querySelector('.social-content').style.opacity = 1;
}, 1500);
