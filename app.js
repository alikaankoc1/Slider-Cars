var models = [
    {
        name:'BMW 520',
        image: '/fotolar/bmw.jpg.jpg',
        link : '#'
    },
    {
        name:'Renault Clio',
        image: '/fotolar/clio.jpg.jpg',
        link:'#'
    },
    {
        name:'TOGG',
        image:'/fotolar/togg.jpg.jpg',
        link:'#'
    },
    {
        name:'Hyundai Tucson',
        image:'/fotolar/hyundai.jpg.webp',
        link:'#'
    },
    {
        name:'Volvo S90',
        image:'/fotolar/volvo.jpg',
        link:'#'
    },
    {
        name :'AUDI A8',
        image:'/fotolar/audi.webp',
        link:'#'
    }
]
var index =0;
var slaytCount = models.length;
showSlide(index);

document.querySelector('.fa-arrow-circle-left ').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right ').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
});

function showSlide(i){
   
    index = i;
    if(i<0){
        index = slaytCount-1;
    }
    if(i >= slaytCount){
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-link').setAttribute('href',models[index].link);
    
}




