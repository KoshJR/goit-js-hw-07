import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ original, preview, description }) => {
    return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
`;
  })
  .join("");

galleryContainer.innerHTML = markup;
galleryContainer.addEventListener("click", modalHandle);
function modalHandle(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) return;
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`,
    {
      onShow: () => window.addEventListener("keydown", closeByEsc),
      onClose: () => window.removeEventListener("keydown", closeByEsc),
    }
  );

  const closeByEsc = (e) => e.code === "Escape" && instance.close();
  instance.show();
}
