// var articleTitle = ["MATERI 1","MATERI 2","MATERI 3","MATERI 4"]
// var articleImage = ["images/215112.jpg","images/215112.jpg","images/215112.jpg","images/215112.jpg"]
// var articleDesc = ["INI JUDUL SANGAT SANGAT SINGKAT DARI ARTIKELNYA","INI JUDUL SANGAT SANGAT SINGKAT DARI ARTIKELNYA","INI JUDUL SANGAT SANGAT SINGKAT DARI ARTIKELNYA","INI JUDUL SANGAT SANGAT SINGKAT DARI ARTIKELNYA"]
// var articleDescColor = ["#394867","#f1f6f9","#9ba4b4","#f1f6f9"]
// var articleTitleColor = ["#9ba4b4","#000000","#394867","#9ba4b4"]
// var articleDescFontColor = ["#f1f6f9","#394867","#14274e","#394867",]
// var articleTitleFontColor = ["#f1f6f9","#f1f6f9","#f1f6f9","#f1f6f9",]
// var column = document.querySelector(".column")
// for (let i = 0; i < 4; i++) {
//     column.innerHTML += '<div class="articles"><div class="article-container" style="background-color:'+articleDescColor[i]+';color:'+articleDescFontColor[i]+';  ">'+articleDesc[i]+'</div><img src="'+articleImage[i]+'"><div class="article-title" style="background-color:'+articleTitleColor[i]+';color:'+articleTitleFontColor[i]+'; "><p>'+articleTitle[i]+'</p></div></div>'    
// }

const overlay = document.querySelector(".overlay")
overlay.addEventListener('click', function (e) {

    e.preventDefault()
    document.querySelector('.opening').scrollIntoView({
        behavior: 'smooth'
    })
})

const button = document.querySelector(".btn")
button.addEventListener('click', function (e) {

    e.preventDefault()
    document.querySelector('.opening').scrollIntoView({
        behavior: 'smooth'
    })
})

window.addEventListener("scroll", function(){
    var menu= document.querySelector(".navbars");
    menu.classList.toggle("sticky",window.scrollY > 0)
})



const hamburger_menu = document.querySelector(".hamburger-menu")

const container = document.querySelector(".containers")

hamburger_menu.addEventListener("click", ()=>{
    container.classList.toggle("active")
})

var isi;
var icon;

const pengertian = document.querySelector(".pengertian")
pengertian.querySelector(".topic").addEventListener("click",()=>{
    isi =  pengertian.querySelector(".isi")
    icon = pengertian.querySelector(".topic").querySelector('.fas.fa-plus') || pengertian.querySelector(".topic").querySelector('.fas.fa-minus');
    icon.className = icon.className === 'fas fa-plus' ? 'fas fa-minus' : 'fas fa-plus';
    isi.style.height = isi.style.height === '0px' ? '200px' : '0px';
})

const basedon = document.querySelector(".based-on")
basedon.querySelector(".topic").addEventListener("click",()=>{
    isi =  basedon.querySelector(".isi")
    icon = basedon.querySelector(".topic").querySelector('.fas.fa-plus') || basedon.querySelector(".topic").querySelector('.fas.fa-minus');
    icon.className = icon.className === 'fas fa-plus' ? 'fas fa-minus' : 'fas fa-plus';
    isi.style.height = isi.style.height === '0px' ? '400px' : '0px';
})

const penyebab = document.querySelector(".penyebab")
penyebab.querySelector(".topic").addEventListener("click",()=>{
    isi =  penyebab.querySelector(".isi")
    icon = penyebab.querySelector(".topic").querySelector('.fas.fa-plus') || penyebab.querySelector(".topic").querySelector('.fas.fa-minus');
    icon.className = icon.className === 'fas fa-plus' ? 'fas fa-minus' : 'fas fa-plus';
    isi.style.height = isi.style.height === '0px' ? '250px' : '0px';
})

const kesimpulan = document.querySelector(".kesimpulan")

kesimpulan.querySelector(".topic").addEventListener("click",()=>{
    isi =  kesimpulan.querySelector(".isi")
    icon = kesimpulan.querySelector(".topic").querySelector('.fas.fa-plus') || kesimpulan.querySelector(".topic").querySelector('.fas.fa-minus');
    icon.className = icon.className === 'fas fa-plus' ? 'fas fa-minus' : 'fas fa-plus';
    isi.style.height = isi.style.height === '0px' ? '450px' : '0px';
})


