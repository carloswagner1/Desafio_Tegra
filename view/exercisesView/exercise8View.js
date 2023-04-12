export const exerciseEightHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 8</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
                Fazer um programa para ler três medidas A, B e C. Em seguida, calcular e mostrar (imprimir os dados com quatro casas decimais):
                a) a área do quadrado que tem lado A
                b) a área do triângulo retângulo que base A e altura B
                c) a área do trapézio que tem bases A e B, e altura C
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
                <form id="my-form">
                    <div class="input-group mt-3">
                        <span class="input-group-text">Medida A</span>
                        <input
                          id="measure_A"
                          type="number"
                          min="0"
                          step=".1"
                          class="form-control"
                          placeholder="0.0"
                        />
                    </div>
                    <div class="input-group mt-3">
                        <span class="input-group-text">Medida B</span>
                        <input
                          id="measure_B"
                          type="number"
                          min="0"
                          step=".1"
                          class="form-control"
                          placeholder="0.0"
                        />
                    </div>
                    <div class="input-group mt-3">
                        <span class="input-group-text">Medida C</span>
                        <input
                          id="measure_C"
                          type="number"
                          min="0"
                          step=".1"
                          class="form-control"
                          placeholder="0.0"
                        />
                    </div>
                    <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                      <button type="reset" class="btn btn-danger" value="Limpar">Limpar</button>
                      <button type="button" class="btn btn-primary" value="ex8Enviar">Enviar</button>
                    </div>
                </form>
            </div>
            <div class="card-footer text-body-secondary">
              <div class="input-group mt-3">
                <span class="input-group-text">Área do quadrado</span>
                <input
                  id="square_area"
                  type="number"
                  min="0"
                  step=".0001"
                  class="form-control"
                  placeholder="0.0000"
                />
              </div>
              <div class="input-group mt-3">
                <span class="input-group-text">Área do triângulo</span>
                <input
                  id="triangle_area"
                  type="number"
                  min="0"
                  step=".0001"
                  class="form-control"
                  placeholder="0.0000"
                />
              </div>
              <div class="input-group mt-3">
                <span class="input-group-text">Área do trapézio</span>
                <input
                  id="trapeze_area"
                  type="number"
                  min="0"
                  step=".0001"
                  class="form-control"
                  placeholder="0.0000"
                />
              </div>
            </div>
          </div>
    `
    main.innerHTML = contentHtml;
  }