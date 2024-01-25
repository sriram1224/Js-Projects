const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("searchInput"); // Fix: Use correct ID
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("searchmore"); // Fix: Use correct ID

let inputData = "";
let page = 1;
showMoreButtonEl.style.display = "none";

async function searchImages() {
  inputData = searchInputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchResultsEl.innerHTML = "";
  }

  const results = data.results;

  results.forEach(result => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    const description = document.createElement("p");
    description.textContent = result.description || "No description available"; // Adding a fallback if description is not provided

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
   

    searchResultsEl.appendChild(imageWrapper);
  });

  page++;
  if (page > 1) {
    showMoreButtonEl.style.display = "block";
  }

}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMoreButtonEl.addEventListener("click", () => {
  searchImages();
});
