import { exerciseTenHtml } from "../view/exercisesView/exercise10View.js";

export const ExerciseTenComponent = () => {
    exerciseTenHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        event.preventDefault();
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex10Enviar') {
            const value1 = Number(document.getElementById('value_1').value);
            const value2 = Number(document.getElementById('value_2').value);
            const value3 = Number(document.getElementById('value_3').value);
            if(value1 == '' || value2 == '' || value3 == '' ){
                alert('Todos os valores devem ser informados');
                return;
            }
            var minValue = Math.min(value1, value2, value3);
            document.getElementById('min_value').value = minValue;

            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}