import gup from "../utils/url-helper";
const axios = require("axios");
const heroesDetail = document.querySelector(".heroes-detail");
import 'regenerator-runtime/runtime'

const query = gup("q", `${window.location.href}`);

const render = (element) => {
  return (heroesDetail.innerHTML = `
  <div class="row py-lg-5">
    <div class="col-lg-6 col-md-8 text-center mx-auto">
      <h1 class="fw-light">Detail Anime</h1>
    </div>
  </div>
  <div class="col-xxl-16 px-2 py-2 card rounded">
    <div class="row flex-lg-row-reverse px-4 align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="${element.images.jpg.large_image_url}" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="500" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h3 class="display-6 mb-3">${element.title}</h3>
        <h4 class="display-8 mb-3">${element.title_japanese}</h4>
        <p class="lead">${element.synopsis}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <div class="d-flex align-items-center gap-3">
            <span class=" badge rounded-pill bg-primary text-light p-2">${element.score}</span>
            <span class=" badge rounded-pill bg-primary text-light p-2 ml-2">${element.type}</span>
            <span class=" badge rounded-pill bg-primary text-light p-2 ml-2">${element.episodes}</span>
            <span class=" badge rounded-pill bg-primary text-light p-2 ml-2">${element.status}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
      `);
};

const getData = async () => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${query}`);
    const data = await response.data.data;
    return render(data);
  } catch (error) {
    console.error(error);
  }
};

getData();
