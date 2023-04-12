import { exerciseTwentySixHtml } from "../view/exercisesView/exercise26View.js"

export const ExerciseTwentySixComponent = () => {
    exerciseTwentySixHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        var vowels = document.getElementById('vowels');
        var consonants = document.getElementById('consonants');
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex26Enviar') {
            var word = document.getElementById('word').value;
            word = word.toLowerCase();
            word = word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

            if(!word || word.length < 2){
                alert('Informe uma palavra válida');
                return;
            }
            var totalVowels = word.match(/[aeiou]/gi);
            totalVowels = totalVowels.length;
            var totalConsonants = word.length - totalVowels;
            vowels.value = totalVowels;
            consonants.value = totalConsonants;
            
            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}

