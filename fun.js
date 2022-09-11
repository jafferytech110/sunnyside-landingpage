const button = document.querySelector('.hamburger')
const navigation = document.querySelector('.mobile-navigation')
button.addEventListener('click',(e)=>{
    navigation.classList.toggle('display')
})

