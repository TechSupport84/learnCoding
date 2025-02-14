const reasonText = `
    LearnCoding offers high-quality coding tutorials, hands-on projects, and expert guidance to help you master programming efficiently. Whether you're a beginner or an experienced developer, our structured courses, interactive learning approach, and supportive community empower you to build real-world applications and advance your tech career with confidence.
`;

const button = document.querySelector("#btn");
const reasonContainer = document.querySelector(".coding");

let isVisible = false;
let div;

button.addEventListener("click", () => {
    if (isVisible) {
    } else {
        reasonContainer.innerHTML = "";
        div = document.createElement("div");
        div.classList.add("reason-box");

        const span = document.createElement("span");
        span.innerText = reasonText;

        div.appendChild(span);
        reasonContainer.appendChild(div);
    }

    isVisible = !isVisible;
});

const projectText = `
    LearnCoding is an interactive platform designed to help aspiring developers master coding through structured tutorials, hands-on projects, and expert guidance. It provides a supportive learning community and real-world coding challenges, empowering users to build practical applications, enhance problem-solving skills, and accelerate their careers in the tech industry.
`;

const projectbtn = document.querySelector("#btn-project");
const project = document.querySelector(".project");

let isVisible1 = false;
let div1;

projectbtn.addEventListener("click", () => {
    if (isVisible) {
    } else {
        project.innerHTML = "";
        div1 = document.createElement("div");
        div1.classList.add("reason-box");

        const span = document.createElement("span");
        span.innerText = reasonText;

        div1.appendChild(span);
        project.appendChild(div1);
    }

    isVisible = !isVisible;
});


const expertText = `
    Learn from experienced developers in the industry. Our expert instructors provide real-world insights, best coding practices, and mentorship to help you understand complex programming concepts and apply them effectively in projects.
`;

const  expertbtn = document.querySelector("#btn-expert");
const  expert = document.querySelector(".expert");

let isVisible2 = false;
let div2;

 expertbtn.addEventListener("click", () => {
    if (isVisible) {
    } else {
         expert.innerHTML = "";
        div2 = document.createElement("div");
        div2.classList.add("reason-box");

        const span = document.createElement("span");
        span.innerText = reasonText;

        div2.appendChild(span);
         expert.appendChild(div2);
    }

    isVisible = !isVisible;
});
