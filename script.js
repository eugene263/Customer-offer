(function () {
  'use strict';

  /* ---------- Hero floating icons ---------- */
  var iconDefs = [
    { id: 'icon-tt', left: '5%', top: '8%', phase: 0.2, freq: 0.22, amp: 32, size: 56 },
    { id: 'icon-ig', left: '93%', top: '9%', phase: 1.8, freq: 0.17, amp: 30, size: 58 },
    { id: 'icon-yt', left: '3%', top: '60%', phase: 3.1, freq: 0.2, amp: 34, size: 54 },
    { id: 'icon-fb', left: '95%', top: '64%', phase: 4.4, freq: 0.19, amp: 30, size: 56 },
    { id: 'icon-x', left: '12%', top: '90%', phase: 2.4, freq: 0.24, amp: 28, size: 50 },
    { id: 'icon-threads', left: '86%', top: '92%', phase: 5.6, freq: 0.21, amp: 32, size: 52 },
  ];

  var heroIconsEl = document.getElementById('heroIcons');
  iconDefs.forEach(function (d) {
    var el = heroIconsEl.querySelector('.hero-icon[data-id="' + d.id + '"]');
    if (!el) return;
    el.style.left = d.left;
    el.style.top = d.top;
    el.style.width = d.size + 'px';
    el.style.height = d.size + 'px';
    el.style.marginLeft = (-d.size / 2) + 'px';
    el.style.marginTop = (-d.size / 2) + 'px';
  });

  var orbitStart = performance.now();
  function tickIcons() {
    var t = (performance.now() - orbitStart) / 1000;
    iconDefs.forEach(function (d) {
      var el = heroIconsEl.querySelector('.hero-icon[data-id="' + d.id + '"]');
      if (!el) return;
      var dx = Math.sin(t * d.freq + d.phase) * d.amp;
      var dy = Math.cos(t * d.freq * 1.3 + d.phase) * d.amp;
      var scale = 1 + Math.sin(t * d.freq * 0.8 + d.phase) * 0.06;
      el.style.transform = 'translate(' + dx + 'px, ' + dy + 'px) scale(' + scale + ')';
    });
    requestAnimationFrame(tickIcons);
  }
  requestAnimationFrame(tickIcons);

  /* ---------- How it works accordion ---------- */
  var includedRaw = [
    { title: 'A network under one dashboard', desc: 'A network of social media accounts connected to a single control panel: posts, stats and the status of every account are visible in real time, with no manual reconciling of data across separate dashboards.' },
    { title: 'Account setup and warm-up', desc: 'New accounts are set up and warmed up for your niche — before your brand appears, each account builds organic activity so content lands in recommendations instead of shadow-ban.' },
    { title: 'Content adaptation', desc: 'Content is adapted and your brand is placed on every video: logo, product name and link are added neutrally, without pushy calls-to-action that turn viewers off.' },
    { title: 'Scheduled publishing', desc: 'Publishing runs on a schedule across the whole network at once — an even spread through the day instead of peak dumps, giving a steady pace of views day after day.' },
    { title: 'Monitoring 24/7', desc: '24/7 monitoring — view pace, account status, audience reaction. Any deviation from the norm is caught immediately, not after the fact in a weekly report.' },
    { title: 'Account replacement, no pauses', desc: 'Accounts that drop out of the network are replaced without pausing your posting volume. The network always holds the agreed account count, so isolated bans don’t cost you pace.' },
    { title: 'Weekly analytics', desc: 'Analytics and a report every week: views, profile, followers, shares — in a clear format, with 24/7 dashboard access if you need the data more often.' },
    { title: 'Support and a manager', desc: 'Technical support and a project manager on call — questions about the brief, content or reporting all go through one person, no ticket queue.' },
  ];
  var tints = ['#2A2110', '#1E1E1E', '#2A1D10', '#1F1826'];

  var howStack = document.getElementById('howStack');
  includedRaw.forEach(function (item, i) {
    var el = document.createElement('div');
    el.className = 'how-item';
    el.style.background = 'linear-gradient(155deg, ' + tints[i % tints.length] + ' 0%, #0A0A0A 65%)';
    el.style.marginTop = i === 0 ? '0px' : '-18px';
    el.style.zIndex = String(i + 1);

    var videoFilter = i === 2 ? 'brightness(2.4) contrast(1.3)' : 'none';
    var videoScale = i === 2 ? '1.7' : '1';

    el.innerHTML =
      '<div class="how-item-inner">' +
        '<div class="how-text">' +
          '<div class="how-num-row"><span class="how-num">' + String(i + 1).padStart(2, '0') + '</span></div>' +
          '<h3 class="how-title">' + item.title + '</h3>' +
          '<p class="how-desc">' + item.desc + '</p>' +
        '</div>' +
        '<div class="how-video-wrap">' +
          '<video src="assets/how-step-' + (i + 1) + '.mp4" autoplay loop muted playsinline ' +
            'style="filter:' + videoFilter + '; transform:scale(' + videoScale + ');"></video>' +
        '</div>' +
      '</div>';

    function open() { el.classList.add('is-open'); el.style.height = '240px'; }
    function close() { el.classList.remove('is-open'); el.style.height = '112px'; }

    el.addEventListener('mouseenter', open);
    el.addEventListener('mouseleave', close);
    el.addEventListener('click', function () {
      if (el.classList.contains('is-open')) close(); else open();
    });

    howStack.appendChild(el);
  });

  /* ---------- Cases ---------- */
  var metaColors = [
    { color: '#FFC800', bg: 'rgba(255,200,0,0.12)' },
    { color: '#7FD8A0', bg: 'rgba(127,216,160,0.12)' },
    { color: '#8FB8FF', bg: 'rgba(143,184,255,0.12)' },
    { color: '#E29CFF', bg: 'rgba(226,156,255,0.12)' },
  ];

  var cases = [
    {
      label: 'CASE 1', name: 'OBMIFY',
      meta: 'exchange-office monitoring · fintech niche · 2 networks · 4 months of work',
      headline: '120M+ views in four months',
      desc: 'A steady pace — 30M views a month, 1M a day. The top video reached 2.6M views. Format: talking-head, local news hooks, short hooks.',
      video: 'assets/case-obmify-video.mp4',
      tags: ['talking-head', 'local news hooks', 'short hooks'],
      metrics: [
        { raw: '1.63M', label: 'LIKES' }, { raw: '200000+', label: 'SHARES' }, { raw: '34000+', label: 'COMMENTS' },
        { raw: '525000+', label: 'PROFILE VIEWS' }, { raw: '50000+', label: 'NEW FOLLOWERS' }, { raw: '2.6M', label: 'TOP VIDEO' },
      ],
    },
    {
      label: 'CASE 2', name: 'EDUCERA',
      meta: 'online AI courses · 1 network · 2 months of work',
      headline: '42M+ views in two months',
      desc: 'One network — 21M views a month, about 700,000 a day. The top video reached 1.2M views. Format: short lessons, AI tool breakdowns, student cases.',
      video: 'assets/case-educera-video.mp4',
      tags: ['short lessons', 'AI tool breakdowns', 'student cases'],
      metrics: [
        { raw: '510000+', label: 'LIKES' }, { raw: '45000+', label: 'SHARES' }, { raw: '9000+', label: 'COMMENTS' },
        { raw: '100000+', label: 'PROFILE VIEWS' }, { raw: '10000+', label: 'NEW FOLLOWERS' }, { raw: '1.2M', label: 'TOP VIDEO' },
      ],
    },
    {
      label: 'CASE 3', name: 'LUNOMEN',
      meta: 'astrology service: horoscopes, natal charts · 1 network · 6 months of work',
      headline: '90M+ views in six months',
      desc: 'A long-running partnership — 15M views a month, 0.5M a day, with no drop in pace. Format: short daily forecasts, natal chart breakdowns, sign compatibility.',
      video: 'assets/case-lunomen-video.mp4',
      tags: ['daily forecasts', 'natal charts', 'sign compatibility'],
      metrics: [
        { raw: '1.1M', label: 'LIKES' }, { raw: '80000+', label: 'SHARES' }, { raw: '9000+', label: 'COMMENTS' },
        { raw: '180000+', label: 'PROFILE VIEWS' }, { raw: '13000+', label: 'NEW FOLLOWERS' }, { raw: '1.2M', label: 'TOP VIDEO' },
      ],
    },
  ];

  var activeCase = 0;
  var n = cases.length;
  var metricGen = 0;

  var phonesStage = document.getElementById('phonesStage');
  var dotsEl = document.getElementById('dots');
  var caseDetail = document.getElementById('caseDetail');

  function buildIosDevice(videoSrc) {
    return (
      '<div class="ios-device" data-dark="true">' +
        '<div class="ios-dynamic-island"></div>' +
        '<div class="ios-status-bar">' +
          '<span class="ios-time">9:41</span>' +
          '<div class="ios-status-icons">' +
            '<svg width="19" height="12" viewBox="0 0 19 12"><rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill="#fff"/><rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill="#fff"/><rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill="#fff"/><rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill="#fff"/></svg>' +
            '<svg width="17" height="12" viewBox="0 0 17 12"><path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill="#fff"/><path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill="#fff"/><circle cx="8.5" cy="10.5" r="1.5" fill="#fff"/></svg>' +
            '<svg width="27" height="13" viewBox="0 0 27 13"><rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke="#fff" stroke-opacity="0.35" fill="none"/><rect x="2" y="2" width="20" height="9" rx="2" fill="#fff"/><path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fill="#fff" fill-opacity="0.4"/></svg>' +
          '</div>' +
        '</div>' +
        '<div class="ios-content"><video src="' + videoSrc + '" autoplay loop muted playsinline></video></div>' +
        '<div class="ios-home-indicator"><span></span></div>' +
      '</div>'
    );
  }

  cases.forEach(function (c, i) {
    var wrap = document.createElement('div');
    wrap.className = 'case-phone';
    wrap.dataset.index = String(i);
    wrap.innerHTML =
      '<div class="case-phone-notch notch-1"></div>' +
      '<div class="case-phone-notch notch-2"></div>' +
      '<div class="case-phone-notch notch-3"></div>' +
      '<div class="case-phone-notch notch-4"></div>' +
      buildIosDevice(c.video);
    phonesStage.appendChild(wrap);
  });

  cases.forEach(function (c, i) {
    var dot = document.createElement('button');
    dot.className = 'dot';
    dot.setAttribute('aria-label', 'Select case');
    dot.addEventListener('click', function () { selectCase(i); });
    dotsEl.appendChild(dot);
  });

  function parseMetric(str) {
    if (str.indexOf('.') !== -1) {
      var m = str.match(/^(\d[\d\s]*)\.(\d+)(.*)$/);
      var target = parseFloat(m[1].replace(/\s/g, '') + '.' + m[2]);
      return { target: target, decimals: m[2].length, suffix: m[3] };
    }
    var m2 = str.match(/^([\d\s]+)(.*)$/);
    return { target: parseInt(m2[1].replace(/\s/g, ''), 10), decimals: 0, suffix: m2[2] };
  }

  function formatMetric(str, t) {
    var p = parseMetric(str);
    var val = p.target * t;
    var out = p.decimals > 0
      ? val.toFixed(p.decimals)
      : Math.round(val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return out + p.suffix;
  }

  function renderPhones() {
    var wraps = phonesStage.querySelectorAll('.case-phone');
    wraps.forEach(function (wrap) {
      var i = parseInt(wrap.dataset.index, 10);
      var d = i - activeCase;
      if (d > n / 2) d -= n;
      if (d < -n / 2) d += n;
      var visible = Math.abs(d) <= 1;
      var x = d * 76;
      var scale = d === 0 ? 1 : 0.85;
      var opacity = d === 0 ? 1 : (visible ? 0.5 : 0);
      var z = 3 - Math.abs(d);
      wrap.style.transform = 'translate(-50%,-50%) translateX(' + x + 'px) scale(' + scale + ')';
      wrap.style.opacity = String(opacity);
      wrap.style.zIndex = String(z);
      wrap.style.pointerEvents = d === 0 ? 'auto' : 'none';
    });
  }

  function renderDots() {
    var dots = dotsEl.querySelectorAll('.dot');
    dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === activeCase);
    });
  }

  function renderDetail(t) {
    var c = cases[activeCase];
    var metaParts = c.meta.split(' · ').map(function (text, i) {
      var col = metaColors[i % metaColors.length];
      return '<span class="case-meta-pill" style="color:' + col.color + '; background:' + col.bg + ';">' + text + '</span>';
    }).join('');
    var tags = c.tags.map(function (tag) { return '<span class="case-tag">' + tag + '</span>'; }).join('');
    var metrics = c.metrics.map(function (m) {
      return '<div class="case-metric"><div class="case-metric-value">' + formatMetric(m.raw, t) + '</div><div class="case-metric-label">' + m.label + '</div></div>';
    }).join('');

    caseDetail.innerHTML =
      '<div class="case-top-row"><span class="case-label">' + c.label + '</span><span class="case-name">' + c.name + '</span></div>' +
      '<div class="case-meta-row">' + metaParts + '</div>' +
      '<h3 class="case-headline">' + c.headline + '</h3>' +
      '<p class="case-desc">' + c.desc + '</p>' +
      '<div class="case-tags">' + tags + '</div>' +
      '<div class="case-metrics">' + metrics + '</div>';
  }

  function startMetricAnim() {
    var start = performance.now();
    var gen = ++metricGen;
    var duration = 500;
    function step(now) {
      if (gen !== metricGen) return;
      var raw = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - raw, 3);
      renderDetail(eased);
      if (raw < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function selectCase(i) {
    activeCase = ((i % n) + n) % n;
    renderPhones();
    renderDots();
    startMetricAnim();
    caseDetail.style.animation = 'none';
    void caseDetail.offsetWidth;
    caseDetail.style.animation = '';
  }

  document.getElementById('prevCase').addEventListener('click', function () { selectCase(activeCase - 1); });
  document.getElementById('nextCase').addEventListener('click', function () { selectCase(activeCase + 1); });

  renderPhones();
  renderDots();
  startMetricAnim();
})();
