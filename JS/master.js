//first slide share
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display ="block";  
  dots[slideIndex-1].className += " active";
}
// second slide share
var slideIndex_2 = 1;
showSlides_2(slideIndex_2);

function plusSlides_2(n) {
  showSlides_2(slideIndex_2 += n);
}

function currentSlide_2(n) {
  showSlides_2(slideIndex_2 = n);
}

function showSlides_2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_2");
  var dots = document.getElementsByClassName("dot_2");
  if (n > slides.length) {slideIndex_2 = 1}    
  if (n < 1) {slideIndex_2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_2", "");
  }
  slides[slideIndex_2-1].style.display = "block";  
  dots[slideIndex_2-1].className += " active_2";
}

//third slide share

var slideIndex_3 = 1;
showSlides_3(slideIndex_3);

function plusSlides_3(n) {
  showSlides_3(slideIndex_3 += n);
}

function currentSlide_3(n) {
  showSlides_3(slideIndex_3 = n);
}

function showSlides_3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_3");
  var dots = document.getElementsByClassName("dot_3");
  if (n > slides.length) {slideIndex_3 = 1}    
  if (n < 1) {slideIndex_3 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_3", "");
  }
  slides[slideIndex_3-1].style.display = "block";  
  dots[slideIndex_3-1].className += " active_3";
}

function addeventclass(box)
{
  console.log(box);
  if(box === "box1")
  {
      const division=document.getElementsByClassName("slideshow-container_1")[0];
      console.log(division);
      const division_2=document.getElementsByClassName("slideshow-container_2")[0];
      const division_3=document.getElementsByClassName("slideshow-container_3")[0];
      division_2.classList.remove('event');
      division_3.classList.remove('event');
      division.classList.add('event');
  }
  else if(box === "box2")
  {
      const division_2=document.getElementsByClassName("slideshow-container_2")[0];
      const division=document.getElementsByClassName("slideshow-container_1")[0];
      const division_3=document.getElementsByClassName("slideshow-container_3")[0];
      console.log(division_2);
      // division.style.display="none";
      // division_3.style.dispaly="none";
      division.classList.remove('event');
      division_3.classList.remove('event');
      division_2.classList.add("event");
  }
  else if(box === "box3")
  {
      const division_2=document.getElementsByClassName("slideshow-container_2")[0];
      const division=document.getElementsByClassName("slideshow-container_1")[0];
      const division_3=document.getElementsByClassName("slideshow-container_3")[0];
      // division.style.display="none";
      // division_2.style.dispaly="none";
      division.classList.remove('event');
      division_2.classList.remove('event');
      division_3.classList.add("event");
  }
} 

function check()
{
  const count=Number(document.getElementById('c').value);
  console.log(count);
  if(count!=' ')
  {
      switch(count)
       {
        
      case 1:
      document.getElementById('d').value="Wow! You are on the right track.Keep donating blood like this.";
      document.getElementById('c').style.borderBottomColor="black";
      break;

      case 2:
      document.getElementById('d').value="You are hero!! If you will make it to 5 blood donation, you will get exciting prices";
      document.getElementById('c').style.borderBottomColor="black";
      break;

      case 3:
      case 4:
      document.getElementById('d').value="Great job!!";
      document.getElementById('c').style.borderBottomColor="black";
      break;

      case 5:
      document.getElementById('d').value="Highly appreciative!!we will be really happy to have you onboard with our organisation";
      document.getElementById('c').style.borderBottomColor="black";
      break;

      default:
      document.getElementById('d').value="You will be getting a cash price of Rs 3000 for your generosity";
      document.getElementById('c').style.borderBottomColor="black";
       }
  }
  else{
     alert("Please fill the required field in survey form");
     document.getElementById('c').style.borderBottomColor="white";
  }

}

const counters=document.querySelectorAll('.counter');
const speed=200;

//console.log(counters);
//console.log(speed);

counters.forEach(counter=>{
     
      const updatecount=()=>{
      const target=+counter.getAttribute('data-target');
      const count=+counter.innerText;

      const inc=target/speed;

      if(count<target)
      {
        counter.innerText=count+inc;
        setTimeout(updatecount,1);
      }
      else
      {
        counter.innerText=target;
      }
     //console.log(target);
    }

    updatecount();

});








