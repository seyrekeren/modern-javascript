let models = [
    {
        name: "tiguan",
        image: 'img/tiguan.jpg',
        link: 'https://www.arabafirsatlari.com/2022-volkswagen-tiguan-ozellikleri/'
    },
    {
        name: "golf",
        image: 'img/golf.jpg',
        link: 'https://www.arabafirsatlari.com/2022-volkswagen-kampanyali-fiyatlar/'
    },
    {
        name: "caddy",
        image: 'img/caddy.jpg',
        link: 'https://www.arabafirsatlari.com/volkswagen-ticari-arac-fiyat-listesi-2022/'
    },
]
let index = 0;
let slaytCount = models.length;
showSlide(index);


document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    showSlide(index);
    console.log(index);
});

function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index = 0;  
    }
    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src', models[index].image);

    document.querySelector('.card-link').setAttribute('href', models[index].link);


}