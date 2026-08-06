// ============ DADOS ============
const IMG = {
  services: [
    'https://images.unsplash.com/photo-1761931403671-d020a14928d9?w=600&h=700&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1785456283212-338f5bc44d50?w=600&h=700&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1785456463151-623876d5b7af?w=600&h=700&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1717160675643-53a7a2ebaa9f?w=600&h=700&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1780504542350-5078d4080081?w=600&h=700&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=700&fit=crop&auto=format',
  ],
  gallery: [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=700&h=900&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?w=700&h=500&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1636153279424-cb5d1e00f5a2?w=700&h=900&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1546877625-cb8c71916608?w=700&h=500&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1704054006064-2c5b922e7a1e?w=700&h=700&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1785456439444-5132a64f0dd7?w=700&h=700&fit=crop&auto=format',
  ],
};

const WA = 'https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20atendimento.';

const SERVICES = [
  { title: 'Corte', desc: 'Renove seu visual com um corte pensado para valorizar seus traços e seu estilo.', img: IMG.services[0] },
  { title: 'Coloração', desc: 'Transforme a cor dos seus cabelos com técnicas que valorizam o resultado e a saúde dos fios.', img: IMG.services[1] },
  { title: 'Mechas', desc: 'Ilumine o visual com técnicas personalizadas para criar profundidade e luminosidade.', img: IMG.services[2] },
  { title: 'Tratamentos Capilares', desc: 'Cuide da saúde dos fios com tratamentos direcionados para hidratação, nutrição e reconstrução.', img: IMG.services[3] },
  { title: 'Alinhamento Capilar', desc: 'Mais praticidade, movimento e aparência saudável para os seus cabelos.', img: IMG.services[4] },
  { title: 'Finalização', desc: 'Realce a beleza dos seus fios com uma finalização profissional.', img: IMG.services[5] },
];

const DIFFS = [
  { icon: '✦', title: 'Atendimento Personalizado', desc: 'Cada cliente possui necessidades e estilos diferentes. Adaptamos cada serviço para valorizar o que há de único em você.' },
  { icon: '◈', title: 'Cuidado com os Fios', desc: 'Beleza e cuidado devem caminhar juntos. Utilizamos produtos e técnicas que respeitam a saúde dos seus cabelos.' },
  { icon: '◉', title: 'Profissionalismo', desc: 'Experiência e atenção em cada detalhe. Nossa equipe está preparada para oferecer o melhor atendimento.' },
  { icon: '◆', title: 'Resultados', desc: 'Transformações pensadas para valorizar você. Cada serviço é executado com técnica e dedicação.' },
];

const TESTIMONIALS = [
  { name: 'Ana Paula M.', text: 'Experiência incrível! Saí com o cabelo dos sonhos. O atendimento foi super personalizado e me senti acolhida do início ao fim.', stars: 5 },
  { name: 'Camila R.', text: 'As mechas ficaram perfeitas! A profissional entendeu exatamente o que eu queria e o resultado superou minhas expectativas.', stars: 5 },
  { name: 'Fernanda S.', text: 'Finalmente encontrei um salão que cuida de verdade da saúde do meu cabelo. O tratamento capilar foi transformador.', stars: 5 },
];

// Snippets curtos para a faixa em marquee
const REVIEW_STRIP = [
  { name: 'Ana Paula M.', text: 'Cabelo dos sonhos!' },
  { name: 'Camila R.', text: 'Mechas perfeitas.' },
  { name: 'Fernanda S.', text: 'Tratamento transformador.' },
  { name: 'Juliana T.', text: 'Atendimento impecável.' },
  { name: 'Bianca L.', text: 'Amei o resultado!' },
  { name: 'Renata P.', text: 'Profissionais incríveis.' },
];

// ============ HELPERS ============
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ============ HEADER ============
const header = $('#header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll);
onScroll();

const hamburger = $('#hamburger');
const navMobile = $('#navMobile');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMobile.classList.toggle('open');
});
$$('#navMobile a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navMobile.classList.remove('open');
}));

// ============ RENDER: SERVICES ============
const servicesGrid = $('#servicesGrid');
servicesGrid.innerHTML = SERVICES.map((s, i) => `
  <div class="service-card reveal" style="transition-delay:${i * 0.08}s">
    <div class="service-img"><img src="${s.img}" alt="${s.title}" loading="lazy"></div>
    <div class="service-body">
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <a href="${WA}" target="_blank" rel="noreferrer" class="service-link">Saiba mais <span>→</span></a>
    </div>
  </div>
`).join('');

// ============ RENDER: GALLERY ============
const galleryGrid = $('#galleryGrid');
galleryGrid.innerHTML = IMG.gallery.map((src, i) => {
  const tall = i === 0 || i === 2;
  return `<div class="gallery-item ${tall ? 'tall' : ''}" data-src="${src.replace('w=700', 'w=1200')}">
    <img src="${src}" alt="Resultado de cabelo ${i + 1}" loading="lazy">
  </div>`;
}).join('');

// Lightbox
const lightbox = $('#lightbox');
const lightboxImg = $('#lightboxImg');
$$('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImg.src = item.dataset.src;
    lightbox.classList.add('open');
  });
});
const closeLightbox = () => lightbox.classList.remove('open');
$('#lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ============ RENDER: DIFFERENTIALS ============
const diffGrid = $('#diffGrid');
diffGrid.innerHTML = DIFFS.map((d, i) => `
  <div class="diff-card reveal" style="transition-delay:${i * 0.1}s">
    <span class="diff-icon">${d.icon}</span>
    <h3>${d.title}</h3>
    <p>${d.desc}</p>
  </div>
`).join('');

// ============ RENDER: TESTIMONIALS ============
const testiGrid = $('#testiGrid');
testiGrid.innerHTML = TESTIMONIALS.map((t, i) => `
  <div class="testi-card reveal" style="transition-delay:${i * 0.12}s">
    <div class="testi-stars">${'★'.repeat(t.stars)}</div>
    <blockquote>"${t.text}"</blockquote>
    <div class="testi-author"><div class="line"></div><span>${t.name}</span></div>
  </div>
`).join('');

// ============ RENDER: REVIEW MARQUEE (duplicado para loop contínuo) ============
const reviewTrack = $('#reviewTrack');
const buildReviewItem = r => `
  <div class="review-item">
    <div class="review-header">
      <span class="stars">★★★★★</span>
      <span class="author">${r.name}</span>
    </div>
    <span class="snippet">"${r.text}"</span>
  </div>
`;
reviewTrack.innerHTML = [...REVIEW_STRIP, ...REVIEW_STRIP].map(buildReviewItem).join('');

// ============ REVEAL ON SCROLL ============
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

$$('.reveal').forEach(el => revealObserver.observe(el));

// ============ PARALLAX (highlight banner) ============
const parallaxBg = $('#parallaxBg');
const parallaxSection = parallaxBg ? parallaxBg.closest('.highlight-banner') : null;
if (parallaxBg && parallaxSection) {
  window.addEventListener('scroll', () => {
    const rect = parallaxSection.getBoundingClientRect();
    const offset = rect.top * 0.15;
    parallaxBg.style.transform = `translateY(${offset}px)`;
  }, { passive: true });
}
