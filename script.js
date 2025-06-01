document.addEventListener('DOMContentLoaded', () => {
  /* ====== MOBILE PANEL TOGGLE ====== */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', openMobileMenu);
  mobileClose.addEventListener('click', closeMobileMenu);

  // Close mobile menu when any link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* Close mobile panel if click outside */
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMobileMenu();
    }
  });

  /* ====== STAT COUNTER ANIMATION ====== */
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateValue(document.getElementById('km-cycled'), 0, 10000, 2000);
          animateValue(document.getElementById('subscribers'), 0, 240000, 2000);
          animateValue(document.getElementById('views'), 0, 63, 2000);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  observer.observe(document.getElementById('home'));

  /* ====== JOURNEY DATA & RENDERING ====== */
  const journeyData = {
    africa: {
      title: 'ਅਫਰੀਕੀ ਮਹਾਨ ਸਾਈਕਲ ਯਾਤਰਾ',
      content:
        'ਇਹ ਉਸਦੇ ਸਭ ਤੋਂ ਨਿਰਣਾਇਕ ਸਾਹਸਾਂ ਵਿੱਚੋਂ ਇੱਕ ਹੈ, ਜਿੱਥੇ ਘੁੱਡਾ ਸਿੰਘ ਨੇ ਅਫਰੀਕਾ ਵਿੱਚ ' +
   '10,000+ ਕਿਲੋਮੀਟਰ ਸਾਈਕਲ ਕੀਤੇ। ਨਮੀਬੀਆ ਦੇ ਵਿਸ਼ਾਲ ਰੇਗਿਸਤਾਨ ਤੋਂ ਬੋਤਸਵਾਨਾ ਦੇ ਜੰਗਲੀ ਜੀਵ-ਭਰਪੂਰ ਖੇਤਰਾਂ ਤੱਕ' +  ' – ਹਰ ਦਿਨ ਦੀ ਯਾਤਰਾ ਇੱਕ ਬੇਮਿਸਾਲ ਅਨੁਭਵ ਸੀ, ਜਿਸ ਵਿੱਚ ਅਣਗਿਣਤ ਚੁਣੌਤੀਆਂ ਅਤੇ ਖੋਜਾਂ ਸ਼ਾਮਲ ਸਨ।',
      stats: [
        { label: 'ਕੁੱਲ ਕਿਲੋਮੀਟਰ', value: '10,000+' },
        { label: 'ਦੇਸ਼ ਦੌਰੇ ਕੀਤੇ', value: '5+' },
        {
          label: 'ਮੁੱਖ ਦੇਸ਼',
          value: 'ਦੱਖਣੀ ਅਫਰੀਕਾ, ਨਮੀਬੀਆ, ਬੋਤਸਵਾਨਾ, ਜ਼ਾਂਬੀਆ, ਰਵਾਂਡਾ ਅਤੇ ਹੋਰ',
        },
     { label: 'ਚੁਣੌਤੀਆਂ', value: 'ਭਿਆਨਕ ਗਰਮੀ, ਰੇਤਲੇ ਰਸਤੇ, ਸਾਈਕਲ ਖਰਾਬੀ, ਜੰਗਲੀ ਜੀਵਾਂ ਨਾਲ ਮੁਕਾਬਲਾ' },
      ],
    },
    asia: {
      title: 'ਭਾਰਤੀ ਯਾਤਰਾ',
      content:
        'ਘੁੱਡਾ ਸਿੰਘ ਨੇ ਆਪਣੇ ਜੱਦੀ ਸੂਬੇ ਪੰਜਾਬ ਵਿੱਚ ਕਈ ਮਹੱਤਵਪੂਰਨ ਸਾਈਕਲ ਯਾਤਰਾਵਾਂ ਕੀਤੀਆਂ ਹਨ ' +
        'ਅਤੇ ਲਦਾਖ ਦੇ ਉੱਚ-ਉੱਚ ਪਹਾੜਾਂ ਰਾਹੀਂ ਯਾਤਰਾ ਵੀ ਦਰਜ ਕੀਤੀ ਹੈ।' +
        'ਉਹ ਆਪਣੀਆਂ ਜੜ੍ਹਾਂ ਨਾਲ ਜੁੜੇ ਰਹਿਣ ਅਤੇ ਭਾਰਤੀ ਸੱਭਿਆਚਾਰ ਨੂੰ ਡੂੰਘਾਈ ਨਾਲ ਸਮਝਣ ਵਿੱਚ ਵਿਸ਼ਵਾਸ ਰੱਖਦੇ ਹਨ।',
      stats: [
       { label: 'ਖਾਸ ਯਾਤਰਾ', value: 'ਪੰਜਾਬ ਵਿੱਚ 6 ਘੰਟਿਆਂ ਵਿੱਚ 110 ਕਿਲੋਮੀਟਰ' },
        { label: 'ਗਰੁੱਪ ਯਾਤਰਾ', value: '300+ ਸਾਈਕਲ ਸਵਾਰਾਂ ਨਾਲ 50 ਕਿਲੋਮੀਟਰ' },
        { label: 'ਖਾਸ ਖੇਤਰ', value: 'ਲਦਾਖ: ਦੁਨੀਆ ਦੀ ਸਭ ਤੋਂ ਉੱਚੀ ਸੜਕ (ਖਾਰਦੁੰਗਲਾ ਪਾਸ) ਤੇ ਸਾਈਕਲਿੰਗ' },
      ],
    },
    middle_east: {
      title: 'ਮੱਧ ਪੂਰਬੀ ਖੋਜ',
      content:
        'ਮੱਧ-ਪੂਰਬ ਵਿੱਚ, ਘੁੱਡਾ ਸਿੰਘ ਨੇ ਬਹਿਰੀਨ ਦੇ 25 ਕਿਲੋਮੀਟਰ ਲੰਬੇ ਕਿੰਗ ਫਾਹਦ ਕੋਜ਼ਵੇਅ ਪੁਲ ਨੂੰ ਸਾਈਕਲ ਰਾਹੀਂ ਪਾਰ ਕਰਨ ਦਾ ਅਨੋਖਾ ਕਾਰਨਾਮਾ ਕੀਤਾ। ' +
        'ਇਹ ਯਾਤਰਾ ਉਸਦੀ ਆਤਮ-ਖੋਜ ਅਤੇ ਆਤਮ-ਨਿਰਭਰਤਾ ਵੱਲ ਦੀ ਇੱਕ ਦਿਲਚਸਪ ਦ੍ਰਿਸ਼ਕ ਪ੍ਰਸਤੁਤੀ ਸੀ, ਜੋ ਉਸਦੇ "ਦਿਨ-73" ਵਲੌਗ ਵਿੱਚ ਦਰਜ ਹੈ।',
      stats: [
        { label: 'ਦੇਸ਼', value: 'ਬਹਿਰੀਨ' },
        { label: 'ਖਾਸ ਅਨੁਭਵ', value: '25 ਕਿਲੋਮੀਟਰ ਦਾ ਕਿੰਗ ਫਾਹਦ ਕੋਜ਼ਵੇਅ ਪੁਲ ਸਾਈਕਲ ਰਾਹੀਂ ਪਾਰ ਕੀਤਾ' },
       
      ],
    },
  };

  const journeyDetailsContainer = document.getElementById('journey-details');

  function renderJourneyInfo(region) {
    const data = journeyData[region];
    if (!data) {
      journeyDetailsContainer.innerHTML =
        `<p class="text-gray-500">ਕਿਰਪਾ ਕਰਕੇ ਨਕਸ਼ੇ ਉੱਤੇ ਕਿਸੇ ਖੇਤਰ 'ਤੇ ਕਲਿੱਕ ਕਰੋ ਤਾਂ ਜੋ ਵਿਸਥਾਰ ਵੇਖੋ।</p>`;
      journeyDetailsContainer.classList.add('visible');
      return;
    }

    let statsHtml = '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">';
    data.stats.forEach((stat) => {
      statsHtml += `
        <div class="bg-amber-50 bg-opacity-30 p-3 rounded-md">
          <p class="font-bold text-amber-900">${stat.label}</p>
          <p class="text-sm text-gray-700">${stat.value}</p>
        </div>`;
    });
    statsHtml += '</div>';

    journeyDetailsContainer.classList.remove('visible');
    setTimeout(() => {
      journeyDetailsContainer.innerHTML = `
        <h4 class="text-2xl font-bold text-amber-200 mb-2">${data.title}</h4>
        <p class="text-amber-100">${data.content}</p>
        ${statsHtml}
      `;
      journeyDetailsContainer.classList.add('visible');
    }, 250);
  }

  document.querySelectorAll('.map-region').forEach((regionEl) => {
    regionEl.addEventListener('click', () => {
      document.querySelectorAll('.map-region').forEach((el) => el.classList.remove('active'));
      regionEl.classList.add('active');
      const regionKey = regionEl.getAttribute('data-region');
      renderJourneyInfo(regionKey);
    });
  });

  // Initialize with Africa
  renderJourneyInfo('africa');
  document.querySelector('.map-region[data-region="africa"]').classList.add('active');

  /* ====== POPULAR VIDEOS CHART ====== */
  const videoData = {
    labels: ['ਬਹਿਰੀਨ ਪੁਲ ਵਲੌਗ', 'ਕੰਵਰ ਗਰੇਵਾਲ ਨਾਲ ਮੁਲਾਕਾਤ', 'ਲਦਾਖ ਸਾਈਕਲ ਯਾਤਰਾ'],
    views: [762, 721, 593],
  };
  const ctx = document.getElementById('popularVideosChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: videoData.labels,
      datasets: [
        {
          label: '(ਗਿਣਤੀ ਹਜ਼ਾਰਾਂ ਵਿੱਚ)',
          data: videoData.views,
          backgroundColor: 'rgba(217, 119, 6, 0.7)',
          borderColor: 'rgba(217, 119, 6, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#FFFFFF' },
          grid: { color: 'rgba(255, 255, 255, 0.2)' }
        },
        x: {
          ticks: { color: '#FFFFFF' },
          grid: { display: false }
        },
      },
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: 'ਲੋਕਪ੍ਰਿਯ ਵੀਡੀਓਜ਼ (ਗਿਣਤੀ ਹਜ਼ਾਰਾਂ ਵਿੱਚ)',
          color: '#FFFFFF',
          font: { size: 16 },
        },
      },
    },
  });

  /* ====== BACK TO TOP BUTTON ====== */
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
/*******************************
 *  TRAVEL.HTML SCRIPT SECTION
 *******************************/
document.addEventListener('DOMContentLoaded', () => {
  /* ======== SEARCH: universal (visible text) + error message ======== */
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const clearBtn = document.getElementById('clear-btn');
  const blogCards = document.querySelectorAll('.blog-card');
  const searchError = document.getElementById('search-error');

  function filterBlogs() {
    const query = searchInput.value.trim().toLowerCase();
    let anyVisible = false;

    blogCards.forEach(card => {
      const visibleText = card.innerText.toLowerCase();
      if (visibleText.includes(query)) {
        card.style.display = '';
        anyVisible = true;
      } else {
        card.style.display = 'none';
      }
    });

    // Toggle clear button
    if (query.length > 0) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }

    // Show or hide “no results” message
    if (!anyVisible && query.length > 0) {
      searchError.classList.add('visible');
    } else {
      searchError.classList.remove('visible');
    }
  }

  // Press Enter in input
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      filterBlogs();
    }
    // Toggle clear button as user types
    if (searchInput.value.trim().length > 0) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
      searchError.classList.remove('visible');
      blogCards.forEach(card => (card.style.display = ''));
    }
  });

  // Click “ਖੋਜੋ”
  searchBtn.addEventListener('click', () => {
    filterBlogs();
    searchInput.focus();
  });

  // Click “ਦੂਰ ਕਰੋ”
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    blogCards.forEach(card => (card.style.display = ''));
    clearBtn.classList.add('hidden');
    searchError.classList.remove('visible');
    searchInput.focus();
  });


  /* ======== MODAL LOGIC (IMAGES AREA + TEXT AREA + Prev/Next) ======== */
  const modal = document.getElementById('blog-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDate = document.getElementById('modal-date');
  const modalContent = document.getElementById('modal-content');
  const modalImagesContainer = document.getElementById('images-container');

  const modalPrevBtn = document.getElementById('modal-prev');
  const modalNextBtn = document.getElementById('modal-next');

  const modalClose = document.getElementById('modal-close');

  // Scroll arrows for images
  const scrollLeftBtn = document.getElementById('img-scroll-left');
  const scrollRightBtn = document.getElementById('img-scroll-right');

  // Full‐screen overlay:
  const enlargeOverlay = document.getElementById('image-enlarge-overlay');
  const enlargedImage = document.getElementById('enlarged-image');
  const enlargeClose = document.getElementById('enlarge-close');

  // Convert NodeList to array:
  const cardArray = Array.from(blogCards);

  let currentImages = [];
  let currentCardIndex = 0;  // index within cardArray

  function openModalFromIndex(idx) {
    currentCardIndex = idx;
    const card = cardArray[idx];

    // Populate Title / Date / Content:
    modalTitle.textContent = card.dataset.title;
    modalDate.textContent = card.dataset.date;
    modalContent.textContent = card.dataset.content;

    // Parse images JSON array
    try {
      currentImages = JSON.parse(card.dataset.images);
    } catch {
      currentImages = [];
    }

    // Build inline images
    modalImagesContainer.innerHTML = '';
    currentImages.forEach((url) => {
      const thumb = document.createElement('img');
      thumb.src = url;
      thumb.alt = 'Blog Image';
      thumb.classList.add('modal-thumb');
      // On click, open overlay with full-size image
      thumb.addEventListener('click', () => {
        enlargedImage.src = url;
        enlargeOverlay.classList.add('active');
      });
      modalImagesContainer.appendChild(thumb);
    });

    // Show/hide scroll arrows depending on overflow
    setTimeout(() => { // wait for images container to render
      if (modalImagesContainer.scrollWidth > modalImagesContainer.clientWidth) {
        scrollLeftBtn.style.display = 'flex';
        scrollRightBtn.style.display = 'flex';
      } else {
        scrollLeftBtn.style.display = 'none';
        scrollRightBtn.style.display = 'none';
      }
    }, 50);

    // Update Prev/Next buttons state
    updateModalNavButtons();

    // Display the modal
    modal.classList.add('modal-open');
  }

  function updateModalNavButtons() {
    // Prev button
    if (currentCardIndex > 0) {
      modalPrevBtn.disabled = false;
    } else {
      modalPrevBtn.disabled = true;
    }
    // Next button
    if (currentCardIndex < cardArray.length - 1) {
      modalNextBtn.disabled = false;
    } else {
      modalNextBtn.disabled = true;
    }
  }

  function closeModal() {
    modal.classList.remove('modal-open');
  }

  /* ========= EVENT LISTENERS ========= */

  // “ਹੋਰ ਪੜ੍ਹੋ” button opens modal:
  blogCards.forEach((card, idx) => {
    const readBtn = card.querySelector('.read-more-btn');
    readBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModalFromIndex(idx);
    });
  });

  // Prev blog
  modalPrevBtn.addEventListener('click', () => {
    if (currentCardIndex > 0) {
      openModalFromIndex(currentCardIndex - 1);
    }
  });
  // Next blog
  modalNextBtn.addEventListener('click', () => {
    if (currentCardIndex < cardArray.length - 1) {
      openModalFromIndex(currentCardIndex + 1);
    }
  });

  // Close modal:
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modal.classList.contains('modal-open')) {
        closeModal();
      }
      if (enlargeOverlay.classList.contains('active')) {
        enlargeOverlay.classList.remove('active');
      }
    }
  });

  // IMAGE SCROLL ARROWS
  scrollLeftBtn.addEventListener('click', () => {
    modalImagesContainer.scrollBy({ left: -200, behavior: 'smooth' });
  });
  scrollRightBtn.addEventListener('click', () => {
    modalImagesContainer.scrollBy({ left: 200, behavior: 'smooth' });
  });

  // ENLARGE OVERLAY logic:
  enlargeClose.addEventListener('click', () => {
    enlargeOverlay.classList.remove('active');
  });
  enlargeOverlay.addEventListener('click', (e) => {
    if (e.target === enlargeOverlay) {
      enlargeOverlay.classList.remove('active');
    }
  });
});
