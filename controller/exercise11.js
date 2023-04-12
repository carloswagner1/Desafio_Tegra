import { exerciseElevenHtml } from "../view/exercisesView/exercise11View.js"

export const ExerciseElevenComponent = () => {
    exerciseElevenHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex11Enviar') {
            const firstgrade = parseFloat(document.getElementById('first_grade').value);
            const secondGrade = parseFloat(document.getElementById('second_grade').value);
            if(Number.isNaN(firstgrade) || Number.isNaN(secondGrade)){
                alert('Todos os valores devem ser informados');
                return;
            }
            var finalGrade = (firstgrade + secondGrade).toFixed(1);
            document.getElementById('final_grade').innerHTML = `Nota Final: ${finalGrade}`;
            document.getElementById('status').innerHTML = finalGrade < 60? 'REPROVADO': 'APROVADO';
            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}