var getTestimonials = function(){
    var testimonials = [
        {
            id: 1,
            name: 'Juca',
            company: 'Católica SC',
            title: 'Cara do TI',
            testimony: 'Eu gosto muito de javascript'
        },
        {
            id: 2,
            name: 'Monica',
            company: 'Católica SC',
            title: 'Cara do TI',
            testimony: 'Eu gosto muito de javascript'
        },
    ];

    return testimonials;
} 

module.exports = {
    getTestimonials: getTestimonials
}