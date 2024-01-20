document
  .querySelector('.form-container')
  .insertAdjacentHTML(
    'afterbegin',
    '<header></header><main><form class="feedback-form"><textarea name="message"></textarea><button type="submit">Send feedback</button></form></main><footer></footer>',
  );
const form = document.querySelector('.feedback-form');
form.elements.message.value = localStorage.getItem('save-message') ?? '';
form.addEventListener('input', (e) =>
  localStorage.setItem('save-message', e.target.value),
);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.target.elements.message.value);
  localStorage.removeItem('save-message');
  form.reset();
});
