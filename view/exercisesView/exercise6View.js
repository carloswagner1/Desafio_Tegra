export const exerciseSixHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 6</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
                Fazer um programa para ler o nome de um(a) funcionário(a), o valor que ele(a) recebe por hora, e a quantidade de horas trabalhadas por ele(a). Ao final, mostrar o valor  o pagamento do funcionário com uma mensagem explicativa.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
              <form id="my-form">
                <div class="input-group">
                  <span class="input-group-text">Nome</span>
                  <input
                    id="employeeName"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-group mt-3">
                  <span class="input-group-text">Valor por Hora R$</span>
                  <input
                    id="hourSalary"
                    type="number"
                    min="0"
                    step=".01"
                    class="form-control"
                    placeholder="0.00"
                  />
                </div>
                <div class="input-group mt-3">
                  <span class="input-group-text">Quantidade de Horas</span>
                  <input
                    id="amountHours"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="0"
                  />
                </div>
                <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                  <button type="reset" class="btn btn-danger" value="Limpar"> Limpar </button>
                  <button type="submit" class="btn btn-primary" value="ex6Enviar">Enviar</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-body-secondary">
                <h5>Resultado:</h5>
                <p id="ex6Message"></p>
            </div>
          </div>
    `
    main.innerHTML = contentHtml;
  }