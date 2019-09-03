var getProjects = function(){
    var projects = [
        {
           id: 1,
           name: 'Project1',
           image: 'project1.jpg',
           subject: 'Programação Server-Side',
           Description: 'Breve descrição do projeto'
        },
        {
            id: 2,
            name: 'Project2',
            image: 'project2.jpg',
            subject: 'Programação Server-Side',
            Description: 'Breve descrição do projeto'
         },
         {
            id: 3,
            name: 'Project3',
            image: 'project3.jpg',
            subject: 'Programação Server-Side',
            Description: 'Breve descrição do projeto'
         },
               
    ];

    return projects;
    
}

module.exports = {
    getProjects: getProjects
}