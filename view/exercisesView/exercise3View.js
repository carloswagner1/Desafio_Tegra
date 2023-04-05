export const exerciseThreeHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 3</h5>
            </div>
            <div class="card-body">
              <p class="card-text">
              Fazer um programa para ler o nome e idade de duas pessoas. Ao final mostrar uma mensagem com os nomes e a idade média entre essas pessoas, com uma casa decimal.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
              <form id="my-form">
                <div class="input-group">
                  <span class="input-group-text">Nome 1</span>
                  <input
                    id="name1"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-group mt-3">
                  <span class="input-group-text">Idade 1</span>
                  <input
                    id="age1"
                    type="number"
                    min="0"
                    class="form-control"
                  />
                </div>
                <div class="input-group mt-3">
                  <span class="input-group-text">Nome 2</span>
                  <input
                    id="name2"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-group mt-3">
                  <span class="input-group-text">Idade 2</span>
                  <input
                    id="age2"
                    type="number"
                    min="0"
                    class="form-control"
                  />
                </div>
                <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                  <button type="reset" class="btn btn-danger" value="Limpar"> Limpar </button>
                  <button type="submit" class="btn btn-primary" value="ex3Enviar">Enviar</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-body-secondary">
              <h5>Resultado:</h5>
              <p id="message"></p>
            </div>
          </div>
    `
    main.innerHTML = contentHtml;
  }