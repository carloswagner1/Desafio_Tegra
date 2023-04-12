export const exerciseFourteenHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 14</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
                  Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia. O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto, e o valor em dinheiro dado pelo cliente. Seu programa deve mostrar o valor do troco a ser devolvido ao cliente. Se o dinheiro dado pelo cliente não for suficiente, mostrar uma mensagem informando o valor restante.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
              <form id="my-form">
                <div class="input-group">
                  <span class="input-group-text">Valor Unitário R$</span>
                  <input
                    id="unit_value"
                    type="number"
                    min="0"
                    step=".1"
                    class="form-control"
                    placeholder="0.00"
                  />
                </div>
                <div class="input-group mt-3">
                  <span class="input-group-text">Quantidade comprada</span>
                  <input
                    id="amount"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="0"
                  />
                </div>
                <div class="input-group mt-3">
                  <span class="input-group-text">Valor Recebido R$</span>
                  <input
                    id="amount_received"
                    type="number"
                    min="0"
                    step=".01"
                    class="form-control"
                    placeholder="0.00"
                  />
                </div>
                <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                  <button type="reset" class="btn btn-danger" value="Limpar"> Limpar </button>
                  <button type="button" class="btn btn-primary" value="ex14Enviar">Enviar</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-body-secondary">
              <h5 id="money_back"></h5>
            </div>
          </div>
    `
    main.innerHTML = contentHtml;
}