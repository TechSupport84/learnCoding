const backendCourses = [
    { id: 1, name: "Python", description: "Master Python for backend development", url: "https://www.youtube.com/embed/XluZzsulPqs", support: 0.99 },
    { id: 2, name: "Node.js", description: "Learn Node.js for scalable web applications", url: "https://www.youtube.com/embed/XluZzsulPqs", support: 1.49 },
    { id: 3, name: "MySQL", description: "Database management with MySQL", url: "https://www.youtube.com/embed/XluZzsulPqs", support: 2.99 },
    { id: 4, name: "SQL", description: "Deep dive into SQL queries & optimization", url: "https://www.youtube.com/embed/XluZzsulPqs", support: 3.99 },
    { id: 5, name: "MongoDB", description: "NoSQL database management with MongoDB", url: "https://www.youtube.com/embed/XluZzsulPqs", support: 4.99 },
    { id: 6, name: "C#", description: "Backend programming with C#", url: "https://www.youtube.com/embed/XluZzsulPqs", support: 5.99 },
];

const pythonId = document.querySelector("#Python");
const mongo = document.querySelector("#Mongodb");

function handleCourseSelection(courseName, headingText) {
    let filteredCourses = backendCourses.filter(course => course.name.includes(courseName));
    backEndVideo(filteredCourses);

    let title = document.querySelector(".title-card");
    title.innerHTML = `<h1 class="label">${headingText}</h1>`;
}

pythonId.addEventListener("click", () => handleCourseSelection("Python", "Python Courses"));
mongo.addEventListener("click", () => handleCourseSelection("MongoDB", "MongoDB Courses"));

backEndVideo(backendCourses);

function backEndVideo(data) {
    const container = document.querySelector(".video-backend");
    if (!container) {
        console.error("Error: .video-backend not found in the DOM!");
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

        let div = document.createElement("div");
        div.classList.add("like-btn");

        let support = document.createElement("button");
        support.classList.add("support-btn");

        let heartIcon = document.createElement("i");
        let isLiked = localStorage.getItem(`isLiked-${course.id}`) === "true";
        heartIcon.classList.add(isLiked ? "fas" : "far", "fa-heart");
        
        support.appendChild(heartIcon);

        let likeCount = document.createElement("span");
        likeCount.textContent = ` ${getLikeCount(course.id)}`;
        support.appendChild(likeCount);

        support.addEventListener("click", function () {
            let currentCount = getLikeCount(course.id);
            let isLikedNow = localStorage.getItem(`isLiked-${course.id}`) === "true";

            if (isLikedNow) {
                localStorage.setItem(`likeCount-${course.id}`, currentCount - 1);
                localStorage.setItem(`isLiked-${course.id}`, "false");
                heartIcon.classList.replace("fas", "far");
            } else {
                localStorage.setItem(`likeCount-${course.id}`, currentCount + 1);
                localStorage.setItem(`isLiked-${course.id}`, "true");
                heartIcon.classList.replace("far", "fas");
            }

            likeCount.textContent = ` ${getLikeCount(course.id)}`;
        });

        function getLikeCount(courseId) {
            return parseInt(localStorage.getItem(`likeCount-${courseId}`)) || 0;
        }

        let comment = document.createElement("button");
        comment.classList.add("comment");
        let commentIcon = document.createElement("i");
        commentIcon.classList.add("far", "fa-comment");
        comment.appendChild(commentIcon);

        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(video);
        card.appendChild(div);
        div.appendChild(support);
        div.appendChild(comment);

        container.appendChild(card);
    });
}
