const API_KEY = "f4df1bd6da9644cb8605e97ff893d430";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("india"));

function reload() {
  window.location.reload();
}

async function fetchNews(query) {
  const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await res.json();
  bindData(data.articles);
}

function bindData(articles) {
  const cardContainer = document.getElementById("cards-container");
  const newsCartTemplet = document.getElementById("templet-news-card");

  cardContainer.innerHTML = "";

  articles.forEach((article) => {
    if (!article.urlToImage) return;
    const cardClone = newsCartTemplet.content.cloneNode(true);
    fillDataInCard(cardClone, article);
    cardContainer.appendChild(cardClone);
  });
}

function fillDataInCard(cardClone, article) {
  const newsImg = cardClone.querySelector("#news-img");
  const newsTitle = cardClone.querySelector("#news-title");
  const newsSource = cardClone.querySelector("#news-source");
  const newsDesc = cardClone.querySelector("#news-desc");

  newsImg.src = article.urlToImage;
  newsTitle.innerHTML = article.title;
  newsDesc.innerHTML = article.description;

  const date = new Date(article.publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });

  newsSource.innerHTML = `${article.source.name} - ${date}`;

  cardClone.firstElementChild.addEventListener("click", () => {
    window.open(article.url, "_blank");
  });
}

let curSelecteNav = null;
function onNavItemClick(id) {
  fetchNews(id);
  const navItem = document.getElementById(id);
  curSelecteNav?.classList.remove("active");
  curSelecteNav = navItem;
  curSelecteNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");

const searchInput = document.getElementById("search-input");
console.log(searchButton);

searchButton.addEventListener("click", () => {
  const query = searchInput.value;
  if (!query) return;
  fetchNews(query);
  curSelecteNav?.classList.remove("active");
  curSelecteNav = null;
});
