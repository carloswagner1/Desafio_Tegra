import { exerciseEighteenHtml } from "../view/exercisesView/exercise18View.js"


export const ExerciseEighteenComponent = () => {
    exerciseEighteenHtml();

    const form = document.getElementById('my-form');
    const hiddenGroup = document.getElementById('hidden_group');
    const main = document.getElementById('root');
    const message = document.getElementById('message');
    const spanText = document.getElementById('span_text');

    var conversion;
    var scale = 'Celsius';
    spanText.innerHTML = `Informe a temperatura em ${scale}`;

    main.addEventListener('click', (event) => {
        const radio = event.composedPath()[0].value;
        if(radio == 'Celsius'){
            scale = radio;
            message.innerHTML = '';
            spanText.innerHTML = `Informe a temperatura em ${scale}`;
            hiddenGroup.classList.remove('visually-hidden');
        }
        if(radio == 'Fahrenheit'){
            scale = radio;
            message.innerHTML = '';
            spanText.innerHTML = `Informe a temperatura em ${scale}`;
            hiddenGroup.classList.remove('visually-hidden');
        }

        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear(form, hiddenGroup);
        }
        if( button == 'ex18Enviar') {
            const temperature = parseFloat(form.temperature.value);

            if(Number.isNaN(temperature)){
                alert('Informe a temperatura');
                return;
            }
            switch(scale){
                case 'Celsius':
                    conversion = CelsiusToFahrenheit(temperature);
                    message.innerHTML = `Temperatura equivalente em Fahrenheit: ${conversion.toFixed(2)}`;
                    clear(form, hiddenGroup);
                    break;
                case 'Fahrenheit':
                    conversion = FahrenheitToCelsius(temperature);
                    message.innerHTML = `Temperatura equivalente em Celsius: ${conversion.toFixed(2)}`;
                    clear(form, hiddenGroup);
                    break;
            }
        }
    });
}
function CelsiusToFahrenheit(temp){
    return 1.8*temp + 32;
}
function FahrenheitToCelsius(temp){
    return (temp - 32) * 5 / 9;
}
function clear(form, hiddenGroup) {
    form.reset();
    hiddenGroup.classList.add('visually-hidden');
}
