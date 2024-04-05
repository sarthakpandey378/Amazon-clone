const btn1 = document.querySelector(".left-btn i ");
const btn2 = document.querySelector(".right-btn i");
const imgs = document.querySelectorAll(".section2  ul img");
let n=0;
function scrollbg(){
  for (let i = 0; i < imgs.length; i++) {
         imgs[i].style.display='none';
  }
  imgs[n].style.display='block';
  }

scrollbg()
btn1.addEventListener("click",()=>{
      if(n>0){
        n--
      }
      else{
        n=imgs.length-1;
      }
      scrollbg()
})
btn2.addEventListener("click",()=>{
      if(n<imgs.length-1){
        n++;
      }
      else{
        n=0;
      }
      scrollbg()
})