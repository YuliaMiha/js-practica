const counter = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('.js-decrement'); //виводить силку на кнопку - силка на обєкт у якій є свойства,методи
const incrementBtn = document.querySelector('.js-increment'); //виводить силку на кнопку
const valueEl = document.querySelector('.js-value');

decrementBtn.addEventListener('click', function () { // зареєстували слушатєля при виконанні
    console.log('Кликнули на декремент'); // ф-ція колбек: при кліці буде виконуватися ф-ція

    counter.decrement();
    console.log(counter);
    valueEl.textContent = counter.value; //щоб відображалися зміни на р при клікі 
});

incrementBtn.addEventListener('click', function () {
    console.log('Кликнули на инкремент');

    counter.increment();
    console.log(counter);
    valueEl.textContent = counter.value;
});

console.log(window);