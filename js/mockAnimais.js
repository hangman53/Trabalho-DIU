function inicializarAnimaisMockados() {
    // O IF fica aqui dentro para proteger o LocalStorage
    if (!localStorage.getItem('listaAnimais')) {
        const listaAnimais = [
            { "id": "001", "data": "15/03/2021", "status": "Lactação" },
            { "id": "002", "data": "10/05/2020", "status": "Reprodutor" },
            { "id": "003", "data": "22/08/2022", "status": "Prenha" },
            { "id": "004", "data": "05/01/2023", "status": "Recria" },
            { "id": "005", "data": "12/11/2023", "status": "Bezerra" },
            { "id": "006", "data": "30/06/2019", "status": "Engorda" },
            { "id": "007", "data": "19/02/2021", "status": "Seca" },
            { "id": "008", "data": "08/09/2022", "status": "Ativo" },
            { "id": "009", "data": "14/04/2021", "status": "Prenha" },
            { "id": "010", "data": "21/07/2020", "status": "Reprodutor" },
            { "id": "011", "data": "03/12/2022", "status": "Lactação" },
            { "id": "012", "data": "11/02/2023", "status": "Recria" },
            { "id": "013", "data": "25/05/2021", "status": "Seca" },
            { "id": "014", "data": "09/08/2019", "status": "Engorda" },
            { "id": "015", "data": "30/01/2024", "status": "Bezerra" },
            { "id": "016", "data": "17/06/2022", "status": "Venda" },
            { "id": "017", "data": "22/10/2021", "status": "Lactação" },
            { "id": "018", "data": "05/03/2023", "status": "Recria" },
            { "id": "019", "data": "12/09/2020", "status": "Prenha" },
            { "id": "020", "data": "28/11/2018", "status": "Reprodutor" }
        ];

        localStorage.setItem('listaAnimais', JSON.stringify(listaAnimais));
        console.log("🚀 Animais mockados carregados no LocalStorage com sucesso!");
    }
}

inicializarAnimaisMockados();