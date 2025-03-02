// Counting Number Effect
let ValuetoDisplay=document.querySelectorAll(".data-item");
let duration=4000;
ValuetoDisplay.forEach((displayvalue)=>{
               let StartValue=0;
               let Endvalue=parseInt(displayvalue.getAttribute("data-val"));
               let duration=Math.floor(StartValue/Endvalue);
               let counter=setInterval(()=>{
                     StartValue +=1;
                    displayvalue.textContent=StartValue+"+";
                    if(StartValue==Endvalue){
                     clearInterval(counter);
                    }
               },duration);
})

//Testimonial Slider;
// Buttons
let Rightbutton=document.querySelector(".right-arrow");
let Leftbutton=document.querySelector(".left-arrow");

let currentSlide=0;

function Slider(position){
      const slides=document.querySelectorAll(".testimonial-card");
      const totalSlides=slides.length;
      currentSlide+=position;
      if(currentSlide>=totalSlides){
            currentSlide=0;
      }
      else if(currentSlide<0){
            currentSlide=totalSlides-1;
      }
      let slider=document.querySelector(".testimonial-containers");
      slider.style.transform=`translateX(-${currentSlide * 100}%)`;
}
Rightbutton.addEventListener('click',()=>{
      Slider(1);
});
Leftbutton.addEventListener('click',()=>{
      Slider(-1);
});

//faq section answer revealing animation
let ArrowBtn=document.querySelectorAll(".arrowbtn");
const RevealingAnimation=(target)=>{
      let answers=document.querySelectorAll(".question-section");
      let tgtanswer=answers.item(target);
      if(target>=-1){
            setTimeout(()=>{
                  tgtanswer.style.height="3.5vh"; 
                },7000)
      }
      tgtanswer.style.height="15vh";

}
ArrowBtn.forEach((e,index)=>{
    e.addEventListener('click',()=>{
      e.style.transform=`rotate(180deg)`;
      RevealingAnimation(index);
      setTimeout(()=>{
            e.style.transform=`rotate(-360deg)`;
      },7000)
    });
})

// E-mail handling
class Email{
   constructor(name,email,message){
  this.SenderName=name
  this.SenderEmail=email
  this.SenderMessage=message
   }
   getdetails(SenderName,SenderEmail,SenderMessage){
     let a={
      SenderName:this.SenderName,
      SenderEmail:this.SenderEmail,
      SenderMessage:this.SenderMessage,
     }
    let response=confirm(`Is this Information is correct?\n Name:${SenderName},E-mail:${SenderEmail}and Message:${SenderMessage}`);
   }
   setdetails(SenderName,SenderEmail,SenderMessage){ 
   }

}
const submission=()=>{
let name=document.querySelector("#name").value;
let email=document.querySelector("#mail").value;
let message=document.querySelector("#message").value;
let contact=new Email(name,email,message);
message.value=" ";
contact.getdetails(name,email,message);
}
let submitbtn=document.querySelector("#submitbutton");
submitbtn.addEventListener('click',(e)=>{
       e.preventDefault();
      submitbtn.style.color=" #0b5ed7";
      submitbtn.innerHTML='<p class="mb-0">Thanks for Contacting</p>';
      setTimeout(()=>{
      submitbtn.innerHTML='<p class="mb-0">submit again</p>';
      submitbtn.style.color=" #0d6efd";
      },2000);
      submission();
})
