export const exerciseOneHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 1</h5>
            </div>
            <div class="card-body">
              <p class="card-text text-break">
                Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular com uma casa decimal, bem como o valor do metro quadrado do terreno com duas casas decimais. Em seguida, o programa deve mostrar o valor da área do terreno, bem como o valor    do preço do terreno, ambos com duas casas decimais.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
              <form id="my-form">
                <div class="input-group">
                  <span class="input-group-text">Largura do Terreno</span>
                  <input
                    id="land_width"
                    type="number"
                    min="0"
                    step=".1"
                    class="form-control"
                    placeholder="0.0"
                  />
                </div>
                <div class="input-group">
                  <span class="input-group-text">Cumprimento do Terreno</span>
                  <input
                    id="land_length"
                    type="number"
                    min="0"
                    step=".1"
                    class="form-control"
                    placeholder="0.0"
                  />
                </div>
                <div class="input-group">
                  <span class="input-group-text">Valor do metro quadrado R$</span>
                  <input
                    id="square_meter_value"
                    type="number"
                    min="0"
                    step=".01"
                    class="form-control"
                    placeholder="0.00"
                  />
                </div>
                <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                  <button type="reset" class="btn btn-danger" value="Limpar">Limpar </button>
                  <button type="button" class="btn btn-primary" value="ex1Enviar">Enviar</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-body-secondary">
              <div class="input-group">
                <span class="input-group-text">Área Total</span>
                <input
                  id="total-area"
                  type="number"
                  min="0"
                  step=".01"
                  class="form-control"
                  placeholder="0.00"
                  disabled
                />
                <span class="input-group-text">m2</span>
              </div>
              <div class="input-group">
                <span class="input-group-text">Valor Total R$</span>
                <input
                  id="total-value"
                  type="number"
                  min="0"
                  step=".1"
                  class="form-control"
                  placeholder="0.00"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
    `
    main.innerHTML = contentHtml;
}