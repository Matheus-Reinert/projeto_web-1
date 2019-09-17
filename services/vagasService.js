var getVagas = function(){
    var vagas = [
        {
            id: '1',
            name: 'Técnico Elétrico',
            description: 'Realizar atividades de montagens e manutenção de máquinas',
            time: 'Tempo de experiencia 2 anos no mínimo',
            money: 'Sálario base RS1000,00',
            image: 'te.jpg'
        },
        {
            id: '2',
            name: 'Técnico Mecânico',
            description: 'Realizar atividades de montagens e manutenção de máquinas',
            time: 'Tempo de experiencia 3 anos no mínimo',
            money: 'Sálario base RS1500,00',
            image: 'tm.jpg'
        },
        {
            id: '3',
            name: 'Assistente Técnico Elétrico',
            description: 'Realizar atividades de instalação e manutenção de máquinas, disponibilidade para viajar',
            time: 'Tempo de experiencia 4 anos no mínimo',
            money: 'Sálario base RS2000,00',
            image: 'ae.jpg'
        },
        {
            id: '4',
            name: 'Assistente Técnico Mecânico',
            description: 'Realizar atividades de instalação e manutenção de máquinas, disponibilidade para viajar',
            time: 'Tempo de experiencia 5 anos no mínimo',
            money: 'Sálario base RS2500,00',
            image: 'am.jpg'
        },
        {
            id: '5',
            name: 'Vendedor Interno',
            description: 'Realizar atividades de vendas, com foco em suporte e reposição de peças',
            time: 'Tempo de experiencia 3 anos no mínimo',
            money: 'Sálario base RS3000,00',
            image: 'vi.jpg'
        },
    ];

    return vagas;
}

module.exports = {
    getVagas: getVagas
}