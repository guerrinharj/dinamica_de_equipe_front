const API_BASE = 'http://localhost:3000/api/dinamicas';
const params = new URLSearchParams(window.location.search);
const dinamicaId = params.get('id');

document.addEventListener('DOMContentLoaded', () => {
    if (dinamicaId) {
        document.getElementById('formTitle').textContent = 'Editar Dinâmica';
        carregarDinamica(dinamicaId);
    }

    document.getElementById('dinamicaForm').addEventListener('submit', salvarDinamica);
});

function carregarDinamica(id) {
    fetch(`${API_BASE}/${id}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('nome').value = data.nome;
            document.getElementById('descricao').value = data.descricao;
            document.getElementById('participantes').value = data.participantes.join(', ');
        });
}

function salvarDinamica(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const participantes = document.getElementById('participantes').value
        .split(',')
        .map(p => p.trim())
        .filter(p => p !== "");

    const body = JSON.stringify({
        dinamica: { nome, descricao, participantes }
    });

    const method = dinamicaId ? 'PATCH' : 'POST';
    const url = dinamicaId ? `${API_BASE}/${dinamicaId}` : API_BASE;

    fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: body
    })
    .then(res => {
        if (!res.ok) throw new Error('Erro ao salvar dinâmica');
        return res.json();
    })
    .then(data => {
        const comentario = document.getElementById('comentario').value;
        const nota = parseInt(document.getElementById('nota').value);

        if (comentario && nota) {
            return fetch(`${API_BASE}/${data.id}/reviews`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ review: { comentario, nota } })
            });
        }
    })
    .then(() => {
        alert('Dinâmica salva com sucesso!');
        window.location.href = 'index.html';
    })
    .catch(err => {
        console.error(err);
        alert('Erro ao salvar dinâmica.');
    });
}
