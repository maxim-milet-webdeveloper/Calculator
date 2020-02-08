const review = document.querySelector('.review');
const main = document.querySelector('main');
const close = document.querySelector('#top-right');

function insert(value) {
    review.value += value;
}

function calculate() {
    if(review.value == '') {
        main.classList.add('hide');
    } else {
        let answer;
        try {
            answer = eval(review.value);
        } catch (error) {
            main.classList.add('hide');
            review.value = '';
        }

        if(answer === Infinity) {
            return review.value = 'Overflow Error';
        }

        answer !== undefined ? review.value = answer : null;
    }
}

function clean() {
    review.value = '';
}

function back() {
    review.value = review.value.substring(0, review.value.length - 1);
}

close.addEventListener('click', () => {
    main.classList.remove('hide');
})