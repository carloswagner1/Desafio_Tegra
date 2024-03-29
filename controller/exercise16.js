import { exerciseSixteenHTML } from "../view/exercisesView/exercise16View.js"

export const ExerciseSixteenComponent = () => {
    exerciseSixteenHTML();

    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex16Enviar') {
            const attempt1 = parseFloat(document.getElementById('attempt_1').value);
            const attempt2 = parseFloat(document.getElementById('attempt_2').value);
            const attempt3 = parseFloat(document.getElementById('attempt_3').value);
            if(Number.isNaN(attempt1) || Number.isNaN(attempt2) || Number.isNaN(attempt3) ){
                alert('Todos os valores devem ser informados');
                return;
            }
            var maxValue = Math.max(attempt1, attempt2, attempt3);
            document.getElementById('bigger_distance').value = maxValue.toFixed(2);

            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}