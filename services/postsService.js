var getPosts = function(){
    var posts = [
        {
            id: 1,
            title: 'Engenharia de Software',
            image: 'post1.jpg',
            description: 'Engenharia de software é uma área da computação voltada à especificação, desenvolvimento, manutenção e criação de software.',
            body: 'Engenharia de software é uma área da computação voltada à especificação, desenvolvimento, manutenção e criação de software, com a aplicação de tecnologias e práticas de gerência de projetos e outras disciplinas, visando organização, produtividade e qualidade.'
        },
        {
            id: 2,
            title: 'Linguagem C',
            image: 'post2.png',
            description: 'C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural...',
            body: 'C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural, padronizada por Organização Internacional para Padronização (ISO), criada em 1972 por Dennis Ritchie na empresa AT&T Bell Labs para desenvolvimento do sistema operacional Unix (originalmente escrito em Assembly).'
        },
        {
            id: 3,
            title: 'HMTL5',
            image: 'post3.jpg',
            description: 'HTML5 é a mais recente evolução do padrão que define o HTML.',
            body: 'O termo representa dois conceitos diferentes: É uma nova versão da linguagem HTML, com novos elementos, atributos, e comportamentos.'
        },
        {
            id: 4,
            title: 'CSS3',
            image: 'post4.jpeg',
            description: 'CSS3 é a mais recente evolução da linguagem Cascading Style Sheets',
            body: 'CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets, onde se define estilos para seu projeto web.Com efeitos de transição, imagem, imagem de fundo/Background e outros, que dão um estilo novo e elegante a seus projetos web.Ou em todos os aspectos de design do layout da página.'
        },
        {
            id: 5,
            title: 'Javascript',
            image: 'post5.jpg',
            description: 'JavaScript, frequentemente abreviado como JS, é uma linguagem de programação interpretada de alto nível.',
            body: 'JavaScript, frequentemente abreviado como JS, é uma linguagem de programação interpretada de alto nível, caracterizada também, como dinâmica, fracamente tipificada, prototype-based e multi-paradigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.'
        },
        {
            id: 6,
            title: 'Node.js',
            image: 'post6.jpeg',
            description: 'Node.js é um interpretador, com código aberto, de código JavaScript de modo assíncrono e orientado a eventos.',
            body: 'Node.js é um interpretador, com código aberto, de código JavaScript de modo assíncrono e orientado a eventos, focado em migrar a programação do Javascript do lado do cliente para os servidores, criando assim aplicações de alta escalabilidade (como um servidor web), capazes de manipular milhares de conexões/requisições simultâneas em tempo real, numa única máquina física.'
        },
    ];

    return posts;
    
}

module.exports = {
    getPosts: getPosts
}