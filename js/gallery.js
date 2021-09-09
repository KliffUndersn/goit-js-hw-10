import { getGalleryItemMarkup } from './tmp';
// import getLoadMoreBtn, { page } from './loadMoreBtn';
import renderPaginator, { removePaginator } from './paginator';

export const refs = {
  body: document.body,
  gallery: document.createElement('ul'),
};

export let last = 0;

const getMarkupGalleryItems = images =>
  images.reduce((acc, el) => acc + getGalleryItemMarkup(el), '');

const createGallery = images => {
  const markup = getMarkupGalleryItems(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
};
// refs.gallery.insertAdjacentHTML('beforeend', markup);

refs.body.insertAdjacentElement('afterbegin', refs.gallery);
refs.gallery.classList.add('gallery');

const fetchImages = ({ query, page }) => {
  const search = new URLSearchParams({
    key: '13965574-3ae6669f35304ffc6cddc1b72',
    q: query,
    page,
    per_page: 15,
  });
  return fetch(`https://pixabay.com/api/?${search}`)
    .then(res => res.json())
    .then(data => data);
};

const renderGallery = ({ query, page }) =>
  fetchImages({ query, page }).then(data => {
    const { hits, totalHits } = data;
    createGallery(hits);
    last = Math.ceil(+totalHits / 15);
    if (page === 1) {
      removePaginator(refs.body);
      renderPaginator({ parentNode: refs.gallery, last });
    }
  });

export const clearGallery = () => {
  if (refs.gallery.children.length) {
    refs.gallery.innerHTML = '';
  }
};

export default renderGallery;
