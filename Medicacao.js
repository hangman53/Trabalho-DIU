
function mudarPagina(pagina) {
            const linhasPorPagina = 10;
            const tabela = document.getElementById("tabela-animais");
            const linhas = tabela.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
            
            // Loop para esconder/mostrar linhas
            for (let i = 0; i < linhas.length; i++) {
                const inicio = (pagina - 1) * linhasPorPagina;
                const fim = inicio + linhasPorPagina;

                if (i >= inicio && i < fim) {
                    linhas[i].style.display = "";
                } else {
                    linhas[i].style.display = "none";
                }
            }

            // Lógica simples para destacar o botão ativo
            document.getElementById("btn1").classList.remove("ativo");
            document.getElementById("btn2").classList.remove("ativo");
            document.getElementById("btn" + pagina).classList.add("ativo");
        }


window.onload = () => mudarPagina(1);

const modal = document.getElementById('modalEditar');
const overlay = document.getElementById('overlay');


const botoesEditar = document.querySelectorAll('.editar');

botoesEditar.forEach(botao => {
    botao.addEventListener('click', function() {
        const linha = this.closest('tr');
        
       
        const colunas = linha.querySelectorAll('td');

       
        document.getElementById('editNumero').value     = colunas[0].innerText;
        document.getElementById('editNome').value   = colunas[1].innerText;
        document.getElementById('editData').value   = colunas[2].innerText;
        document.getElementById('editSexo').value   = colunas[3].innerText;
        document.getElementById('editRaca').value   = colunas[4].innerText;
        
        
        document.getElementById('editStatus').value = colunas[5].innerText.trim();

       
        modal.style.display = 'block';
        overlay.style.display = 'block';
    });
});


function fecharModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

const botoesExcluir = document.querySelectorAll('.excluir');
botoesExcluir.forEach(botao => {
    botao.addEventListener('click', function() {
        alert('Excluir o animal: ' + this.closest('tr').querySelectorAll('td')[1].innerText);
    });
});