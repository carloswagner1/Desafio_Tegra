export const exerciseTenHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 10</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
                  Fazer um programa para ler três números inteiros. Em seguida, mostrar qual o menor dentre os três números lidos. Em caso de empate, mostrar apenas uma vez.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
                <form id="my-form">
                    <div class="input-group mt-3">
                        <span class="input-group-text">Primeiro valor: </span>
                        <input
                          id="value_1"
                          type="number"
                          class="form-control"
                          placeholder="0"
                        />
                    </div>
                    <div class="input-group mt-3">
                        <span class="input-group-text">Segundo valor: </span>
                        <input
                          id="value_2"
                          type="number"
                          class="form-control"
                          placeholder="0"
                        />
                    </div>
                    <div class="input-group mt-3">
                        <span class="input-group-text">Terceiro valor: </span>
                        <input
                          id="value_3"
                          type="number"
                          class="form-control"
                          placeholder="0"
                        />
                    </div>
                    <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                      <button type="reset" class="btn btn-danger" value="Limpar">Limpar</button>
                      <button type="submit" class="btn btn-primary" value="ex10Enviar">Enviar</button>
                    </div>
                </form>
            </div>
            <div class="card-footer text-body-secondary">
              <div class="input-group mt-3">
                <span class="input-group-text">Menor</span>
                <input
                  id="min_value"
                  type="number"
                  min="0"
                  class="form-control"
                  placeholder="0"
                />
              </div>
            </div>
          </div>
    `
    main.innerHTML = contentHtml;
  }