const API_BASE = 'http://localhost:3000/api/dinamicas';

document.addEventListener('DOMContentLoaded', () => {
    carregarDinamicas();
    document.getElementById('reviewForm').addEventListener('submit', enviarReview);
});

function carregarDinamicas() {
    fetch(API_BASE)
        .then(res => res.json())
        .then(dinamicas => {
            const select = document.getElementById('dinamicaSelect');
            dinamicas.forEach(d => {
                const option = document.createElement('option');
                option.value = d.id;
                option.textContent = d.nome;
                select.appendChild(option);
            });
        })
        .catch(err => {
            console.error(err);
            alert("Erro ao carregar dinâmicas.");
        });
}

function enviarReview(e) {
    e.preventDefault();

    const dinamicaId = document.getElementById('dinamicaSelect').value;
    const comentario = document.getElementById('comentario').value.trim();
    const nota = parseInt(document.getElementById('nota').value);

    if (!dinamicaId) {
        alert("Selecione uma dinâmica.");
        return;
    }

    if (!comentario && (isNaN(nota) || nota < 1 || nota > 5)) {
        alert("Nenhum campo foi preenchido. O review é opcional, mas precisa conter pelo menos um valor.");
        return;
    }

    if (nota && (nota < 1 || nota > 5)) {
        alert("A nota deve estar entre 1 e 5.");
        return;
    }

    fetch(`${API_BASE}/${dinamicaId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review: { comentario, nota } })
    })
    .then(res => {
        if (!res.ok) throw new Error('Erro ao salvar review');
        return res.json();
    })
    .then(() => {
        alert("Review enviado com sucesso!");
        window.location.href = 'index.html';
    })
    .catch(err => {
        console.error(err);
        alert("Erro ao enviar review.");
    });
}
