export const exerciseTwelveHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 12</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
                Fazer um programa para ler os três coeficientes de uma equação do segundo grau. Usando a fórmula de Bhaskara, calcular e mostrar os valores das raízes x1 e x2 da equação com quatro casas decimais. Se a equação não possuir raízes reais, mostrar uma mensagem.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
                <form id="my-form">
                    <div class="input-group mt-3">
                        <span class="input-group-text">Coeficiente a: </span>
                        <input
                            id="coefficient_a"
                            type="number"
                            step=".1"
                            class="form-control"
                            placeholder="0.0"
                        />
                    </div>
                    <div class="input-group mt-3">
                        <span class="input-group-text">Coeficiente b: </span>
                        <input
                            id="coefficient_b"
                            type="number"
                            step=".1"
                            class="form-control"
                            placeholder="0.0"
                        />
                    </div>
                    <div class="input-group mt-3">
                        <span class="input-group-text">Coeficiente c: </span>
                        <input
                            id="coefficient_c"
                            type="number"
                            step=".1"
                            class="form-control"
                            placeholder="0.0"
                        />
                    </div>
                    <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                        <button type="reset" class="btn btn-danger" value="Limpar"> Limpar </button>
                        <button type="submit" class="btn btn-primary" value="ex12Enviar">Enviar</button>
                    </div>
                </form>
            </div>
            <div class="card-footer text-body-secondary text-center">
              <h4>Resultado</h4>
              <h5 id="result"></h5>
            </div>
          </div>
    `
    main.innerHTML = contentHtml;
}