var getPosts = function(){
    var posts = [
        {
            id: 1,
            title: 'Post 1',
            image: 'post1.jpg',
            description: 'Meu primeiro post',
            body: 'Meu primeiro post bla bla'
        },
        {
            id: 2,
            title: 'Post 2',
            image: 'post2.jpg',
            description: 'Meu segundo post',
            body: 'Meu segundo post bla bla'
        },
        {
            id: 3,
            title: 'Sistema automatico de posts',
            image: 'post2.jpg',
            description: 'Novo sistema do blog',
            body: 'Meu terceiro post bla bla'
        },
    ];

    return posts;
}

module.exports = {
    getPosts: getPosts
}