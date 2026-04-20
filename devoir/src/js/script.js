/*let nom='Ali'
let tableau=['ali','sami','mohamed'];
let age =14;
console.log(nom);
console.log(tableau);
let personne={nom:'Ali',age:14};
console.log(personne);*/
document.addEventListener('DOMContentLoaded',()=>{
    const hambuger = document.querySelector('.hambuger');
    const navLinks = document.querySelector('.nav-links');
    if(!hambuger || !navLinks){
        console.log('aucun element retrouver dans la liste');
    }
    hambuger.addEventListener('click',()=>{
        navLinks.classList.toggle('active');
        hambuger.classList.toggle('open');
        console.log('aucun element retrouver dans la liste');
    })
})
