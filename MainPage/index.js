var state=false;
var home=document.getElementsByClassName("home");
var dot=document.getElementsByClassName("dot2");

var About=document.getElementsByClassName("About");
var dot1=document.getElementsByClassName("dot3");

var forum= document.getElementsByClassName("forum");
var dot2= document.getElementsByClassName("dot4");

var videos= document.getElementsByClassName("videos");
var dot3= document.getElementsByClassName("dot5");
home.addEventListener("click", ()=>{
    state =!state;
    if(state)
    {
        home.classList.add("active");
        dot.classList.add("dot");
        return;
    }
    home.classList.remove("active");
})
About.addEventListener("click", () => {
  state = !state;
  if (state) {
    About.classList.add("active");
    dot1.classList.add("dot");
return;  
}

    About.classList.remove("active");
});
forum.addEventListener("click", () => {
  state = !state;
  if (state) {
    forum.classList.add("active");
    dot2.classList.add("dot");
return;  
}

    forum.classList.remove("active");
});
videos.addEventListener("click", () => {
  state = !state;
  if (state) {
    videos.classList.add("active");
    dot3.classList.add("dot");
return;  
}

    videos.classList.remove("active");
});