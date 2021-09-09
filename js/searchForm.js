import renderGallery, { refs, clearGallery } from './gallery';
import { removeBtn, setDefaultPage } from './loadMoreBtn';

const formMarkup = `<form>
<input type="text" />
<button type="submit">Load</button>
</form>`;

export let query = '';

const handleSubmit = e => {
  e.preventDefault();
  const form = e.currentTarget;
  query = form.querySelector('input').value;
  removeBtn(refs.body);
  clearGallery();
  setDefaultPage();
  renderGallery({ query, page: 1 });
};

const getForm = parentNode => {
  parentNode.insertAdjacentHTML('afterbegin', formMarkup);
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
};

export default getForm;
