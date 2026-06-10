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


function inicializarAnimaisMedicadosMockados() {
    // O IF fica aqui dentro para proteger o LocalStorage
    if (!localStorage.getItem('listaAnimaisMedicados')) {
        const listaAnimaisMedicados = [
            { "id": "03", "medicamento": "Ivermectina", "data_aplicacao": "10/05/2026", "carencia": "28 dias" },
            { "id": "17", "medicamento": "Penicilina", "data_aplicacao": "11/05/2026", "carencia": "07 dias" },
            { "id": "05", "medicamento": "Vitamina ADE", "data_aplicacao": "12/05/2026", "carencia": "Isento" },
            { "id": "12", "medicamento": "Febendazol", "data_aplicacao": "12/05/2026", "carencia": "14 dias" },
            { "id": "08", "medicamento": "Enrofloxacina", "data_aplicacao": "13/05/2026", "carencia": "21 dias" },
            { "id": "20", "medicamento": "Ocitocina", "data_aplicacao": "13/05/2026", "carencia": "Liberado" },
            { "id": "14", "medicamento": "Dexametasona", "data_aplicacao": "14/05/2026", "carencia": "05 dias" },
            { "id": "07", "medicamento": "Ceftiofur", "data_aplicacao": "14/05/2026", "carencia": "Isento (Leite)" },
            { "id": "20", "medicamento": "Albendazol", "data_aplicacao": "15/05/2026", "carencia": "12 dias" },
            { "id": "11", "medicamento": "Cloprostenol", "data_aplicacao": "15/05/2026", "carencia": "02 dias" },
            { "id": "02", "medicamento": "Ivermectina", "data_aplicacao": "16/05/2026", "carencia": "28 dias" },
            { "id": "02", "medicamento": "Florfenicol", "data_aplicacao": "16/05/2026", "carencia": "30 dias" },
            { "id": "19", "medicamento": "Bupivacaína", "data_aplicacao": "17/05/2026", "carencia": "Liberado" },
            { "id": "00", "medicamento": "Tilosina", "data_aplicacao": "17/05/2026", "carencia": "21 dias" },
            { "id": "17", "medicamento": "Meloxicam", "data_aplicacao": "18/05/2026", "carencia": "15 dias" },
            { "id": "06", "medicamento": "Sulfametoxazol", "data_aplicacao": "18/05/2026", "carencia": "10 dias" },
            { "id": "13", "medicamento": "Doramectina", "data_aplicacao": "19/05/2026", "carencia": "35 dias" },
            { "id": "09", "medicamento": "Vitamina B12", "data_aplicacao": "19/05/2026", "carencia": "Isento" },
            { "id": "00", "medicamento": "Oxitetraciclina", "data_aplicacao": "20/05/2026", "carencia": "28 dias" },
            { "id": "18", "medicamento": "Moxidectina", "data_aplicacao": "20/05/2026", "carencia": "28 dias" }
        ];

        localStorage.setItem('listaAnimaisMedicados', JSON.stringify(listaAnimaisMedicados));
        console.log("🚀 Animais mockados carregados no LocalStorage com sucesso!");
    }
}

inicializarAnimaisMedicadosMockados();


inicializarAnimaisMockados();
