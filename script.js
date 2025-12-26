const TestimonialData = [
    {
        id: "01",
        tag_text: "Vercel",
        client_msg: "This Testimonial Page Challange is created by Mughal.Dev",
        client_name: "Mughal.Dev",
        client_designation: "Credit : Mughal.Dev"
    },
    {
        id: "02",
        tag_text: "Google",
        client_msg: "Comment Source Code For Source Code of this Testimonial Page.",
        client_name: "Mughal.Dev",
        client_designation: "Credit : Mughal.Dev"
    },
    {
        id: "03",
        tag_text: "Code",
        client_msg: "Make Sure to Like and Share this Testimonial Page.",
        client_name: "Mughal.Dev",
        client_designation: "Credit : Mughal.Dev"
    }
]
const testimonialContainer = document.querySelector(".testimonial-container");
const loader = document.querySelector(".loader");
const loadingBar = document.querySelector(".loading-bar");
const clientLoader = document.querySelector(".client-loader");
const clientLoadingBar = document.querySelector(".client-loading-bar");
const numbers = document.querySelector(".numbers");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const container = document.querySelector(".content");
const number = document.querySelector(".numbers");
let index = 0;

function mainrun() {
    rendercontent(index)
    leftBtn.addEventListener("click", () => {
        index = (index - 1 + TestimonialData.length) % TestimonialData.length;
        rendercontent(index);
        animatein()
    });

    rightBtn.addEventListener("click", () => {
        index = (index + 1) % TestimonialData.length;
        rendercontent(index);
        animatein()

    });


    function rendercontent(indexofcontet) {
        container.innerHTML = `   <div class="tag">
                        <span class="shape"></span>
                        <span class="text">${TestimonialData[indexofcontet].tag_text}</span>
                    </div>
                    <div class="client-msg">${TestimonialData[indexofcontet].client_msg}
                    </div>
                    <div class="client-info">
                        <div class="client-loader">
                            <div class="client-loading-bar"></div>
                        </div>
                        <div class="client">
                            <h2 class="client-name">${TestimonialData[indexofcontet].client_name}</h2>
                            <p class="client-designation">${TestimonialData[indexofcontet].client_designation}</p>
                        </div>
                    </div>`
        number.innerHTML = TestimonialData[indexofcontet].id
    }


}
function animatein() {
    const loadingTestimonial = document.querySelector(".loading-bar");
    const share = Math.floor(100 / TestimonialData.length);
    const currentId = parseInt(document.querySelector(".numbers").textContent);
    // console.log(share, currentId);
    gsap.to(loadingTestimonial, {
        height: `${currentId * share}%`,
        duration: 1,
        ease: "power3.out",
    });
    gsap.from(".numbers", {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    })
    gsap.from(".tag", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2
    })
    const clientMsg = document.querySelector('.client-msg')
    splitTextHlf(".client-msg")
    gsap.from(".char", {
        opacity: 0,
        duration: 0.2,
        ease: "power3.out",
        stagger: 0.02
    })
    gsap.from(".client-name", {
        x: -80,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.02
    })
    gsap.from(".client-designation", {
        x: 200,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.02
    })
    gsap.from(".client-loading-bar", {
        width: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2
    })


}
function splitTextHlf(element) {
    let h1 = document.querySelector(element)
    let textContent = h1.textContent
    let splittedtext = textContent.split("")
    // let halfText = Math.floor(textContent.length / 2)
    let NewText = ""
    splittedtext.forEach((char) => {
        NewText += `<span class="char">${char}</span>`
    })
    h1.innerHTML = NewText
}
mainrun()
animatein()

// Credit : Mughal.Dev
// Extra Bonus Functionality : Magnetic Effect
testimonialContainer.addEventListener("mousemove", (e) => {
    xposition = e.clientX;
    yposition = e.clientY;
    const { left, top, width, height } = testimonialContainer.getBoundingClientRect();
    const centerX = (xposition - left) / width - 0.5;
    const centerY = (yposition - top) / height - 0.5
    const finalX = centerX * 10;
    const finalY = centerY * 10;
    testimonialContainer.style.transform = `translate(${finalX}px, ${finalY}px)`
})
testimonialContainer.addEventListener("mouseleave", () => {
    testimonialContainer.style.transform = `translate(0px, 0px)`
})