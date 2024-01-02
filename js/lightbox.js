//TODO ============================   ADD IMG   ============================================
const button1 = document.querySelector('.lightbox-image');
button1.onclick = () => {
  const instance = basicLightbox.create(
    '<img style="width: auto; height: auto" src="../images/nature.jpeg">',
  );

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      instance.close();
      button1.style.border = 'none';
    }
  });

  instance.show();
};

// const button1 = document.querySelector('.lightbox-image');
// button1.onclick = () => {
//   const img =
//     '<img style="width: 100vw; height: 100vh" src="../images/nature.jpeg">';
//   const instance = basicLightbox.create(
//     '<button style="position: absolute; z-index:100, top:5" type="button">hhhhhhh</button>',
//   );
//   instance.element().insertAdjacentHTML('afterbegin', img);
//   instance.element().querySelector('button').onclick = () => instance.close();
//   instance.show();
//   const close = instance.element().querySelector('img');
//   instance.onclick().close();
// };

//TODO ============================   ADD VIDEO   ============================================
const button2 = document.querySelector('.lightbox-iframe');
button2.onclick = () =>
  basicLightbox
    .create(
      `
		<iframe width="560" height="315" src="https://www.youtube.com/embed/Scxs7L0vhZ4" frameborder="0" allowfullscreen></iframe>
	`,
    )
    .show();
//TODO ============================   ADD VIDEO   ============================================
const button3 = document.querySelector('.lightbox-video');
button3.onclick = () =>
  basicLightbox
    .create(
      `
		<video controls data-id="2">
			<source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4">
		</video>
	`,
    )
    .show();
//TODO ============================   ADD HTML   ============================================
const button4 = document.querySelector('.lightbox-html');
button4.onclick = () => {
  const html = `<div><h1 style="margin-bottom:15px">Hello world!</h1><p style="text-align:center">Hello world!</p></div>`;
  const instance = basicLightbox.create(html);
  const close = instance.element().querySelector('div');
  close.onclick = () => instance.close();
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      instance.close();
    }
  });
  instance.show();
};

//TODO ============================   ADD CALLBACK   ============================================
const button5 = document.querySelector('.lightbox-callbacks');
button5.onclick = (e) => {
  const html = `
		<h1>Callbacks</h1>
		<p>Take a look at the console of your browser.<br>This lightbox will close automaticly to demonstrate the close-callback.</p>
	`;

  const instance = basicLightbox.create(html, {
    onShow: (instance) => console.log('onShow', instance),
    onClose: (instance) => console.log('onClose', instance),
  });

  instance.show((instance) => console.log('finished show()', instance));

  setTimeout(() => {
    instance.close((instance) => console.log('finished close()', instance));
  }, 3000);
};

//TODO ============================   ADD BLOCKED   ============================================
const button6 = document.querySelector('.lightbox-blocked');
button6.onclick = () => {
  const html = `
		<h1>Blocked</h1>
		<p>It's not possible to close this lightbox,<br>because the onClose function returns false.</p>
	`;

  basicLightbox
    .create(html, {
      onClose: () => false,
    })
    .show();
};

//TODO ============================   ADD NOT CLOSABLE   ============================================
const button7 = document.querySelector('.lightbox-notClosable');
button7.onclick = () => {
  const html = `
		<h1 style="text-align:center; color:#fff">Not closable</h1>
		<p style="text-align:center; color:#fff">It's not possible to close this lightbox with a click.</p>
    <img style="width: auto; height: auto" src="../images/nature.jpeg">
	`;

  basicLightbox
    .create(html, {
      closable: false,
    })
    .show();
};

//TODO ============================   ADD MODIFY   ============================================
const button8 = document.querySelector('.lightbox-modify');
button8.onclick = () => {
  const instance = basicLightbox.create(`
		<h1 style="text-align:center; color:#fff">Modify HTML</h1>
		<p style="text-align:center; color:#fff">You can modify the HTML of the lightbox using JS.</p>
	`);
  console.log(instance.element());

  instance
    .element()
    .insertAdjacentHTML(
      'afterbegin',
      '<img style="width: auto; height: auto; margin-right:10px" src="../images/nature.jpeg">',
    );
  instance
    .element()
    .insertAdjacentHTML(
      'beforeend',
      '<img style="width: auto; height: auto; margin-left:10px" src="../images/nature.jpeg">',
    );

  instance.show();
};
//TODO ============================   ADD CLASSNAMES   ============================================
const button9 = document.querySelector('.lightbox-classNames');
button9.onclick = () => {
  const html = `
		<h1>Custom classNames</h1>
		<p>You can add custom classNames to the lightbox element.</p>
	`;

  // const close = document.querySelector('.classNames');

  const instance = basicLightbox.create(html, {
    className: 'classNames one two three',
  });
  instance.show();
};

//TODO ============================   ADD STACK   ============================================

const button10 = document.querySelector('.lightbox-stack');

button10.onclick = () => {
  const html = `<button>Open another lightbox</button>`;
  const instance = basicLightbox.create(html);

  instance.element().querySelector('button').onclick = () => instance.close();
  instance.show();
};
