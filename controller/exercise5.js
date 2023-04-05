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
            const circle_radius = document.getElementById('circle_radius').value;
            const circle_area = document.getElementById('circle_area');
            circle_area.value = (3.14159 * (circle_radius ** 2)).toFixed(3);
            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}