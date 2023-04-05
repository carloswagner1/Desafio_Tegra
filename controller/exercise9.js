import { exerciseNineHtml } from "../view/exercisesView/exercise9View.js";

export const ExerciseNineComponent = () => {
    exerciseNineHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        event.preventDefault();
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex9Enviar') {
            const timeInSeconds = Number(document.getElementById('time_in_seconds').value);
            if(timeInSeconds == '' ){
                alert('Informe o tempo em segundos no campo indicado');
                return;
            }
            const formatedTime = convertSecondstoTime(timeInSeconds);
            document.getElementById('ex9Message').innerHTML = formatedTime;
            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}
function convertSecondstoTime(given_seconds) {
    const hours = Math.floor(given_seconds / 3600);
    const rest = given_seconds % 3600;
    const minutes = Math.floor(rest / 60);
    const seconds = rest % 60;

    const timeString = hours.toString().padStart(2, '0')
        + ':' + minutes.toString().padStart(2, '0')
        + ':' + seconds.toString().padStart(2, '0');

        return timeString;

}