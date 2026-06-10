

function obterAnimaisDoStorage() {
    const dados = localStorage.getItem("listaAnimais");
    return dados ? JSON.parse(dados) : [];
}


function obterClasseStatus(status) {
    const mapeamentoCores = {
        "Lactação": "status-lactacao",
        "Reprodutor": "status-reprodutor",
        "Prenha": "status-prenha",
        "Recria": "status-recria",
        "Bezerra": "status-bezerra",
        "Engorda": "status-engorda",
        "Seca": "status-seca",
        "Ativo": "status-ativo",
        "Venda": "status-venda"
    };
    return mapeamentoCores[status] || "status-padrao";
}


function mudarPagina(pagina) {
    const linesPorPagina = 10;
    const tabelaBody = document.getElementById("tabela-animais").getElementsByTagName("tbody")[0];
    
    const listaAnimais = obterAnimaisDoStorage();

    const inicio = (pagina - 1) * linesPorPagina;
    const fim = inicio + linesPorPagina;
    
    const animaisDaPagina = listaAnimais.slice(inicio, fim);

    tabelaBody.innerHTML = "";

    animaisDaPagina.forEach(animal => {
        
        const classeCor = obterClasseStatus(animal.status);

        const linha = document.createElement("tr");
        
        
        linha.innerHTML = `
            <td>${animal.id}</td>
            <td>${animal.data}</td>
            <td>
                <div class="status-badge ${classeCor}">${animal.status}</div>
            </td>
            <td>
                <button class="editar" data-id="${animal.id}">Editar</button> 
                <button class="excluir" data-id="${animal.id}">Excluir</button>
            </td>
        `;  
        
        tabelaBody.appendChild(linha);
    });

    
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    
    if (btn1) btn1.classList.remove("ativo");
    if (btn2) btn2.classList.remove("ativo");
    
    const btnAtivo = document.getElementById("btn" + pagina);
    if (btnAtivo) btnAtivo.classList.add("ativo");
}


window.onload = () => mudarPagina(1);




const modal = document.getElementById('modalEditar');
const overlay = document.getElementById('overlay');


const tabela = document.getElementById("tabela-animais");

tabela.addEventListener('click', function(event) {
    const alvo = event.target;

    if (alvo.classList.contains('editar')) {
        const linha = alvo.closest('tr');
        const colunas = linha.querySelectorAll('td');

        document.getElementById('editNumero').value = colunas[0].innerText;
        document.getElementById('editData').value = colunas[1].innerText;
        document.getElementById('editStatus').value = colunas[2].innerText.trim();

        modal.style.display = 'block';
        overlay.style.display = 'block';
    }

    
    if (alvo.classList.contains('excluir')) {
        const linha = alvo.closest('tr');
        const idAnimal = alvo.getAttribute('data-id');
        alert('Excluir o animal com ID: ' + idAnimal);
        
    }
});

function fecharModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}