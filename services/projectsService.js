var getProjects = function(){
    var projects = [
        {
           id: 1,
           name: 'Project1',
           image: 'project1.jpg',
           subject: 'Programação Server-Side',
           description: 'Criação de um projeto integrando o lado server-side com a o lado do usuario'
        },
        {
            id: 2,
            name: 'Project2',
            image: 'project2.jpg',
            subject: 'Redes de Computadores',
            description: 'Apresentanção e contextualização das redes de computares'
         },
         {
            id: 3,
            name: 'Project3',
            image: 'project3.jpg',
            subject: 'PAC',
            description: 'Criação de um projeto envolvedo o conhecimento adquirido em varias disciplinas e aplicados em modelo de casa com domotica.'
         },
               
    ];

    return projects;
    
}

module.exports = {
    getProjects: getProjects
}