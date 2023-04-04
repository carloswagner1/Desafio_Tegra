const exerciseOneHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
    <div class="container mt-3 w-75">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Exercício 1</h5>
          </div>
          <div class="card-body">
            <p class="card-text">
              Fazer um programa para ler as medidas da largura e comprimento de
              um terreno retangular com uma casa decimal, bem como o valor do
              metro quadrado do terreno com duas casas decimais. Em seguida, o
              programa deve mostrar o valor da área do terreno, bem como o valor
              do preço do terreno, ambos com duas casas decimais, conforme
              exemplo.
            </p>
          </div>
        </div>
    </div>
    <div class="container mt-4 w-50" >
        <div class="card">
          <div class="card-body" >
            <form id="my-form">
            <label for="land_width" class="form-label"
            >Largura do terreno</label
          >
          <input
            type="number"
            min="0"
            step=".1"
            class="form-control"
            id="land_width"
            placeholder="0.0"
          />
          <label for="land_length" class="form-label"
            >Cumprimento do terreno</label
          >
          <input
            type="number"
            min="0"
            step=".1"
            class="form-control"
            id="land_length"
            placeholder="0.0"
          />
          <label for="square_meter_value" class="form-label"
            >Valor do metro quadrado</label
          >
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3">R$</span>
            <input
              type="number"
              min="0"
              step=".1"
              class="form-control"
              id="square_meter_value"
              placeholder="0.00"
            />
          </div>
          <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
            <button type="reset" class="btn btn-danger"> Limpar </button>
            <button type="button" class="btn btn-primary">Calcular</button>
          </div>

            </form>
          </div>
          <div class="card-footer text-body-secondary">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3">Área Total</span>
              <input
                id="total-area"
                type="number"
                min="0"
                step=".01"
                class="form-control"
                id="square_meter_value"
                placeholder="0.00"
                disabled
              />
              <span class="input-group-text" id="basic-addon3">m2</span>
            </div>
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3">Valor Total R$</span>
              <input
                id="total-value"
                type="number"
                min="0"
                step=".1"
                class="form-control"
                id="square_meter_value"
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

export const view = {
    exerciseOneHtml
}