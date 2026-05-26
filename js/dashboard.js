async function carregarDashboard() {

  const { data } = await client
    .from('producao')
    .select('*');

  let totalCaixas = 0;
  let pesoTotal = 0;

  data.forEach(item => {

    totalCaixas += item.quantidade_caixas;

    pesoTotal += (
      item.peso_caixa
    );
  });

  document.getElementById('totalCaixas').innerText = totalCaixas;

  document.getElementById('pesoTotal').innerText = `${pesoTotal}kg`;

  criarGrafico(data);
}

function criarGrafico(data) {

  const ctx = document.getElementById('graficoProducao');

  const labels = data.map(item => item.data);

  const valores = data.map(item => item.quantidade_caixas);

  new Chart(ctx, {
    type: 'bar',

    data: {
      labels,

      datasets: [{
        label: 'Produção',
        data: valores
      }]
    }
  });
}

carregarDashboard();