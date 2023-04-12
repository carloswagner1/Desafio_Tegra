import { exerciseTwentySevenHtml } from "../view/exercisesView/exercise27View.js"

export const ExerciseTwentySevenComponent = () => {
    exerciseTwentySevenHtml();
    const main = document.getElementById('root');
    const message = document.getElementById('message');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;

        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex27Enviar') {
            var word = document.getElementById('word').value;

            if(!word && word.length < 2){
                alert('Informe uma palavra válida');
                return;
            }
            checkPalindrome(word) ? message.innerHTML = 'É palíndroma'  : message.innerHTML = 'Não é palíndroma';

            clear();
        }
    });
}
function checkPalindrome(word){
    var check;
    word = word.toLowerCase();
    word = word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    word = word.split(' ').join('');
    word == word.split('').reverse().join('') ? check = true: check = false;
    return check;
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}

