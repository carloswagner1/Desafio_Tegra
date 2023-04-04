import { view } from "../view/index.js"

export const ExerciseThreeComponent = () => {
    view.exerciseThreeHtml();

    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].innerText;
        if( button == 'Enviar'){
            const name1 = document.getElementById('name1').value;
            const name2 = document.getElementById('name2').value;
            const age1 = Number(document.getElementById('age1').value);
            const age2 = Number(document.getElementById('age2').value);

            if(name1 == '' || name2 == "" || age1 == '' || age2==""){
                alert('Todos os campos devem ser preenchidos');
                return;
            }
            const average = CalculateAverage(age1, age2);
            const message = document.getElementById('message');
            message.innerHTML = `A idade média de ${name1} e ${name2} é de ${average} anos`
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