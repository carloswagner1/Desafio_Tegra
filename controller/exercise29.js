import { exerciseTwentyNineHtml } from "../view/exercisesView/exercise29View.js"

export const ExerciseTwentyNineComponent = () => {
    exerciseTwentyNineHtml();
    const main = document.getElementById('root');
    const cnpj = document.getElementById('cnpj');

    cnpj.addEventListener('input', function (event) {
        var x = event.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
        event.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
      });


    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        const status = document.getElementById('status');
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex29Enviar') {
            var enteredCnpj = cnpj.value;

            if(!enteredCnpj || enteredCnpj.length < 18){
                alert('Informe o CNPJ a ser pesquisado');
                return;
            }
            if(validaCNPJ(enteredCnpj)){
                status.value = 'Válido'
            }else{
                status.value = 'Inválido';
            }


            clear();
        }
    });
}
function validaCNPJ (cnpj) {
    var b = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ]
    var c = String(cnpj).replace(/[^\d]/g, '')

    if(c.length !== 14)
        return false

    if(/0{14}/.test(c))
        return false

    for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
    if(c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false

    for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
    if(c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false

    return true
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}
