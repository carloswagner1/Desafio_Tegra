import { exerciseThreeHtml } from "../view/exercisesView/exercise3View.js"

export const ExerciseThreeComponent = () => {
    exerciseThreeHtml();

    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex3Enviar'){
            const name1 = document.getElementById('name1').value;
            const name2 = document.getElementById('name2').value;
            const age1 = parseInt(document.getElementById('age1').value);
            const age2 = parseInt(document.getElementById('age2').value);

            if(!name1 || !name2 || Number.isNaN(age1) || Number.isNaN(age2)){
                alert('Todos os campos devem ser preenchidos');
                return;
            }
            const average = CalculateAverage(age1, age2);
            const message = document.getElementById('message');
            message.innerHTML = `A idade média de ${name1} e ${name2} é de ${(average).toFixed(1)} anos`
            clear();
        }
    })
}
function CalculateAverage(age1, age2){
    return (age1 + age2) / 2;
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}