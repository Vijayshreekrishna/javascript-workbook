//DOM methodes

// //selectoer- single element
// console.log(document.getElementById('my-form'));

// console.log(document.querySelector('h1'));



// //selector- multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));



// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));



// MANIPULATING THE DOM
// const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// // ul.firstElementChild.textContent = 'Hello';
// // ul.children[1].innerText = 'Brad';
// // ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


// const btn = document.querySelector('.btn');
// // btn.style.background = 'green';




// //window object
// console.log(window);
// window.alert("hello world");

////------------------------------



// // EVENTS

// // Mouse Event
// btn.addEventListener('click', e => {
//   e.preventDefault();
//   console.log(e.target.className);
//   document.getElementById('my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
// });


// //  console.log(e.target.className);


//-----------------------------------

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

//functions

function onSubmit(e) {      
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        {
            msg.innerHTML = 'Please enter all fields';
            msg.classList.add('error');

            setInterval(() => msg.remove(), 3000);
        }
    }else {
        const li = document.createElement('li');
        li.appewendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));}

          // Add HTML
    li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
