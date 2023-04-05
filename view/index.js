

const exerciseFiveHtml = () => {
  const main = document.getElementById('root');
  const contentHtml = `
      <div class="container mt-3 w-50">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Exercício 5</h5>
          </div>
          <div class="card-body">
            <p class="card-text text-break">
              Fazer um programa para ler o valor "r" do raio de um círculo, e depois mostrar o valor da área do círculo com três casas decimais. A fórmula da área do círculo é a seguinte: área = π. r². O valor de π corresponde a 3.14159.
            </p>
          </div>
        </div>
      </div>
      <div class="container mt-4 w-50" >
        <div class="card">
          <div class="card-body" >
            <form id="my-form">
              <div class="input-group">
                <span class="input-group-text">Raio do círculo</span>
                <input
                  id="circle_radius"
                  type="number"
                  min="0"
                  step=".1"
                  class="form-control"
                  placeholder="0.0"
                />
              </div>
              <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                <button type="reset" class="btn btn-danger"> Limpar </button>
                <button type="submit" class="btn btn-primary">Enviar</button>
              </div>
            </form>
          </div>
          <div class="card-footer text-body-secondary">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3">Área do Círculo</span>
              <input
                id="circle_area"
                type="number"
                min="0"
                step=".001"
                class="form-control"
                placeholder="0.000"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
  `
  main.innerHTML = contentHtml;
}
