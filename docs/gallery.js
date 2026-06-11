function initGallery(images) {
  var currentIndex = 0;
  var showAll = false;

  var grid = document.getElementById('gallery-grid');
  var showMoreBtn = document.getElementById('gallery-show-more');
  var modal = document.getElementById('gallery-modal');
  var modalImg = document.getElementById('gallery-modal-img');
  var counter = document.getElementById('gallery-counter');

  if (!grid || !modal) return;

  function render() {
    grid.innerHTML = '';
    var toShow = showAll ? images : images.slice(0, 8);

    toShow.forEach(function (src, i) {
      var div = document.createElement('div');
      div.className = 'gallery-item';
      var img = document.createElement('img');
      img.src = src;
      img.alt = 'Etkinlik foto ' + (i + 1);
      img.loading = 'lazy';
      div.appendChild(img);
      div.addEventListener('click', function () { openModal(i); });
      grid.appendChild(div);
    });

    if (showMoreBtn) {
      if (images.length > 8) {
        showMoreBtn.style.display = 'inline-flex';
        showMoreBtn.textContent = showAll
          ? '↑ Daha Az (8 Fotoğraf)'
          : '↓ Tüm Fotoğrafları Gör (' + images.length + ' Fotoğraf)';
      } else {
        showMoreBtn.style.display = 'none';
      }
    }
  }

  function openModal(idx) {
    currentIndex = idx;
    modalImg.src = images[currentIndex];
    counter.textContent = (currentIndex + 1) + ' / ' + images.length;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex];
    counter.textContent = (currentIndex + 1) + ' / ' + images.length;
  }

  function next() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex];
    counter.textContent = (currentIndex + 1) + ' / ' + images.length;
  }

  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', function () {
      showAll = !showAll;
      render();
    });
  }

  document.getElementById('gallery-prev').addEventListener('click', prev);
  document.getElementById('gallery-next').addEventListener('click', next);
  document.getElementById('gallery-close').addEventListener('click', closeModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') closeModal();
  });

  render();
}
