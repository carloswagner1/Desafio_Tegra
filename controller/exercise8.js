import { exerciseEightHtml } from "../view/exercisesView/exercise8View.js";

export const ExerciseEightComponent = () => {
    exerciseEightHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex8Enviar') {
            const measureA = parseFloat(document.getElementById('measure_A').value);
            const measureB = parseFloat(document.getElementById('measure_B').value);
            const measureC = parseFloat(document.getElementById('measure_C').value);
            if(Number.isNaN(measureA) || Number.isNaN(measureB) || Number.isNaN(measureC)){
                alert('Todos os dados devem ser preenchidos');
                return;
            }
            const squareArea = measureA ** 2;
            const triangleArea = (measureA * measureB) / 2;
            const trapezeArea = ((measureA + measureB) * measureC)/2;
            document.getElementById('square_area').value = squareArea.toFixed(4);
            document.getElementById('triangle_area').value = triangleArea.toFixed(4);
            document.getElementById('trapeze_area').value = trapezeArea.toFixed(4);
            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}