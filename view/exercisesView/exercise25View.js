export const exerciseTwentyFiveHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 25</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
                  Receber valores numéricos para o dia e o mês de nascimento de uma pessoa; Exibir o signo da pessoa.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
              <form id="my-form">
                <div class="input-group mt-3">
                  <span class="input-group-text">Data de Nascimento: </span>
                  <input
                    id="birthDate"
                    type="text"
                    class="form-control"
                    placeholder="dd/mm"
                  />
                </div>
                <div class="mt-3 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                  <button type="reset" class="btn btn-danger" value="Limpar"> Limpar </button>
                  <button type="button" class="btn btn-primary" value="ex25Enviar">Enviar</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-body-secondary text-center">
                <div class="input-group">
                    <span class="input-group-text">Signo: </span>
                    <input
                    id="sign"
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