// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links (optional)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fetch and display featured courses
    fetchCourses()
        .then(courses => {
            displayCourses(courses);
        })
        .catch(error => {
            console.error("Error fetching courses:", error);
            displayErrorMessage("Error loading courses. Please try again later."); // Display error message
        });

    // Fetch and display course details (if on course-details.html)
    const urlParams = new URLSearchParams(window.location.search);
    const course = urlParams.get('course');

    if (course) {
        fetchCourseDetails(course)
            .then(courseData => {
                displayCourseDetails(courseData);
            })
            .catch(error => {
                console.error("Error fetching course details:", error);
                displayErrorMessage("Error loading course details. Please try again later."); // Display error
            });
    }


    function fetchCourses() {
        return fetch('../data/courses.json') // Path to your courses.json
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            });
    }

    function displayCourses(courses) {
        const courseGrid = document.querySelector('.course-grid');
        if (!courseGrid) return; // Exit if courseGrid doesn't exist

        courses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.classList.add('course');
            courseDiv.innerHTML = `
                <img src="${course.image}" alt="${course.title}">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <a href="course-details.html?course=${course.id}" class="course-button">Learn More</a>
            `;
            courseGrid.appendChild(courseDiv);
        });
    }


    function fetchCourseDetails(courseId) {
        return fetch('../data/courses.json') // Fetch the same JSON file
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(courses => {
                const course = courses.find(c => c.id === courseId); // Find the specific course
                if (!course) {
                    throw new Error("Course not found");
                }
                return course;
            });
    }


    function displayCourseDetails(courseData) {
        const courseDetails = document.getElementById('course-details');
        if (!courseDetails) return;

        courseDetails.innerHTML = `
            <div class="container">
                <h2>${courseData.title}</h2>
                <img src="${courseData.image}" alt="${courseData.title}">
                <p>${courseData.description}</p>
                <div id="course-content"></div>
            </div>
        `;

        const courseContentDiv = document.getElementById('course-content');

        courseData.content.forEach(section => {
            const sectionDiv = document.createElement('div');

            if (section.type === "youtube") { // Check for YouTube type
                sectionDiv.innerHTML = `<h3>${section.title}</h3>`;
                const videoDiv = document.createElement('div');
                videoDiv.classList.add('youtube-video');
                videoDiv.innerHTML = `
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/${section.videoId}" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                `;
                sectionDiv.appendChild(videoDiv);

            } else {
                sectionDiv.innerHTML = `<h3>${section.title}</h3>${section.content}`;
            }

            courseContentDiv.appendChild(sectionDiv);

        });
    }

    function displayErrorMessage(message) {
        const errorMessageDiv = document.createElement('div');
        errorMessageDiv.classList.add('error-message'); // Add a class for styling
        errorMessageDiv.textContent = message;

        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.insertBefore(errorMessageDiv, mainElement.firstChild); // Insert at the top of main
        } else {
            document.body.insertBefore(errorMessageDiv, document.body.firstChild);
        }

    }

});