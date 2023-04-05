import { exerciseFiveHtml } from "../view/exercisesView/exercise5View.js";

export const ExerciseFiveComponent = () => {
    exerciseFiveHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        event.preventDefault();
        const button = event.composedPath()[0].innerText;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'Enviar') {
            const circleRadius = document.getElementById('circle_radius').value;
            if(circleRadius == ''){
                alert('Informe o valor do raio do círculo');
                return;
            }
            const circle_area = document.getElementById('circle_area');
            circle_area.value = (3.14159 * (circleRadius ** 2)).toFixed(3);
            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}