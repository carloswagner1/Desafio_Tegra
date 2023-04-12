export const exerciseTwoHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 2</h5>
            </div>
            <div class="card-body">
              <p class="card-text text-break">
                Fazer um programa para ler as medidas da base e altura de um retângulo. Em seguida, mostrar o valor da área, perímetro e diagonal deste retângulo, com quatro casas decimais.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
              <form id="my-form">
                <div class="input-group">
                  <span class="input-group-text">Base do retângulo</span>
                  <input
                    id="rectangle_base"
                    type="number"
                    min="0"
                    step=".1"
                    class="form-control"
                    placeholder="0.0"
                  />
                </div>
                <div class="input-group">
                <span class="input-group-text">Altura do retângulo</span>
                <input
                  id="rectangle_height"
                  type="number"
                  min="0"
                  step=".1"
                  class="form-control"
                  placeholder="0.0"
                />
              </div>
              <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                <button type="reset" class="btn btn-danger" value="Limpar"> Limpar </button>
                <button type="button" class="btn btn-primary" value="ex2Enviar">Enviar</button>
              </div>
            </form>
          </div>
          <div class="card-footer text-body-secondary">
            <div class="input-group">
              <span class="input-group-text">Área Total</span>
              <input
                id="retangleArea"
                type="number"
                min="0"
                step=".0001"
                class="form-control"
                placeholder="0.0000"
                disabled
              />
            </div>
            <div class="input-group">
              <span class="input-group-text">Perímetro</span>
              <input
                id="perimeter"
                type="number"
                min="0"
                step=".0001"
                class="form-control"
                placeholder="0.0000"
                disabled
              />
            </div>
            <div class="input-group">
              <span class="input-group-text">Diagonal</span>
              <input
                id="diagonal"
                type="number"
                min="0"
                step=".0001"
                class="form-control"
                placeholder="0.0000"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    `
    main.innerHTML = contentHtml;
  }