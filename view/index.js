const exerciseOneHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 1</h5>
            </div>
            <div class="card-body">
              <p class="card-text text-break">
                Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular com uma casa decimal, bem como o valor do metro quadrado do terreno com duas casas decimais. Em seguida, o programa deve mostrar o valor da área do terreno, bem como o valor    do preço do terreno, ambos com duas casas decimais.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
              <form id="my-form">
                <div class="input-group">
                  <span class="input-group-text">Largura do Terreno</span>
                  <input
                    id="land_width"
                    type="number"
                    min="0"
                    step=".1"
                    class="form-control"
                    placeholder="0.0"
                  />
                </div>
                <div class="input-group">
                  <span class="input-group-text">Cumprimento do Terreno</span>
                  <input
                    id="land_length"
                    type="number"
                    min="0"
                    step=".1"
                    class="form-control"
                    placeholder="0.0"
                  />
                </div>
                <div class="input-group">
                  <span class="input-group-text">Valor do metro quadrado R$</span>
                  <input
                    id="square_meter_value"
                    type="number"
                    min="0"
                    step=".01"
                    class="form-control"
                    placeholder="0.00"
                  />
                </div>
                <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                  <button type="reset" class="btn btn-danger">Limpar </button>
                  <button type="submit" class="btn btn-primary">Enviar</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-body-secondary">
              <div class="input-group">
                <span class="input-group-text">Área Total</span>
                <input
                  id="total-area"
                  type="number"
                  min="0"
                  step=".01"
                  class="form-control"
                  placeholder="0.00"
                  disabled
                />
                <span class="input-group-text">m2</span>
              </div>
              <div class="input-group">
                <span class="input-group-text">Valor Total R$</span>
                <input
                  id="total-value"
                  type="number"
                  min="0"
                  step=".1"
                  class="form-control"
                  placeholder="0.00"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
    `
    main.innerHTML = contentHtml;
}

const exerciseTwoHtml = () => {
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
              <button type="reset" class="btn btn-danger"> Limpar </button>
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
        <div class="card-footer text-body-secondary">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3">Área Total</span>
            <input
              id="total-area"
              type="number"
              min="0"
              step=".0001"
              class="form-control"
              id="square_meter_value"
              placeholder="0.0000"
              disabled
            />
          </div>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3">Perímetro</span>
            <input
              id="perimeter"
              type="number"
              min="0"
              step=".0001"
              class="form-control"
              id="square_meter_value"
              placeholder="0.0000"
              disabled
            />
          </div>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3">Diagonal</span>
            <input
              id="diagonal"
              type="number"
              min="0"
              step=".0001"
              class="form-control"
              id="square_meter_value"
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
const exerciseThreeHtml = () => {
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
                <span class="input-group-text" id="basic-addon3">Nome 1</span>
                <input
                  id="name1"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="input-group mt-3">
                <span class="input-group-text" id="basic-addon3">Idade 1</span>
                <input
                  id="age1"
                  type="number"
                  min="0"
                  class="form-control"
                />
              </div>
              <div class="input-group mt-3">
                <span class="input-group-text" id="basic-addon3">Nome 2</span>
                <input
                  id="name2"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="input-group mt-3">
                <span class="input-group-text" id="basic-addon3">Idade 2</span>
                <input
                  id="age2"
                  type="number"
                  min="0"
                  class="form-control"
                />
              </div>
              <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                <button type="reset" class="btn btn-danger"> Limpar </button>
                <button type="submit" class="btn btn-primary">Enviar</button>
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
const exerciseFourHtml = () => {
  const main = document.getElementById('root');
  const contentHtml = `
      <div class="container mt-3 w-50">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Exercício 4</h5>
          </div>
          <div class="card-body">
            <p class="card-text ">
            Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia. O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto, e o valor em dinheiro dado pelo cliente (suponha que haja dinheiro suficiente). Seu  programa deve mostrar o valor do troco a ser devolvido ao cliente.
            </p>
          </div>
        </div>
      </div>
      <div class="container mt-4 w-50" >
        <div class="card">
          <div class="card-body" >
            <form id="my-form">
              <div class="input-group">
                <span class="input-group-text" id="basic-addon3">Valor Unitário R$</span>
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
                <span class="input-group-text" id="basic-addon3">Quantidade</span>
                <input
                  id="amount"
                  type="number"
                  min="0"
                  class="form-control"
                  placeholder="0"
                />
              </div>
              <div class="input-group mt-3">
                <span class="input-group-text" id="basic-addon3">Valor Recebido R$</span>
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
                <button type="reset" class="btn btn-danger"> Limpar </button>
                <button type="submit" class="btn btn-primary">Enviar</button>
              </div>
            </form>
          </div>
          <div class="card-footer text-body-secondary">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3">Valor do Troco R$</span>
              <input
                id="money_back"
                type="number"
                min="0"
                step=".01"
                class="form-control"
                placeholder="0.00"
                disabled
              />
            </div>
        </div>
        </div>
  `
  main.innerHTML = contentHtml;
}
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
export const view = {
    exerciseOneHtml,
    exerciseTwoHtml,
    exerciseThreeHtml,
    exerciseFourHtml,
    exerciseFiveHtml
}