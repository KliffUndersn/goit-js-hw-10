import { getPaginationBtns } from './tmp';
import renderGallery, { clearGallery, last } from './gallery';
import { query } from './searchForm';

let count = 1;

const refs = {};

const setRefs = () => {
  const paginator = document.getElementById('paginator');
  const btns = paginator.querySelectorAll('[data-info="num"]');
  refs.btnsNumEls = btns;
};
const increment = () => count++;
const decrement = () => count > 1 && count--;
const setCount = num => (count = num);

const handleClick = e => {
  const { nodeName, dataset, textContent } = e.target;
  if (nodeName !== 'BUTTON') return;
  switch (dataset.action) {
    case 'prev':
      decrement();
      break;
    case 'next':
      increment();
      break;
    default:
      setCount(+textContent);
  }
  clearGallery();
  renderGallery({ query, page: count });
  renderBtnsContent();
};

const getBtnsNum = () => {
  const arr = Array(3)
    .fill('')
    .map((el, idx) => {
      if (count <= 3) {
        return idx + 2;
      } else if (count > last - 3) {
        return idx + last - 3;
      } else {
        return idx + count - 1;
      }
    });
  return arr;
};

const renderPaginator = ({ parentNode, last }) => {
  const btnsNum = getBtnsNum();
  const markup = getPaginationBtns({ last, btnsNum });
  parentNode.insertAdjacentHTML('afterend', markup);
  setRefs();
  const paginator = document.getElementById('paginator');
  paginator.addEventListener('click', handleClick);
};

const renderBtnsContent = () => {
  const nums = getBtnsNum();
  refs.btnsNumEls.forEach((el, idx) => (el.textContent = nums[idx]));
};

export const removePaginator = parentNode => {
  const paginator = document.getElementById('paginator');
  paginator && parentNode.removeChild(paginator);
};

export default renderPaginator;
