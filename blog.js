
function subscribe() {
  const emailInput = document.getElementById("newsletter-email");
  const message = document.getElementById("newsletter-msg");
  const email = emailInput.value.trim();

  if (!email) {
    message.textContent = "Please enter your email.";
    message.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Invalid email address.";
    message.style.color = "red";
    return;
  }

  // Success
  message.textContent = "You subscribed successfully!";
  message.style.color = "green";
  emailInput.value = "";

  setTimeout(() => {
    message.textContent = "";
  }, 3000);
}


const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('menu-close');
const navigationUl = document.querySelector('nav .navigation ul');

menuBtn.addEventListener('click', () => {
  navigationUl.classList.add('active');
  menuClose.style.display = 'block';
});

menuClose.addEventListener('click', () => {
  navigationUl.classList.remove('active');
  menuClose.style.display = 'none';
});






const blogContainer = document.getElementById("blog-container");

async function fetchNewsFromBackend() {
  try {
    const response = await fetch("http://localhost:5000/api/news"); // NEW: fetch from your backend
    const data = await response.json();
    displayBlogs(data.articles);
  } catch (error) {
    console.error("Error loading blogs:", error);
    blogContainer.innerHTML = "<p>Failed to load blogs.</p>";
  }
}

function displayBlogs(articles) {
  blogContainer.innerHTML = "";
  articles.forEach(article => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    const img = document.createElement("img");
    img.src = article.urlToImage || "fallback.jpg";
    img.alt = article.title;

    const title = document.createElement("h2");
    title.textContent = article.title;

    const desc = document.createElement("p");
    desc.textContent = article.description || "No description available.";

    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(desc);

    blogContainer.appendChild(blogCard);
  });
}

// Call the fetch function
fetchNewsFromBackend();
