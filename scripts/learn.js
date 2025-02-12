// script.js
document.addEventListener('DOMContentLoaded', () => {
    // ... (Existing smooth scrolling code) ...

    // Get course details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const course = urlParams.get('course');

    if (course) {
        // Fetch course data (you'll need to implement this part)
        fetchCourseData(course)
            .then(courseData => {
                displayCourseDetails(courseData);
            })
            .catch(error => {
                console.error("Error fetching course data:", error);
                // Display an error message or redirect the user
            });
    }

    function fetchCourseData(course) {
        // Replace with your actual data fetching logic (e.g., from an API or a local JSON file)
        return new Promise((resolve, reject) => {
            // Placeholder: Simulate fetching data after a delay
            setTimeout(() => {
                const courseData = {
                    python: {
                        title: "Python for Beginners",
                        image: "images/python.jpg",
                        description: "Learn the basics of Python programming...",
                        content: [
                            { title: "Introduction to Python", content: "<p>...</p>" },
                            { title: "Data Types and Variables", content: "<p>...</p>" },
                            // ... more content
                        ]
                    },
                    javascript: {
                        title: "JavaScript Fundamentals",
                        image: "images/javascript.jpg",
                        description: "Master the basics of JavaScript...",
                        content: [
                            { title: "JavaScript Basics", content: "<p>...</p>" },
                            { title: "DOM Manipulation", content: "<p>...</p>" },
                            // ... more content
                        ]
                    },
                    java: {
                        title: "Java Programming",
                        image: "images/java.jpg",
                        description: "Learn object-oriented programming with Java.",
                        content: [
                            { title: "Introduction to Java", content: "<p>...</p>" },
                            { title: "Object-Oriented Programming", content: "<p>...</p>" },
                            // ... more content
                        ]
                    }
                };
                if (courseData[course]) {
                    resolve(courseData[course]);
                } else {
                    reject("Course not found");
                }


            }, 500); // Simulate 500ms delay
        });
    }

    function displayCourseDetails(courseData) {
        const courseDetails = document.getElementById('course-details');
        if (!courseDetails) return; // Make sure the element exists

        courseDetails.innerHTML = `
            <div class="container">
                <h2>${courseData.title}</h2>
                <img src="${courseData.image}" alt="${courseData.title}">
                <p>${courseData.description}</p>
                <div id="course-content">
                </div>
            </div>
        `;

        const courseContentDiv = document.getElementById('course-content');

        courseData.content.forEach(section => {
          const sectionDiv = document.createElement('div');
          sectionDiv.innerHTML = `<h3>${section.title}</h3>${section.content}`;
          courseContentDiv.appendChild(sectionDiv);
        });


    }
});