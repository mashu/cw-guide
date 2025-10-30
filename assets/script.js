(function () {
  const KEY = "cw-guide-lang";
  const $pl = document.querySelector('[data-i18n="pl"]');
  const $en = document.querySelector('[data-i18n="en"]');
  const $btnPl = document.getElementById('btn-pl');
  const $btnEn = document.getElementById('btn-en');

  function setLang(lang) {
    const isPl = lang === 'pl';
    document.documentElement.lang = lang;
    if ($pl) $pl.hidden = !isPl;
    if ($en) $en.hidden = isPl;
    if ($btnPl) $btnPl.setAttribute('aria-pressed', String(isPl));
    if ($btnEn) $btnEn.setAttribute('aria-pressed', String(!isPl));
    try { localStorage.setItem(KEY, lang); } catch (_) {}
  }

  function detectLang() {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === 'pl' || saved === 'en') return saved;
    } catch (_) {}
    const nav = navigator.language || navigator.userLanguage || 'pl';
    return /^pl\b/i.test(nav) ? 'pl' : 'en';
  }

  $btnPl && $btnPl.addEventListener('click', () => setLang('pl'));
  $btnEn && $btnEn.addEventListener('click', () => setLang('en'));

  setLang(detectLang());

  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();


