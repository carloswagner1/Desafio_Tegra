import { exerciseThirtyHtml } from "../view/exercisesView/exercise30View.js"

export const ExerciseThirtyComponent = () => {
    exerciseThirtyHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        const inFull = document.getElementById('inFull');
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex30Enviar') {
            var enteredNumber = document.getElementById('number').value;

            if(!enteredNumber){
                alert('Informe um número de até dois algarismos');
                return;
            }
            inFull.value = NumberInFull(enteredNumber);
            clear();
        }
    });
}
function NumberInFull (number) {
    var numberInFull = '';
    var aux1 = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
    var aux2 =  ["dez", "vinte", "trinta", "quarenta", "cinqüenta", "sessenta", "setenta", "oitenta", "noventa"];

    if(number < 20){
        numberInFull = aux1[number]
    }else{
        var temp = number.toString().split('');
        var firstNumber = temp[0];
        var secondNumber = temp[1];
        numberInFull = aux2[firstNumber - 1]
        if(secondNumber > 0){
            numberInFull += ` e ${aux1[secondNumber]}`
        }
    }
    return numberInFull;
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}