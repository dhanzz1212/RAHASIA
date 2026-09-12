// ======================================
// OPENING SCREEN
// ======================================

const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

function startWebsite(){

    opening.style.opacity="0";

    setTimeout(()=>{

        opening.style.display="none";

        mainContent.style.display="block";

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

        // Mulai Auto Scroll
        startAutoScroll();

    },800);

}



// ======================================
// MUSIC
// ======================================

const music = document.getElementById("birthdayMusic");

function playMusic(btn){

    if(music.paused){

        music.play();

        btn.innerHTML="⏸ Pause Musik";

        confetti();

        hearts();

    }

    else{

        music.pause();

        btn.innerHTML="▶ Putar Musik";

    }

}



// ======================================
// REVEAL
// ======================================

const reveal=document.querySelectorAll(".reveal");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

reveal.forEach(el=>observer.observe(el));



// ======================================
// STARS
// ======================================

for(let i=0;i<120;i++){

const star=document.createElement("span");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(star);

}



// ======================================
// PARTICLES
// ======================================

for(let i=0;i<50;i++){

const p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*100+"vw";

p.style.top=Math.random()*100+"vh";

p.style.animationDuration=(8+Math.random()*8)+"s";

document.body.appendChild(p);

}



// ======================================
// CONFETTI
// ======================================

function confetti(){

for(let i=0;i<150;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=`hsl(${Math.random()*360},100%,70%)`;

c.style.animationDuration=(3+Math.random()*2)+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},5000);

}

}



// ======================================
// HEART EFFECT
// ======================================

function hearts(){

let total=0;

const interval=setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="✨";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-50px";

heart.style.fontSize=(20+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

total++;

if(total>=20){

clearInterval(interval);

}

},300);

}



// ======================================
// IMAGE ZOOM
// ======================================

document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";

overlay.style.inset="0";

overlay.style.background="rgba(0,0,0,.9)";

overlay.style.display="flex";

overlay.style.justifyContent="center";

overlay.style.alignItems="center";

overlay.style.zIndex="99999";

overlay.innerHTML=`
<img
src="${img.src}"
style="
max-width:90%;
max-height:90%;
border-radius:20px;
box-shadow:0 20px 60px rgba(0,0,0,.5);
">
`;

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

}

});



// ======================================
// TITLE PARALLAX
// ======================================

const title=document.querySelector(".fixed-text");

window.addEventListener("scroll",()=>{

title.style.transform=`translateY(${window.scrollY*0.15}px)`;

});



// ======================================
// WELCOME CONFETTI
// ======================================

window.addEventListener("load",()=>{

setTimeout(()=>{

confetti();

},800);

});

/* ===========================
   AUTO SCROLL
=========================== */

let autoScrollInterval;

function startAutoScroll(){

    clearInterval(autoScrollInterval);

    autoScrollInterval = setInterval(()=>{

        window.scrollBy(0,2);

        // berhenti saat sampai bawah
        if(window.innerHeight + window.scrollY >= document.body.scrollHeight){

            clearInterval(autoScrollInterval);

        }

    },10);

}

// Stop jika user scroll sendiri
window.addEventListener("wheel",()=>{

    clearInterval(autoScrollInterval);

});

window.addEventListener("touchstart",()=>{

    clearInterval(autoScrollInterval);

});

const PASSWORD = "HBD Dhanny"; // Ganti dengan password yang kamu inginkan

function checkPassword(){

    const input = document.getElementById("passwordInput").value;

    if(input === PASSWORD){

        document.getElementById("passwordScreen").style.display = "none";

    }else{

        document.getElementById("errorText").innerHTML =
        "Password salah!";

    }

}