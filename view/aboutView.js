export const aboutHtml = () => {
  const main = document.getElementById("root");
  const contentHtml = `
        <div class="container position-absolute top-50 start-50 translate-middle w-75">
          <div class="card">
            <div class="card-header text-center mt-2">
              <h5 class="card-title">Programa Jovens Tegranos</h5>
              <p class="text-center">
                Nivelamento<br>
                Lista de Exercícios de Lógica e Programação
              </p>
            </div>
            <div class="card-body">
                <h6>Instruções</h6>
                <ul>
                    <li>
                        Todos os exercícios devem ser codificados em JavaScript e devem ter uma interface HTML para a entrada e saída de valores;
                    </li>
                    <li>
                        Todos os exercícios devem ser colocados na plataforma Git/GitHub;
                    </li>
                    <li>
                        Ao final da resolução de todos os exercícios, você deverá preencher o formulário de finalização do Nivelamento que se encontra no site da Academia Tegra;
                    </li>
                    <li>
                        A clareza e organização do código são elementos importantes e serão levados em conta na avaliação de cada exercício;
                    </li>
                    <li>
                        Há exercícios que exigem que você pesquise fórmulas ou métodos de resolução específicos. Sua habilidade em pesquisar soluções também conta na sua avaliação;
                    </li>
                    <li>
                        Esteja atento ao prazo de 30 dias para resolver os exercícios;
                    </li>
                </ul>
            </div>
          </div>
        </div>
    `;
  main.innerHTML = contentHtml;
};
