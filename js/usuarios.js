async function cadastrarUsuario() {
  const nome = document.getElementById('nomeUsuario').value;

  if (!nome) {
    alert('Por favor, digite um nome!');
    return;
  }

  // Tenta inserir no banco
  const { error } = await client
    .from('usuarios')
    .insert([{ nome }]);

  // Se der erro, mostra na tela qual foi o problema
  if (error) {
    console.error("Erro detalhado do Supabase:", error);
    alert(`Erro ao cadastrar: ${error.message}`);
  } else {
    // Se der certo, avisa, limpa o campo e recarrega a lista
    alert('Usuário cadastrado com sucesso!');
    document.getElementById('nomeUsuario').value = ''; 
    carregarUsuarios();
  }
}

async function carregarUsuarios() {
  const { data, error } = await client
    .from('usuarios')
    .select('*');

  // Se der erro ao carregar a lista, mostra no console
  if (error) {
    console.error("Erro ao carregar usuários:", error);
    return;
  }

  const lista = document.getElementById('listaUsuarios');
  lista.innerHTML = '';

  if (data) {
    data.forEach(usuario => {
      // Atualizado para combinar com o layout verde
      lista.innerHTML += `
        <div class="bg-green-950 border border-green-800 text-green-100 p-4 rounded-lg mb-3 shadow">
          ${usuario.nome}
        </div>
      `;
    });
  }
}

carregarUsuarios();