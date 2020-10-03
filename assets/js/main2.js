const contactInfo = document.getElementById('contact-info')
const sideBar = document.getElementById('sidebar')
const inner = document.getElementById('inner')
const mainImage = document.getElementById('main-image')
const nameTitle = document.getElementById('name')


// window.addEventListener('resize',function(){
//     location.reload()
// })

// $(window).resize(function() {
//     location.reload();
// });

inner.addEventListener('click',(e)=>{
    if (breakpoints.active('>large'))
							return;
  if(e.target.parentElement.id == "contact-info"){
    sideBar.classList.remove('inactive')
}else{
    sideBar.classList.add('inactive')
}
})

contactInfo.addEventListener('click',(e)=>{
    if (breakpoints.active('>large'))
							return;
    if(e.target.parentElement.id == "contact-info"){
        sideBar.classList.remove('inactive')
        console.log('true')
        return;
    }else{
    }
    console.log('false')
    
})



const TypeWriter = function(txtElement, words, wait = 2000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex ='';
    this.wait = parseInt(wait, 10);
    this.type();
    this.isdeleting = false;
}

TypeWriter.prototype.type = function(){

   

    const current = this.wordIndex % this.words.length;

    

    const fulltxt = this.words[current];
    
  

if(this.isdeleting){
    this.txt = fulltxt.substring(0,this.txt.length -1);
    
}else{
    this.txt = fulltxt.substring(0,this.txt.length +1);
    
}

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

    let typeSpeed = 300;

    if(this.isdeleting){
        typeSpeed /=2
    }

    if(!this.isdeleting && this.txt === fulltxt){
        typeSpeed = this.wait;
        this.isdeleting = true
    }else if(this.isdeleting && this.txt === ''){
        this.addEventListener = false;
        this.isdeleting=false
        this.wordIndex ++

        typeSpeed = 500
    }

     setTimeout(() => this.type(),typeSpeed)
}



function init(){
    const txtElement = document.querySelector('.java-script-text');
    const words = JSON.parse(txtElement.getAttribute('data-words'))
    console.log(words)
    const wait = txtElement.getAttribute('data-wait')

    new TypeWriter(txtElement, words, wait)
}

mainImage.addEventListener('animationend',()=> mainImage.classList.add('jello-horizontal'),{once: true})
nameTitle.addEventListener('animationend',init,{once: true})