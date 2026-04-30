// HOME CLICK (logo click reload)
function goHome(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// SMOOTH NAVIGATION
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e){
    let target = this.getAttribute("href");

    if(target.startsWith("#")){
      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// FAQ TOGGLE
function toggleFaq(el){
  let p = el.querySelector("p");

  // close others (pro feel)
  document.querySelectorAll(".faq-item p").forEach(item=>{
    if(item !== p){
      item.style.display = "none";
    }
  });

  // toggle current
  p.style.display = (p.style.display === "block") ? "none" : "block";
}

// BUTTON ACTIONS
document.querySelector(".primary").addEventListener("click", ()=>{
  document.querySelector("#owners").scrollIntoView({
    behavior:"smooth"
  });
});

document.querySelector(".secondary").addEventListener("click", ()=>{
  alert("Join Discord feature coming soon 🚀");
});

// DISCORD BUTTON NAV
document.querySelector(".discord").addEventListener("click",(e)=>{
  e.preventDefault();
  alert("Add your Discord link here 🔗");
});

// SCROLL ANIMATION (fade-in effect)
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("section").forEach(sec=>{
  sec.style.opacity = "0";
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "0.6s";
  observer.observe(sec);
});