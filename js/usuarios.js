async function cadastrarUsuario() {

  const nome = document.getElementById('nomeUsuario').value;

  if (!nome) return;

  const { error } = await client
    .from('usuarios')
    .insert([{ nome }]);

  if (!error) {
    alert('Usuário cadastrado');
    carregarUsuarios();
  }
}

async function carregarUsuarios() {

  const { data } = await client
    .from('usuarios')
    .select('*');

  const lista = document.getElementById('listaUsuarios');

  lista.innerHTML = '';

  data.forEach(usuario => {

    lista.innerHTML += `
      <div class="bg-gray-800 p-4 rounded mb-3">
        ${usuario.nome}
      </div>
    `;
  });
}

carregarUsuarios();