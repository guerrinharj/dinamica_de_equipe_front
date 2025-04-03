const API_URL = 'http://localhost:3000/api/dinamicas';

document.addEventListener('DOMContentLoaded', () => {
    carregarDinamicas();

    document.getElementById('aleatoriaBtn').addEventListener('click', () => {
        fetch(`${API_URL}/aleatoria`)
            .then(res => res.json())
            .then(data => alert(`🎲 ${data.nome}\n\n${data.descricao}`));
    });
});

function carregarDinamicas() {
    fetch(API_URL)
        .then(res => res.json())
        .then(dinamicas => {
            const list = document.getElementById('dinamicasList');
            list.innerHTML = '';

            dinamicas.forEach(dinamica => {
                const item = document.createElement('div');
                item.classList.add('dinamica');

                item.innerHTML = `
                    <h3>${dinamica.nome}</h3>
                    <p>${dinamica.descricao}</p>
                    <p><strong>Participantes:</strong> ${dinamica.participantes.join(', ')}</p>
                    <p><strong>Avaliação média:</strong> ${dinamica.avaliacao_media ?? 'Sem avaliações'}</p>
                    <button onclick="editar(${dinamica.id})">✏️ Editar</button>
                    <button onclick="remover(${dinamica.id})">🗑️ Remover</button>
                `;

                list.appendChild(item);
            });
        });
}

function editar(id) {
    window.location.href = `form.html?id=${id}`;
}

function remover(id) {
    if (confirm('Tem certeza que deseja excluir esta dinâmica?')) {
        fetch(`${API_URL}/${id}`, { method: 'DELETE' })
            .then(() => carregarDinamicas());
    }
}
