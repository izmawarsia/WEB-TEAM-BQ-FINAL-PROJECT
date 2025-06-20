// Get elements
const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('menu-close');
const navList = document.querySelector('nav .navigation ul');

// Open menu
menuBtn.addEventListener('click', () => {
  navList.classList.add('active');      // show nav links
  menuClose.style.display = 'block';    // show cross icon
  menuBtn.style.display = 'none';       // hide menu button
});

// Close menu
menuClose.addEventListener('click', () => {
  navList.classList.remove('active');   // hide nav links
  menuClose.style.display = 'none';     // hide cross icon
  menuBtn.style.display = 'block';      // show menu button
});


const blogContainer = document.getElementById("blog-container");

// Function to fetch data
async function fetchArticles() {
  try {
    const response = await fetch("https://dev.to/api/articles?tag=education");
    if (!response.ok) {
      throw new Error("Failed to fetch articles.");
    }

    const articles = await response.json();

   
    displayBlogs(articles);

  } catch (error) {
    console.error("Error fetching articles:", error);
    blogContainer.innerHTML = `<p style="color:red;">Unable to load articles. Please try again later.</p>`;
  }
}

// Function to display articles
function displayBlogs(articles) {
  blogContainer.innerHTML = ""; // Clear container first

  articles.slice(0, 8).forEach((article) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    // Image
    const img = document.createElement("img");
    img.src = article.cover_image
      ? article.cover_image
      : "https://placehold.co/600x400?text=No+Image";
    img.alt = article.title;
    img.style.width = "100%";
    img.style.borderRadius = "8px";
    img.style.height = "180px";
    img.style.objectFit = "cover";

    // Title
    const title = document.createElement("h2");
    title.textContent = article.title;

    // Description
    const description = document.createElement("p");
    description.textContent = article.description
      ? article.description
      : "No description available.";

    // Read more link
    const link = document.createElement("a");
    link.href = article.url;
    link.textContent = "Read More";
    link.target = "_blank";

    // Append all to card
    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(description);
    blogCard.appendChild(link);

    // Append card to container
    blogContainer.appendChild(blogCard);
  });
}

// Call the function
fetchArticles();
