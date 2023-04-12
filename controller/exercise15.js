import { exerciseFifteenHtml } from "../view/exercisesView/exercise15View.js";

export const ExerciseFifteenComponent = () => {
    exerciseFifteenHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        const classification = document.getElementById('classification');
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex15Enviar') {
            const glucose = parseFloat(document.getElementById('glucose').value);
            if(Number.isNaN(glucose)){
                alert('Informe a medida da glicose a ser pesquisada');
                return;
            }
            switch(true) {
                case(glucose <= 100):
                    classification.value = 'Normal';
                    break;
                case(glucose > 140):
                    classification.value = 'Diabetes';
                    break;
                default:
                    classification.value = 'Elevado';
                    break;
            }

            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}