
    function handleImageError(imgEl) {
      imgEl.classList.add('hidden');
      const fallback = imgEl.parentElement.querySelector('[data-img-fallback]');
      if (fallback) {
        fallback.classList.remove('hidden');
        fallback.classList.add('flex');
      }
    }
  