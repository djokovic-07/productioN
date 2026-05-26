function calcularHoras(entrada, saida) {

  const inicio = new Date(`1970-01-01T${entrada}`);
  const fim = new Date(`1970-01-01T${saida}`);

  const diferenca = (fim - inicio) / 1000 / 60 / 60;

  return diferenca;
}

async function salvarProducao(event) {

  event.preventDefault();

  const usuario = document.getElementById('usuario').value;
  const data = document.getElementById('data').value;

  const entrada = document.getElementById('entrada').value;
  const saida = document.getElementById('saida').value;

  const caixas = Number(document.getElementById('caixas').value);
  const peso = Number(document.getElementById('peso').value);

  const horas = calcularHoras(entrada, saida);

  const caixasHora = caixas / horas;
  const caixasMinuto = caixas / (horas * 60);
  const pesoTotal = caixas * peso;

  const { error } = await client
    .from('producao')
    .insert([
      {
        usuario_id: usuario,
        data,
        hora_entrada: entrada,
        hora_saida: saida,
        quantidade_caixas: caixas,
        peso_caixa: peso
      }
    ]);

  if (!error) {

    alert(`
      Produção salva!

      Caixas/Hora: ${caixasHora.toFixed(2)}
      Caixas/Min: ${caixasMinuto.toFixed(2)}
      Peso Total: ${pesoTotal}kg
    `);
  }
}

const form = document.getElementById('formProducao');

form.addEventListener('submit', salvarProducao);