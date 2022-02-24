const axios = require("axios");
const filmList = document.querySelector(".row-film");
class CardElement extends HTMLElement {
  constructor() {
    super();
    this.getData();
  }

  connectedCallback() {
    this.render();
  }

  getData() {
    axios
      .get("https://api.jikan.moe/v4/top/anime")
      .then((response) => {
        const data = response.data.data;
        data.map((element) => {
          const card = document.createElement("div");
          card.classList.add("col");
          card.innerHTML = this.render(element);
          filmList.appendChild(card);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(element) {
    return `
      <div class="card shadow-sm d-flex">
      <div class="img-wrapper">
      <img src="${
        element.images.jpg.image_url
      }" class="img-thumbnail rounded mx-auto d-block" alt="...">
      </div>
        <div class="card-body">
          <title>${element.title}</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            ${element.title}
          </text>
        </div>

        <div class="card-body">
          <class="card-text">
            ${element.synopsis.substring(0, 100)}...
          </p>
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <a href="${`detail-film.html?q=${element.mal_id}`}" class="btn btn-sm btn-outline-secondary"
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                View
              </a>
            </div>
            <span class="badge rounded-pill bg-primary">${element.rank}</span>
            <small class="text-muted">${element.duration.substring(
              0,
              2
            )} min</small>
          </div>
        </div>
      </div>
      
      `;
  }
}

customElements.define("card-element", CardElement);
