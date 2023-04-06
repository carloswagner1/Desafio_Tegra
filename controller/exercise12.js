import { exerciseTwelveHtml } from "../view/exercisesView/exercise12View.js"

export const ExerciseTwelveComponent = () => {
    exerciseTwelveHtml();

    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        event.preventDefault();
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex12Enviar') {
            const A = document.getElementById('coefficient_a').value;
            const B = document.getElementById('coefficient_b').value;
            const C = document.getElementById('coefficient_c').value;
            const result = document.getElementById('result');
            var x1;
            var x2;
            var delta;

            if(!A || !B || !C){
                alert('Insira os valores de a, b e c.');
                return;
            }
            if(A == 0){
                alert('O valor de a deve ser diferente de zero');
                return;
            }

            delta = ((B ** 2) - 4 * A * C);

            if(delta < 0){
                result.innerHTML = 'Esta equação não possui raízes reais';
            }else{
                x1 = (-B + Math.sqrt(delta)) / (2 * A);
                x2 = (-B - Math.sqrt(delta)) / (2 * A);
                result.innerHTML = `X1 = ${x1.toFixed(4)} e X2 = ${x2.toFixed(4)}`;
            }
            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}

