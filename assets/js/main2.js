const contactInfo = document.getElementById('contact-info')
const sideBar = document.getElementById('sidebar')
const inner = document.getElementById('inner')


inner.addEventListener('click',(e)=>{
  if(e.target.parentElement.id == "contact-info"){
    sideBar.classList.remove('inactive')
}else{
    sideBar.classList.add('inactive')
}
})

contactInfo.addEventListener('click',(e)=>{
    if(e.target.parentElement.id == "contact-info"){
        sideBar.classList.remove('inactive')
        console.log('true')
        return;
    }else{
    }
    console.log('false')
    
})