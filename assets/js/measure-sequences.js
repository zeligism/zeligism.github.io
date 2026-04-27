(function () {
  const configs = {
    horizontal: {
      xDomain: [0, 13],
      yMax: 1.2,
      xTicks: [0, 3, 6, 9, 12],
      yTicks: [0, 0.5, 1],
      frameMs: 550,
      pointwise: "yes",
      inMeasure: "no on R",
      geometry(n) {
        return {
          a: n,
          b: n + 1,
          h: 1,
          width: 1,
          area: 1,
          l1: 1,
          linf: 1,
          label: `n = ${n}`,
        };
      },
    },
    width: {
      xDomain: [0, 21],
      yMax: 1.05,
      xTicks: [0, 5, 10, 15, 20],
      yTicks: [0, 0.25, 0.5, 0.75, 1],
      frameMs: 550,
      pointwise: "yes",
      inMeasure: "yes",
      geometry(n) {
        return {
          a: 0,
          b: n,
          h: 1 / n,
          width: n,
          area: 1,
          l1: 1,
          linf: 1 / n,
          label: `n = ${n}`,
        };
      },
    },
    height: {
      xDomain: [0, 1.05],
      yMax: 12.5,
      xTicks: [0, 0.25, 0.5, 0.75, 1],
      yTicks: [0, 4, 8, 12],
      frameMs: 550,
      pointwise: "yes",
      inMeasure: "yes",
      geometry(n) {
        return {
          a: 1 / n,
          b: 2 / n,
          h: n,
          width: 1 / n,
          area: 1,
          l1: 1,
          linf: n,
          label: `n = ${n}`,
        };
      },
    },
    typewriter: {
      xDomain: [0, 1],
      yMax: 1.2,
      xTicks: [0, 0.25, 0.5, 0.75, 1],
      yTicks: [0, 0.5, 1],
      frameMs: 320,
      pointwise: "no",
      inMeasure: "yes",
      geometry(n) {
        const k = Math.floor(Math.log2(n));
        const j = n - 2 ** k;
        const width = 1 / (2 ** k);
        return {
          a: j * width,
          b: (j + 1) * width,
          h: 1,
          width,
          area: width,
          l1: width,
          linf: 1,
          label: `n = ${n}, k = ${k}, j = ${j}`,
        };
      },
    },
  };

  function formatNumber(value) {
    if (Math.abs(value) < 1e-10) {
      return "0";
    }
    if (Math.abs(value - Math.round(value)) < 1e-10) {
      return String(Math.round(value));
    }
    if (Math.abs(value) >= 10) {
      return value.toFixed(1).replace(/\.0$/, "");
    }
    if (Math.abs(value) >= 1) {
      return value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
    }
    return value.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
  }

  function createSvg(config) {
    const xMin = config.xDomain[0];
    const xMax = config.xDomain[1];
    const yMax = config.yMax;
    const width = 640;
    const height = 300;
    const margin = { top: 22, right: 26, bottom: 42, left: 56 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;

    function sx(x) {
      return margin.left + ((x - xMin) / (xMax - xMin)) * plotWidth;
    }

    function sy(y) {
      return margin.top + (1 - y / yMax) * plotHeight;
    }

    const verticalGrid = config.xTicks
      .map((tick) => `
        <line class="measure-sequence__grid" x1="${sx(tick)}" y1="${margin.top}" x2="${sx(tick)}" y2="${margin.top + plotHeight}"></line>
        <text class="measure-sequence__tick-label" x="${sx(tick)}" y="${height - 14}" text-anchor="middle">${formatNumber(tick)}</text>
      `)
      .join("");

    const horizontalGrid = config.yTicks
      .map((tick) => `
        <line class="measure-sequence__grid" x1="${margin.left}" y1="${sy(tick)}" x2="${margin.left + plotWidth}" y2="${sy(tick)}"></line>
        <text class="measure-sequence__tick-label" x="${margin.left - 10}" y="${sy(tick) + 4}" text-anchor="end">${formatNumber(tick)}</text>
      `)
      .join("");

    return `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-hidden="true">
        <g>${verticalGrid}${horizontalGrid}</g>
        <line class="measure-sequence__axis" x1="${margin.left}" y1="${margin.top + plotHeight}" x2="${margin.left + plotWidth}" y2="${margin.top + plotHeight}"></line>
        <line class="measure-sequence__axis" x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${margin.top + plotHeight}"></line>
        <text class="measure-sequence__axis-label" x="${margin.left + plotWidth / 2}" y="${height - 6}" text-anchor="middle">x</text>
        <text class="measure-sequence__axis-label" x="18" y="${margin.top + plotHeight / 2}" text-anchor="middle" transform="rotate(-90 18 ${margin.top + plotHeight / 2})">fₙ(x)</text>
        <rect class="measure-sequence__bar" data-part="bar" x="${margin.left}" y="${margin.top + plotHeight}" width="0" height="0" rx="3"></rect>
        <line class="measure-sequence__bar-top" data-part="bar-top" x1="${margin.left}" y1="${margin.top + plotHeight}" x2="${margin.left}" y2="${margin.top + plotHeight}"></line>
      </svg>
    `;
  }

  function wireFigure(root) {
    const sequence = root.dataset.sequence;
    const config = configs[sequence];

    if (!config) {
      return;
    }

    const plot = root.querySelector('[data-role="plot"]');
    const slider = root.querySelector('[data-role="slider"]');
    const playButton = root.querySelector('[data-role="play"]');
    const nLabel = root.querySelector('[data-role="n-label"]');
    const l1Chip = root.querySelector('[data-role="l1"]');
    const linfChip = root.querySelector('[data-role="linf"]');
    const pointwiseChip = root.querySelector('[data-role="pointwise"]');
    const measureChip = root.querySelector('[data-role="measure"]');

    plot.innerHTML = createSvg(config);

    const svg = plot.querySelector("svg");
    const bar = svg.querySelector('[data-part="bar"]');
    const barTop = svg.querySelector('[data-part="bar-top"]');

    const viewBox = svg.viewBox.baseVal;
    const margin = { top: 22, right: 26, bottom: 42, left: 56 };
    const plotWidth = viewBox.width - margin.left - margin.right;
    const plotHeight = viewBox.height - margin.top - margin.bottom;
    const xMin = config.xDomain[0];
    const xMax = config.xDomain[1];
    const yMax = config.yMax;

    function sx(x) {
      return margin.left + ((x - xMin) / (xMax - xMin)) * plotWidth;
    }

    function sy(y) {
      return margin.top + (1 - y / yMax) * plotHeight;
    }

    function setPlaying(isPlaying) {
      playButton.textContent = isPlaying ? "Pause" : "Play";
      playButton.setAttribute("aria-pressed", isPlaying ? "true" : "false");
    }

    function render() {
      const n = Number(slider.value);
      const state = config.geometry(n);
      const x = sx(state.a);
      const x2 = sx(state.b);
      const y = sy(state.h);
      const baseY = sy(0);

      bar.setAttribute("x", x);
      bar.setAttribute("y", y);
      bar.setAttribute("width", Math.max(x2 - x, 0));
      bar.setAttribute("height", Math.max(baseY - y, 0));

      barTop.setAttribute("x1", x);
      barTop.setAttribute("y1", y);
      barTop.setAttribute("x2", x2);
      barTop.setAttribute("y2", y);

      nLabel.textContent = state.label;
      l1Chip.textContent = `L1 = ${formatNumber(state.l1)}`;
      linfChip.textContent = `Linf = ${formatNumber(state.linf)}`;
      pointwiseChip.textContent = `pointwise -> 0: ${config.pointwise}`;
      measureChip.textContent = `in measure -> 0: ${config.inMeasure}`;
    }

    let timer = null;

    function stop() {
      if (timer !== null) {
        window.clearInterval(timer);
        timer = null;
      }
      setPlaying(false);
    }

    function start() {
      if (Number(slider.value) >= Number(slider.max)) {
        slider.value = slider.min;
        render();
      }

      timer = window.setInterval(() => {
        const current = Number(slider.value);
        if (current >= Number(slider.max)) {
          stop();
          return;
        }
        slider.value = String(current + 1);
        render();
      }, config.frameMs);
      setPlaying(true);
    }

    slider.addEventListener("input", render);
    playButton.addEventListener("click", () => {
      if (timer !== null) {
        stop();
      } else {
        start();
      }
    });

    render();
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".measure-sequence").forEach(wireFigure);
  });
}());
