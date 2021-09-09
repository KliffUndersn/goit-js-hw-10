import galleryRender from './gallery';
import { query } from './searchForm';

const loadMoreBtn = `<button id="load-more" type="button">Load more</button>`;

export let page = 1;

export const setDefaultPage = () => (page = 1);

const handleLoadMore = () => {
  page += 1;
  galleryRender({ query, page });
};

const getLoadMoreBtn = parentNode => {
  parentNode.insertAdjacentHTML('afterend', loadMoreBtn);
  const loadMore = document.getElementById('load-more');
  loadMore.addEventListener('click', handleLoadMore);
};

export const removeBtn = parentNode => {
  const btn = document.getElementById('load-more');
  btn && parentNode.removeChild(btn);
};

export default getLoadMoreBtn;
