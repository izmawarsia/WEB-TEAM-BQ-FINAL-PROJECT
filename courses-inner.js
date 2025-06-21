const courseData = {
  python: {
    title: "Python Beginner's Course",
    image: "images/c1.jpg",
    price: "$49.99",
    intro: "Learn Python from scratch with our beginner-friendly course designed to build a strong foundation in coding through easy, step-by-step lessons.",
    instructorImg: "images/pro2.webp",
    instructorName: "John Doe",
    instructorJob: "Python Developer At Google",
    overview: `Our Python Beginner Course is designed for absolute newcomers with no prior coding experience. This course starts from the very basics—covering how to set up Python, write your first program, and understand core programming concepts like variables, data types, loops, and functions. With hands-on exercises and real-world examples, students will gain confidence in writing and understanding simple Python code.

By the end of the course, learners will be able to build small projects, debug code, and apply their knowledge to practical tasks such as data handling, basic automation, or simple app development. This course provides a solid foundation for anyone looking to pursue a career in programming, data science, or web development, or simply wanting to add a valuable skill to their toolkit.

In addition to interactive lessons, the course includes quizzes, assignments, and guided projects to reinforce learning. Students will also get access to downloadable resources and mentorship support, making it easier to stay motivated and progress at their own pace.`,
    learn: [
      "The basics of Python syntax, variables, and data types",
      "How to use control structures like if-else statements, loops, and functions",
      "Writing and debugging simple Python programs",
      "Working with lists, dictionaries, and other data structures",
      "Creating small real-world projects to practice your coding skills"
    ],
    type: "video",
    id: "K5KVEU3aaeQ"
  },


   webdev: {
    title: "Web Development Course",
    image: "images/c2.jpg",
    price: "$49.99",
    intro: "Unlock the power of web development and build dynamic, interactive web applications that drive business results",
    instructorImg: "images/pro2.webp",
    instructorName: "Ema Irnik",
    instructorJob: "Web Developer At Google",
    overview: `This course covers the fundamentals of web development, including HTML, CSS, JavaScript, and server-side programming. You'll learn how to build responsive, user-friendly web applications that meet the needs of modern businesses and users.
    Through a combination of lectures, projects, and quizzes, you'll gain hands-on experience with popular web development frameworks and tools, and learn how to deploy and maintain web applications in a production environment.`,
    learn: [
      
     " Build dynamic web applications using HTML, CSS, and JavaScript",
     "Use popular web development frameworks like React and Angular",
     " Design and implement responsive, user-friendly web interfaces",
     " Work with databases and server-side programming languages like Node.js",
     " Deploy and maintain web applications in a production environment"

    ],
    type: "video",
    id: "nTTmACuMoZ0"
  },


   AI: {
    title: "Artificial Intelligence Course",
    image: "images/c3.jpg",
    price: "$49.99",
    intro: " Explore the possibilities of artificial intelligence and build intelligent systems that can think, learn, and act like humans.",
    instructorImg: "images/pro3.webp",
    instructorName: "Jae Malick",
    instructorJob: "AI Expert",
    overview: ` This course covers the fundamentals of artificial intelligence, including machine learning, natural language processing, and computer vision. You'll learn how to build and deploy AI models using popular frameworks and tools. Students will also get access to downloadable resources and mentorship support, making it easier to stay motivated and progress at their own pace.
    Through a combination of lectures, projects, and quizzes, you'll gain hands-on experience with AI algorithms and techniques, and learn how to apply them to real-world problems.`,
    learn: [
      "Build and deploy AI models using popular frameworks and tools",
      "Apply machine learning and deep learning techniques to real-world problems",
      "Use natural language processing and computer vision to build intelligent systems",
      "Evaluate and optimize AI models",
      "Apply AI to real-world applications and industries, including robotics and autonomous system"
    ],
    type: "video",
    id: "JMUxmLyrhSk"
  },



   cybersecurity: {
    title: "Cyber Security Course",
    image: "images/c4.jpeg",
    price: "$49.99",
    intro: "Protect individuals, businesses, and organizations from cyber threats by learning the principles and practices of cybersecurity.",
    instructorImg: "images/pro2.webp",
    instructorName: "Peter Kalvin",
    instructorJob: "Cyber Security Expert",
    overview: `This course covers the fundamentals of cybersecurity, including threat analysis, risk management, and incident response. You'll learn how to identify and mitigate cyber threats, and design secure systems and networks.
    
    Through a combination of lectures, projects, and quizzes, you'll gain hands-on experience with cybersecurity tools and techniques, and learn how to apply them to real-world security challenges.`,
    learn: [
      "Identify and analyze cyber threats and vulnerabilities",
      "Design and implement secure systems and networks",
      "Use threat intelligence and risk management frameworks",
      "Respond to and manage security incidents",
      "Apply security best practices and compliance regulations"
    ],
    type: "video",
    id: "_DVVNOGYtmU"
  },



   graphicdesigning: {
    title: "Graphic Designing Course",
    image: "images/c5.jpg",
    price: "$49.99",
    intro: "Learn Graphic Designing from scratch with our beginner-friendly course designed to build a strong foundation in UI/UX design through easy, step-by-step lessons.",
    instructorImg: "images/pro2.webp",
    instructorName: "John Doe",
    instructorJob: "Graphic Designer At Amazon",
    overview: `This course covers the fundamentals of graphic design, including typography, color theory, and composition. You'll learn how to use industry-standard design software like Adobe Creative Cloud to create professional-grade graphics and visual content.
    Through a combination of lectures, projects, and quizzes, you'll gain hands-on experience with graphic design principles and techniques, and learn how to apply them to real-world design challenges.`,
    learn: [
      "The basics of UI/UX designs",
      "How to use tools like figma to enhance creativity",
      "learning and designing the interface according to desired demand ",
      "Working with team and collaborators help to get good job",
      "Creating small real-world projects to practice your skills"
    ],
    type: "video",
    id: "e_dv7GBHka8"
  },



   machinelearning: {
    title: "Machine Learning Course",
    image: "images/c6.jpeg",
    price: "$49.99",
    intro: "Learn ML from scratch with our beginner-friendly course designed to build a strong foundation in coding through easy, step-by-step lessons.",
    instructorImg: "images/pro2.webp",
    instructorName: "John Doe",
    instructorJob: "ML Expert",
    overview: `This course covers the fundamentals of machine learning, including supervised and unsupervised learning, neural networks, and deep learning. You'll learn how to build and train machine learning models using popular frameworks like TensorFlow and PyTorch.
    Course Overview Continued: Through a combination of lectures, projects, and quizzes, you'll gain hands-on experience with machine learning algorithms and techniques, and learn how to apply them to real-world problems.`,
    learn: [
      "Build and train machine learning models using popular frameworks",
      "How to use control structures like if-else statements, loops, and functions",
      "Writing and debugging simple Python programs",
      "Working with lists, dictionaries, and other data structures",
      "Creating small real-world projects to practice your coding skills"
    ],
    type: "video",
    id: "LvC68w9JS4Y"
  },

  
};

const urlParams = new URLSearchParams(window.location.search);
const key = urlParams.get("course");
const course = courseData[key];

// Check if course exists
if (!course) {
  document.getElementById("courses-inner").innerHTML = "<h2>Course Not Found</h2>";
} else {
  // Fill course image
  document.querySelector(".course-img").src = course.image;

  // Fill title and intro
  document.querySelector(".c-name h2").textContent = course.title;
  document.querySelector(".intro").textContent = course.intro;

  // Fill price
  document.querySelector(".course-head span").textContent = course.price;

  // Fill instructor info
  document.querySelector(".tutor img").src = course.instructorImg;
  document.querySelector(".tutor-info h5").textContent = course.instructorName;
  document.querySelector(".tutor-info p").textContent = course.instructorJob;

  // Fill overview
  document.querySelector("h3 + p").innerHTML = course.overview.replace(/\n/g, "<br><br>");

  // Fill What You'll Learn
  const learnDiv = document.querySelector(".learn");
  learnDiv.innerHTML = "";
  course.learn.forEach(item => {
    learnDiv.innerHTML += `<p><i class="far fa-check-circle"></i> ${item}</p>`;
  });

  // Append Video/Playlist
  const embedURL = course.type === "playlist"
    ? `https://www.youtube.com/embed/videoseries?list=${course.id}`
    : `https://www.youtube.com/embed/${course.id}`;

  const videoSection = document.createElement("div");
  videoSection.innerHTML = `
    <hr><h3>Course Video</h3>
    <iframe width="100%" height="400" src="${embedURL}" frameborder="0" allowfullscreen></iframe>
  `;
  document.querySelector(".overview").appendChild(videoSection);
}
