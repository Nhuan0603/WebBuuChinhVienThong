// slide anh
var slides = document.querySelectorAll(".slide_item")
var dotss = document.querySelectorAll(".dot")
var index=1
showSlide(index)
function slide_plus(n){
    showSlide(index+=n)
}
function slide_current(n){
    showSlide(index=n)
}
function showSlide(n){
    if(n>slides.length){index=1}
    if(n<1){index=slides.length}
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    for(i=0;i<dotss.length;i++){
        dotss[i].classList.remove("active_slide") //.className = dotss[i].className.replace(" active_slide", "")
    }
    slides[index-1].style.display = "block";  
    dotss[index-1].classList.add("active_slide") //className += " active_slide";
}
// slide logo 
var dots = document.querySelectorAll(".dot-mini")
var logos = document.querySelectorAll(".slide-mini_item")
var index2=1
  showLogo(index2)
  function logo_plus(n){
      showLogo(index2+=n)
  }
  function logo_current(n){
      showLogo(index2=n)
  }
  function showLogo(n){
      if(n>logos.length){index2=1}
      if(n<1){index2=logos.length}
      for(i=0;i<logos.length;i++){
          logos[i].style.display="none";
      }
      for(i=0;i<dots.length;i++){
          dots[i].className = dots[i].classList.remove("active_logo")//className.replace(" active_logo", "")
      }
      logos[index2-1].style.display = "block";  
      dots[index2-1].classList.add("active_logo")//className += " active_logo";
  }
  
// tắt mở search ở icon tìm kiếm và tắt search ở x
function show(){
    let input_seacrh = document.querySelector(".search")
    input_seacrh.classList.toggle("open")
}
    
// on-off menu khi screen thu nhỏ
var nav = document.querySelector(".navbar")
function hide(){
    nav.classList.toggle("null")
}

// click vào menu-item khi screen thu nhỏ
var nodeMenu_1 = document.querySelectorAll(".navbar_item")
var nodeMenu_2 = document.querySelectorAll(".sub_item")
nodeMenu_1.forEach((item)=>{
    item.addEventListener("click",()=>{
        item.children[1].classList.toggle("open_1")
    })
})
nodeMenu_2.forEach((item2)=>{
    item2.addEventListener("click",()=>{
        item2.children[2].classList.toggle("open_2")
    })
})

// modal
var btn_parent = document.querySelectorAll(".grow")
var btn_close = document.querySelectorAll(".btn_close")
var modal_box = document.querySelectorAll(".modal_box")

btn_parent.forEach((item,index)=>{
    item.firstElementChild.addEventListener("click",()=>{
      modal_box[index].style.display="block"
    })
})

btn_close.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        modal_box[index].style.display="none"
    })
})

// console.log(modal_box)
