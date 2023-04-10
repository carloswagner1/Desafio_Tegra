export const exerciseTwentyHtml = () => {

const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 20</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
                  Escreva um programa que exiba a soma de todos os números compreendidos entre um intervalo dado pelo usuário.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
                <form id="my-form">
                    <div class="input-group mt-3">
                        <span class="input-group-text">Número inicial: </span>
                        <input
                          name="number1"
                          id="number_1"
                          type="number"
                          class="form-control"
                          placeholder="0"
                        />
                    </div>
                    <div class="input-group mt-3">
                        <span class="input-group-text">Número final: </span>
                        <input
                          name="number2"
                          id="number_2"
                          type="number"
                          class="form-control"
                          placeholder="0"
                        />
                    </div>
                    <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                      <button type="reset" class="btn btn-danger" value="Limpar">Limpar</button>
                      <button type="button" class="btn btn-primary" value="ex20Enviar">Enviar</button>
                    </div>
                </form>
            </div>
            <div class="card-footer text-body-secondary">
              <h5 id="message"></h5>
            </div>
          </div>
    `
    main.innerHTML = contentHtml;
}