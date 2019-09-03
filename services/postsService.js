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
            title: 'HMTL5',
            image: 'post3.jpg',
            description: 'Meu terceiro post',
            body: 'Meu terceiro post bla bla'
        },
        {
            id: 4,
            title: 'CSS3',
            image: 'post4.jpeg',
            description: 'Meu quartoo post',
            body: 'Meu terceiro post bla bla'
        },
        {
            id: 5,
            title: 'Javascript',
            image: 'post5.jpg',
            description: 'Meu quinto post',
            body: 'Meu terceiro post bla bla'
        },
        {
            id: 6,
            title: 'Node.js',
            image: 'post6.jpeg',
            description: 'Meu sexto post',
            body: 'Meu terceiro post bla bla'
        },
    ];

    return posts;
    
}

module.exports = {
    getPosts: getPosts
}