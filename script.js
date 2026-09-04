/* =================================
   CUSTOM EMOJI CURSOR
================================= */

const cursor =
    document.querySelector(".custom-cursor");


document.addEventListener(
    "mousemove",
    function(event) {

        cursor.style.left =
            event.clientX + "px";

        cursor.style.top =
            event.clientY + "px";

    }
);


const hoverElements =
    document.querySelectorAll(
        "a, button, .card, .project-card"
    );


hoverElements.forEach(function(element) {

    element.addEventListener(
        "mouseenter",
        function() {

            document.body.classList.add(
                "hover-cursor"
            );

        }
    );


    element.addEventListener(
        "mouseleave",
        function() {

            document.body.classList.remove(
                "hover-cursor"
            );

        }
    );

});



/* =================================
   TYPING EFFECT
================================= */

const texts = [

    "Siswa TJKT 💻",

    "Network Enthusiast 🌐",

    "Web Developer 🚀",

    "Tech Explorer ⚡",

    "Future IT Professional 🔥"

];


let textIndex = 0;

let characterIndex = 0;

let deleting = false;


function typingEffect() {

    const typing =
        document.getElementById("typing");


    const currentText =
        texts[textIndex];


    if (!deleting) {

        typing.textContent =
            currentText.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentText.length
        ) {

            deleting = true;

            setTimeout(
                typingEffect,
                1500
            );

            return;

        }

    }

    else {

        typing.textContent =
            currentText.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            textIndex++;

            if (
                textIndex >= texts.length
            ) {

                textIndex = 0;

            }

        }

    }


    setTimeout(
        typingEffect,
        deleting ? 50 : 90
    );

}


typingEffect();



/* =================================
   SKILL ANIMATION
================================= */

const progressBars =
    document.querySelectorAll(
        ".progress"
    );


const skillObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        const progress =
                            entry.target;

                        const value =
                            progress.dataset.progress;

                        progress.style.width =
                            value + "%";

                    }

                }
            );

        },

        {
            threshold: .4
        }

    );


progressBars.forEach(
    function(progress) {

        skillObserver.observe(
            progress
        );

    }
);



/* =================================
   DARK / LIGHT MODE
================================= */

const themeButton =
    document.getElementById(
        "themeButton"
    );


let lightMode = false;


themeButton.addEventListener(
    "click",
    function() {

        lightMode =
            !lightMode;


        if (lightMode) {

            document.documentElement
                .style
                .setProperty(
                    "--background",
                    "#eef2ff"
                );


            document.documentElement
                .style
                .setProperty(
                    "--text",
                    "#101426"
                );


            document.documentElement
                .style
                .setProperty(
                    "--muted",
                    "#5e667c"
                );


            document.documentElement
                .style
                .setProperty(
                    "--card",
                    "rgba(255,255,255,.7)"
                );


            themeButton.textContent =
                "☀️";

        }

        else {

            document.documentElement
                .style
                .setProperty(
                    "--background",
                    "#070914"
                );


            document.documentElement
                .style
                .setProperty(
                    "--text",
                    "#ffffff"
                );


            document.documentElement
                .style
                .setProperty(
                    "--muted",
                    "#a8b0c7"
                );


            document.documentElement
                .style
                .setProperty(
                    "--card",
                    "rgba(255,255,255,.07)"
                );


            themeButton.textContent =
                "🌙";

        }

    }
);



/* =================================
   PARTICLE BACKGROUND
================================= */

const canvas =
    document.getElementById(
        "particles"
    );


const ctx =
    canvas.getContext("2d");


let particles = [];


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


window.addEventListener(
    "resize",
    resizeCanvas
);


resizeCanvas();



for (
    let i = 0;
    i < 80;
    i++
) {

    particles.push({

        x:
            Math.random() *
            canvas.width,

        y:
            Math.random() *
            canvas.height,

        size:
            Math.random() * 2 + 1,

        speedX:
            (Math.random() - .5)
            * .5,

        speedY:
            (Math.random() - .5)
            * .5

    });

}



function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(
        function(particle) {

            particle.x +=
                particle.speedX;

            particle.y +=
                particle.speedY;


            if (
                particle.x < 0 ||
                particle.x > canvas.width
            ) {

                particle.speedX *= -1;

            }


            if (
                particle.y < 0 ||
                particle.y > canvas.height
            ) {

                particle.speedY *= -1;

            }


            ctx.beginPath();


            ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                "rgba(255,255,255,.6)";


            ctx.fill();

        }
    );


    requestAnimationFrame(
        animateParticles
    );

}


animateParticles();
