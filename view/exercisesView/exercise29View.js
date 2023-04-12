export const exerciseTwentyNineHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 29</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
                Pesquise o algoritmo de validação do CNPJ escreva um programa que valide qualquer CNPJ dado;
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
              <form id="my-form">
                <div class="input-group mt-3">
                  <span class="input-group-text">CNPJ: </span>
                  <input
                    id="cnpj"
                    type="text"
                    class="form-control"
                    placeholder="00.000.000/0000-00"
                    maxlength="18"
                  />
                </div>
                <div class="mt-3 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                  <button type="reset" class="btn btn-danger" value="Limpar"> Limpar </button>
                  <button type="button" class="btn btn-primary" value="ex29Enviar">Enviar</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-body-secondary text-center">
                <div class="input-group">
                    <span class="input-group-text">Status: </span>
                    <input
                    id="status"
                    type="text"
                    class="form-control"
                    disabled
                    />
                </div>
            </div>
          </div>
    `
    main.innerHTML = contentHtml;
}