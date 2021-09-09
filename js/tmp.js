export const getGalleryItemMarkup = ({
  tags,
  webformatURL,
  id,
  views,
  comments,
  likes,
}) => `
  <li class="gallery-item" id="${id}">
    <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
    <div class="descr-wrapper">
      <p class="descr">
        <span>Views</span>
        <span>${views}</span>
      </p>
      <p class="descr">
        <span>Comments</span>
        <span>${comments}</span>
      </p>
      <p class="descr">
        <span>Likes</span>
        <span>${likes}</span>
      </p>
    </div>
  </li>
  `;

export const getPaginationBtns = ({ first = 1, last, btnsNum }) => `
  <div id="paginator">
  <button type="button" data-action="prev">prev</button>
  <button type="button" data-info="first">${first}</button>
  <button type="button" data-info="num">${btnsNum[0]}</button>
  <button type="button" data-info="num">${btnsNum[1]}</button>
  <button type="button" data-info="num">${btnsNum[2]}</button>
  <button type="button" data-info="last">${last}</button>
  <button type="button" data-action="next">next</button>
</div>
  `;
