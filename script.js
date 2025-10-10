// const btn_1 = document.querySelector('#btn-1');
// const btn_2 = document.querySelector('#btn-2');
// const btn_3 = document.querySelector('#btn-3');
// const btn_4 = document.querySelector('#btn-4');
// const btn_5 = document.querySelector('#btn-5');
// const btn_6 = document.querySelector('#btn-6');
// const btn_7 = document.querySelector('#btn-7');
// const btn_8 = document.querySelector('#btn-8');
// const btn_9 = document.querySelector('#btn-9');
// const btn_plus = document.querySelector('#btn-plus');
// const btn_minus = document.querySelector('#btn-minus');
// const btn_multiply = document.querySelector('#btn-multiply');
// const btn_devide = document.querySelector('#btn-devide');
// const btn_equal = document.querySelector('#btn-equal');
// const btn_dot = document.querySelector('#btn-dot');
// const btn_deleteAll = document.querySelector('#btn-deleteAll');
// const btn_delte = document.querySelector('#btn-delte');
// const btn_percentage = document.querySelector('#btn-percentage');
// const btn_0 = document.querySelector('#btn-0');
// const btn_00 = document.querySelector('#btn-00');
const display_text = document.querySelector('#text-display');

// Nhấn nút hiện số
function runCalculator() {
    btn = document.querySelectorAll(
        '#btn-1, #btn-2, #btn-3, #btn-4, #btn-5, #btn-6, #btn-7, #btn-8, #btn-9, #btn-0, #btn-00, #btn-plus, #btn-minus, #btn-multiply, #btn-devide, #btn-equal, #btn-dot, #btn-deleteAll, #btn-delte, #btn-percentage'
    )
    btn.forEach(btn => {
        btn.addEventListener('click', () => {
            const buttonContent = btn.textContent.trim();
            handleClick(buttonContent);
        });
    });
}

function handleClick(button) {
    console.log(button);
    let calculation = [];
    calculation.push(button);
    display_text.textContent = calculation.join('');
}

runCalculator();