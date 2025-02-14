const frontEndCourses = [
    { id: 1, name: "HTML & CSS", description: "Learn the fundamentals of web design", url: "https://www.youtube.com/embed/XluZzsulPqs", support: 0.99 },
    { id: 2, name: "JavaScript", description: "Master JavaScript basics", url: "https://www.youtube.com/embed/XluZzsulPqs", support: 1.49 },
    { id: 3, name: "React", description: "React for beginners", url: "https://www.youtube.com/embed/XluZzsulPqs", support: 2.99 },
    { id: 4, name: "Vue.js", description: "Learn Vue.js for frontend development", url: "https://www.youtube.com/embed/XluZzsulPqs", support: 3.99 },
    { id: 5, name: "Tailwind CSS", description: "Build modern UI with Tailwind", url: "https://www.youtube.com/embed/XluZzsulPqs", support: 4.99 },
    { id: 6, name: "Next.js", description: "Learn Next.js for advanced React apps", url: "https://www.youtube.com/embed/XluZzsulPqs", support: 5.99 },
];


const python = document.querySelector("#React")
const javaScript = document.querySelector("#JavaScript")
const htmlCss = document.querySelector("#htmlCss")

python.addEventListener("click", ()=>{
    let pythoncourse = frontEndCourses.filter(course => course.name.includes("React"))
    FetchVideo(pythoncourse)
    let p = document.createElement("p")
    p.innerHTML  = `<h1 class ="label">React Courses </h1>`
    let title = document.querySelector(".title-card")
    title.innerHTML = " "
    title.append(p) 
})


javaScript.addEventListener("click", ()=>{
    let javaS = frontEndCourses.filter(course => course.name.includes("JavaScript"))
    FetchVideo(javaS)
    let p = document.createElement("p")
    p.innerHTML  = `<h1 class ="label"> JavaScript  Courses </h1>`
    let title = document.querySelector(".title-card")
    title.innerHTML = " "
    title.append(p) 
})

htmlCss.addEventListener("click", ()=>{
    let html = frontEndCourses.filter(course => course.name.includes("HTML & CSS"))
    FetchVideo(html)
    let p = document.createElement("p")
    p.innerHTML  = `<h1 class ="label"> HTML & CSS  Courses </h1>`
    let title = document.querySelector(".title-card")
    title.innerHTML = " "
    title.append(p) 
})


FetchVideo(frontEndCourses);

function FetchVideo(data) {
    const container = document.querySelector(".video-container");
    if (!container) {
        console.error("Error: .video-container not found in the DOM!");
        return;
    }

    container.innerHTML = ""; 

    data.forEach(course => {
        let card = document.createElement("section");
        card.classList.add("video-card");
        let name = document.createElement("h1");
        name.textContent = course.name;

        let description = document.createElement("div");
        description.textContent = course.description || "No description available.";

        let video = document.createElement("iframe");
        video.setAttribute("src", course.url);
        video.setAttribute("title", course.name);
        video.setAttribute("loading", "lazy");
        video.setAttribute("width", "560");
        video.setAttribute("height", "315");
        video.setAttribute("frameborder", "0");
        video.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        video.allowFullscreen = true;
        let div = document.createElement("div")
        div.classList.add("like-btn")


        let support = document.createElement("button");

        let heartIcon = document.createElement("i");
        let isLiked = localStorage.getItem("isLiked") === "true";
        heartIcon.classList.add(isLiked ? "fas" : "far", "fa-heart");
        
        support.appendChild(heartIcon);
        
        let likeCount = document.createElement("span");
        likeCount.textContent = ` ${getLikeCount()}`;
        support.appendChild(likeCount);
        
        support.classList.add("support-btn");
        
        support.addEventListener("click", function () {
            let currentCount = getLikeCount();
            let isLikedNow = localStorage.getItem("isLiked") === "true";
        
            if (isLikedNow) {
                localStorage.setItem("likeCount", currentCount - 1);
                localStorage.setItem("isLiked", "false");
                heartIcon.classList.replace("fas", "far");
            } else {
                localStorage.setItem("likeCount", currentCount + 1);
                localStorage.setItem("isLiked", "true");
                heartIcon.classList.replace("far", "fas");
            }
        
            likeCount.textContent = ` ${getLikeCount()}`;
        });
        
        function getLikeCount() {
            return parseInt(localStorage.getItem("likeCount")) || 0;
        }
        


    let comment  = document.createElement("button")
    comment.classList.add("comment")
    let commentIcon = document.createElement("i")
    commentIcon.classList.add("far", "fa-comment")
    comment.appendChild(commentIcon)

    comment.addEventListener("click", () => {
    if (!comment.parentElement.querySelector("form")) {
        let form = document.createElement("form");
        form.method = "POST";
        form.classList.add("comment-form");
        let input = document.createElement("input");
        //submit buttom 
        let submit = document.createElement("button")
        submit.classList.add("submit-btn")
        submit.type ="submit";
        submit.name = "Comment"
        submit.textContent = "Comment";

        input.classList.add("comment-body");
        input.placeholder = "Write a comment...";

        form.appendChild(input);
        form.appendChild(submit);
        comment.parentElement.appendChild(form);
    }
});

    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(video);
    card.appendChild(div)
    div.appendChild(support);
    div.appendChild(comment)


    container.appendChild(card);
    });
}
