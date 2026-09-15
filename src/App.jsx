import { useEffect, useMemo, useState } from "react";
const navItems = ["Inversiones", "Mercados", "Beneficios", "Aprendé"];
const products = [
  {
    name: "Acciones",
    detail: "Desde $1",
    icon: "↗",
    tone: "violet",
    returnValue: "+18,4%",
    chart: [26, 34, 31, 42, 38, 51, 48, 61, 58, 72],
  },
  {
    name: "CEDEARs",
    detail: "Diversificá",
    icon: "◌",
    tone: "pink",
    returnValue: "+12,8%",
    chart: [42, 39, 45, 43, 54, 52, 60, 58, 66, 71],
  },
  {
    name: "Cripto",
    detail: "24/7",
    icon: "₿",
    tone: "blue",
    returnValue: "+24,6%",
    chart: [22, 29, 24, 41, 37, 55, 49, 67, 61, 82],
  },
  {
    name: "Dólar",
    detail: "Simple y seguro",
    icon: "$",
    tone: "green",
    returnValue: "+8,1%",
    chart: [38, 40, 39, 43, 42, 48, 46, 52, 51, 57],
  },
];
const fallback = {
  btc: { usd: 68250, usd_24h_change: 4.2 },
  eth: { usd: 3450, usd_24h_change: 2.8 },
  fx: { rates: { EUR: 0.92, ARS: 1085.5, BRL: 5.42 } },
  fear: { value: "67", value_classification: "Greed" },
};
const chartBase = [
  38, 43, 40, 48, 45, 57, 52, 62, 59, 66, 63, 76, 71, 84, 80, 92,
];

function Icon({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      {children}
    </span>
  );
}

function Sparkline({ values }) {
  const points = useMemo(() => {
    const min = Math.min(...values);
    const max = Math.max(...values);
    const span = max - min || 1;
    return values
      .map(
        (value, index) =>
          `${(index * 100) / (values.length - 1)},${
            94 - ((value - min) / span) * 74
          }`,
      )
      .join(" ");
  }, [values]);
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="h-full w-full overflow-visible"
    >
      <defs>
        <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#b276ff" stopOpacity="0.32" />
          <stop offset="1" stopColor="#b276ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,100 ${points} 100,100`} fill="url(#chart-fill)" />
      <polyline
        points={points}
        fill="none"
        stroke="#c084fc"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function ProductChart({ values, tone }) {
  return (
    <div className={`product-chart product-chart-${tone}`} aria-hidden="true">
      <Sparkline values={values} />
      <div className="product-chart-grid" />
    </div>
  );
}

function App() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [market, setMarket] = useState(fallback);

  useEffect(() => {
    const controller = new AbortController();
    Promise.all([
      fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true",
        { signal: controller.signal },
      ).then((res) => res.json()),
      fetch("https://api.frankfurter.app/latest?from=USD&to=EUR,ARS,BRL", {
        signal: controller.signal,
      }).then((res) => res.json()),
      fetch("https://api.alternative.me/fng/?limit=1&format=json", {
        signal: controller.signal,
      }).then((res) => res.json()),
    ])
      .then(([coins, fx, sentiment]) =>
        setMarket({
          btc: coins.bitcoin,
          eth: coins.ethereum,
          fx,
          fear: sentiment?.data?.[0] ?? fallback.fear,
        }),
      )
      .catch((error) => {
        if (error.name !== "AbortError") setMarket(fallback);
      });
    return () => controller.abort();
  }, []);
  const chartValues = useMemo(() => {
    const change = market.btc?.usd_24h_change ?? 4.2;
    return chartBase.map((value, index) => value + change * index * 0.12);
  }, [market.btc]);
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08070d] text-white">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#08070d]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.6rem] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="flex items-center gap-2.5"
            aria-label="Valiu inicio"
          >
            <span className="brand-mark">v</span>
            <span className="text-xl font-semibold tracking-[-0.06em]">
              valiu
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/55 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            <button className="hidden rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:text-white sm:block">
              Ingresar
            </button>
            <button className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#130c1c] transition-transform hover:-translate-y-0.5">
              Abrir cuenta
            </button>
          </div>
        </div>
      </header>
      <section
        id="top"
        className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28 lg:pt-28"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative z-10 animate-rise">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1.5 text-xs text-violet-100">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300" />{" "}
              La forma simple de invertir
            </div>
            <h1 className="max-w-2xl text-[3.65rem] font-semibold leading-[0.92] tracking-[-0.08em] sm:text-7xl lg:text-[6.6rem]">
              Tu plata,
              <br />
              <span className="gradient-text">más inteligente.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-white/55 sm:text-lg">
              Invertí en lo que importa con datos claros, herramientas simples y
              una experiencia que te acompaña.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#inversiones"
                className="rounded-full bg-[#b66dff] px-6 py-3.5 text-sm font-semibold text-[#170d22] shadow-[0_0_35px_rgba(182,109,255,0.22)] transition-all hover:-translate-y-1 hover:bg-[#c084fc]"
              >
                Empezar a invertir <span className="ml-2">↗</span>
              </a>
              <a
                href="#mercados"
                className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/75 transition-colors hover:border-white/35 hover:text-white"
              >
                Ver mercados
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6 text-xs text-white/40">
              <span>
                <strong className="text-white/80">+120k</strong> personas ya
                invierten
              </span>
              <span className="h-4 w-px bg-white/15" />
              <span className="flex items-center gap-1.5">
                <Icon className="text-emerald-300">✓</Icon> Sin costos ocultos
              </span>
            </div>
          </div>
          <div
            id="mercados"
            className="relative animate-rise animation-delay-2"
          >
            <div className="absolute -inset-8 rounded-full bg-violet-500/15 blur-3xl" />
            <div className="market-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#12101a]/90 p-4 shadow-2xl shadow-black/40 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />{" "}
                  Mercado abierto
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/35">
                  Valiu live
                </span>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Portfolio total
                  </p>
                  <p className="mt-2 text-4xl font-semibold tracking-[-0.06em]">
                    $128.430<span className="text-xl text-white/45">,80</span>
                  </p>
                </div>
                <span className="mb-1 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300">
                  +12,84%
                </span>
              </div>
              <div className="mt-8 h-44 w-full">
                <Sparkline values={chartValues} />
              </div>
              <div className="mt-4 flex justify-between text-[10px] uppercase tracking-[0.18em] text-white/25">
                <span>Mar 24</span>
                <span>Jun 24</span>
                <span>Sep 24</span>
                <span>Hoy</span>
              </div>
              <div className="mt-7 grid grid-cols-3 gap-2 border-t border-white/[0.08] pt-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                    Rendimiento
                  </p>
                  <p className="mt-1 text-sm text-white/85">+18.2%</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                    Ganancia
                  </p>
                  <p className="mt-1 text-sm text-emerald-300">+$14.620</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                    Activos
                  </p>
                  <p className="mt-1 text-sm text-white/85">08</p>
                </div>
              </div>
            </div>
            <div className="float-chip absolute -right-3 -top-5 rounded-2xl border border-white/10 bg-[#1b1528] px-4 py-3 shadow-xl sm:-right-6">
              <p className="text-[10px] text-white/40">Hoy</p>
              <p className="mt-1 text-sm font-medium text-emerald-300">
                +$2.340,40
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="ticker-viewport border-y border-white/[0.07] bg-white/[0.025]">
        <div className="ticker mx-auto flex w-max max-w-7xl gap-8 px-5 py-4 text-xs sm:px-8">
          <span className="whitespace-nowrap text-white/35">
            MERCADOS EN VIVO
          </span>
          <span className="whitespace-nowrap">
            BTC{" "}
            <b className="ml-2 text-white/75">
              ${(market.btc?.usd ?? fallback.btc.usd).toLocaleString()}
            </b>{" "}
            <em className="ml-1 text-emerald-300">
              +{(market.btc?.usd_24h_change ?? 4.2).toFixed(2)}%
            </em>
          </span>
          <span className="whitespace-nowrap">
            ETH{" "}
            <b className="ml-2 text-white/75">
              ${(market.eth?.usd ?? fallback.eth.usd).toLocaleString()}
            </b>{" "}
            <em className="ml-1 text-emerald-300">
              +{(market.eth?.usd_24h_change ?? 2.8).toFixed(2)}%
            </em>
          </span>
          <span className="whitespace-nowrap">
            USD/ARS{" "}
            <b className="ml-2 text-white/75">
              ${(market.fx?.rates?.ARS ?? fallback.fx.rates.ARS).toFixed(1)}
            </b>
          </span>
           <span className="whitespace-nowrap">
            BTC{" "}
            <b className="ml-2 text-white/75">
              ${(market.btc?.usd ?? fallback.btc.usd).toLocaleString()}
            </b>{" "}
            <em className="ml-1 text-emerald-300">
              +{(market.btc?.usd_24h_change ?? 4.2).toFixed(2)}%
            </em>
          </span>
          <span className="whitespace-nowrap">
            ETH{" "}
            <b className="ml-2 text-white/75">
              ${(market.eth?.usd ?? fallback.eth.usd).toLocaleString()}
            </b>{" "}
            <em className="ml-1 text-emerald-300">
              +{(market.eth?.usd_24h_change ?? 2.8).toFixed(2)}%
            </em>
          </span>
          <span className="whitespace-nowrap">
            USD/ARS{" "}
            <b className="ml-2 text-white/75">
              ${(market.fx?.rates?.ARS ?? fallback.fx.rates.ARS).toFixed(1)}
            </b>
          </span>
           <span className="whitespace-nowrap">
            BTC{" "}
            <b className="ml-2 text-white/75">
              ${(market.btc?.usd ?? fallback.btc.usd).toLocaleString()}
            </b>{" "}
            <em className="ml-1 text-emerald-300">
              +{(market.btc?.usd_24h_change ?? 4.2).toFixed(2)}%
            </em>
          </span>
          <span className="whitespace-nowrap">
            ETH{" "}
            <b className="ml-2 text-white/75">
              ${(market.eth?.usd ?? fallback.eth.usd).toLocaleString()}
            </b>{" "}
            <em className="ml-1 text-emerald-300">
              +{(market.eth?.usd_24h_change ?? 2.8).toFixed(2)}%
            </em>
          </span>
          <span className="whitespace-nowrap">
            USD/ARS{" "}
            <b className="ml-2 text-white/75">
              ${(market.fx?.rates?.ARS ?? fallback.fx.rates.ARS).toFixed(1)}
            </b>
          </span>
           <span className="whitespace-nowrap">
            BTC{" "}
            <b className="ml-2 text-white/75">
              ${(market.btc?.usd ?? fallback.btc.usd).toLocaleString()}
            </b>{" "}
            <em className="ml-1 text-emerald-300">
              +{(market.btc?.usd_24h_change ?? 4.2).toFixed(2)}%
            </em>
          </span>
          <span className="whitespace-nowrap">
            ETH{" "}
            <b className="ml-2 text-white/75">
              ${(market.eth?.usd ?? fallback.eth.usd).toLocaleString()}
            </b>{" "}
            <em className="ml-1 text-emerald-300">
              +{(market.eth?.usd_24h_change ?? 2.8).toFixed(2)}%
            </em>
          </span>
          <span className="whitespace-nowrap">
            USD/ARS{" "}
            <b className="ml-2 text-white/75">
              ${(market.fx?.rates?.ARS ?? fallback.fx.rates.ARS).toFixed(1)}
            </b>
          </span>
          <span className="whitespace-nowrap">
            BTC{" "}
            <b className="ml-2 text-white/75">
              ${(market.btc?.usd ?? fallback.btc.usd).toLocaleString()}
            </b>{" "}
            <em className="ml-1 text-emerald-300">
              +{(market.btc?.usd_24h_change ?? 4.2).toFixed(2)}%
            </em>
          </span>
          <span className="whitespace-nowrap">
            ETH{" "}
            <b className="ml-2 text-white/75">
              ${(market.eth?.usd ?? fallback.eth.usd).toLocaleString()}
            </b>{" "}
            <em className="ml-1 text-emerald-300">
              +{(market.eth?.usd_24h_change ?? 2.8).toFixed(2)}%
            </em>
          </span>
          <span className="whitespace-nowrap">
            USD/ARS{" "}
            <b className="ml-2 text-white/75">
              ${(market.fx?.rates?.ARS ?? fallback.fx.rates.ARS).toFixed(1)}
            </b>
          </span>
          <span className="whitespace-nowrap">
            BTC{" "}
            <b className="ml-2 text-white/75">
              ${(market.btc?.usd ?? fallback.btc.usd).toLocaleString()}
            </b>{" "}
            <em className="ml-1 text-emerald-300">
              +{(market.btc?.usd_24h_change ?? 4.2).toFixed(2)}%
            </em>
          </span>
          <span className="whitespace-nowrap">
            ETH{" "}
            <b className="ml-2 text-white/75">
              ${(market.eth?.usd ?? fallback.eth.usd).toLocaleString()}
            </b>{" "}
            <em className="ml-1 text-emerald-300">
              +{(market.eth?.usd_24h_change ?? 2.8).toFixed(2)}%
            </em>
          </span>
          <span className="whitespace-nowrap">
            USD/ARS{" "}
            <b className="ml-2 text-white/75">
              ${(market.fx?.rates?.ARS ?? fallback.fx.rates.ARS).toFixed(1)}
            </b>
          </span>
          <span className="whitespace-nowrap">
            SENTIMIENTO{" "}
            <b className="ml-2 text-violet-200">
              {market.fear?.value ?? "67"} ·{" "}
              {market.fear?.value_classification ?? "Greed"}
            </b>
          </span>
        </div>
      </div>
      <section
        id="inversiones"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="max-w-xl">
          <p className="eyebrow">Todo en un solo lugar</p>
          <h2 className="section-title mt-4">Invertí a tu manera.</h2>
          <p className="mt-5 text-white/50">
            Elegí cómo querés hacer crecer tu dinero. Sin vueltas, sin letras
            chicas.
          </p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <button
              key={product.name}
              onClick={() => setActiveProduct(index)}
              className={`product-card text-left ${
                activeProduct === index ? "product-card-active" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className={`product-icon product-icon-${product.tone}`}>
                  {product.icon}
                </span>
                <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] font-medium text-emerald-300">
                  1 año
                </span>
              </div>
              <span className="mt-6 block text-lg font-medium">
                {product.name}
              </span>
              <div className="mt-1 flex items-end justify-between">
                <span className="text-sm text-white/40">{product.detail}</span>
                <strong className="text-sm font-medium text-emerald-300">
                  {product.returnValue}
                </strong>
              </div>
              <div className="mt-auto pt-5">
                <ProductChart values={product.chart} tone={product.tone} />
              </div>
              <span className="mt-4 block text-xs text-white/35">
                Ver instrumento <span className="ml-1 text-white/70">↗</span>
              </span>
            </button>
          ))}
        </div>
      </section>
      <section
        id="beneficios"
        className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:pb-32"
      >
        <div className="order-2 lg:order-1">
          <div className="feature-window">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="text-sm font-medium">Mis inversiones</span>
              <span className="text-xs text-white/35">Últimos 12 meses</span>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-white/35">Balance total</p>
                <p className="mt-1 text-3xl font-semibold tracking-[-0.06em]">
                  $248.920,30
                </p>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
                +24.6%
              </span>
            </div>
            <div className="mt-7 grid gap-4">
              <div className="asset-row">
                <span className="asset-dot bg-violet-400" />
                <span>Acciones globales</span>
                <b>42%</b>
              </div>
              <div className="asset-row">
                <span className="asset-dot bg-fuchsia-400" />
                <span>CEDEARs</span>
                <b>28%</b>
              </div>
              <div className="asset-row">
                <span className="asset-dot bg-blue-400" />
                <span>Renta fija</span>
                <b>18%</b>
              </div>
              <div className="asset-row">
                <span className="asset-dot bg-emerald-400" />
                <span>Disponible</span>
                <b>12%</b>
              </div>
            </div>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <span className="block h-full w-[42%] rounded-full bg-violet-400" />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="eyebrow">Diseñado para vos</p>
          <h2 className="section-title mt-4">
            Entender tu plata también puede ser simple.
          </h2>
          <p className="mt-5 max-w-md leading-7 text-white/50">
            Un panel claro para tomar mejores decisiones. Visualizá tu progreso,
            descubrí oportunidades y mantené todo bajo control.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex gap-3">
              <Icon className="mt-0.5 h-6 w-6 rounded-full bg-violet-400/15 text-violet-200">
                ✓
              </Icon>
              <div>
                <p className="font-medium">Información que se entiende</p>
                <p className="mt-1 text-sm text-white/40">
                  Datos importantes, sin ruido.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Icon className="mt-0.5 h-6 w-6 rounded-full bg-violet-400/15 text-violet-200">
                ✓
              </Icon>
              <div>
                <p className="font-medium">Decisiones más seguras</p>
                <p className="mt-1 text-sm text-white/40">
                  Herramientas para invertir con confianza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="aprendé"
        className="border-t border-white/[0.07] px-5 py-20 sm:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Aprendé con Valiu</p>
              <h2 className="section-title mt-4">
                Tu mejor inversión
                <br />
                es entender más.
              </h2>
            </div>
            <a
              href="#top"
              className="text-sm text-violet-200 transition-colors hover:text-white"
            >
              Ver todos los recursos ↗
            </a>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="story-card story-purple">
              <span>01 · Guía</span>
              <h3>¿Qué es un CEDEAR y por qué te puede interesar?</h3>
              <a href="#top">Leer más ↗</a>
            </article>
            <article className="story-card story-dark">
              <span>02 · Concepto</span>
              <h3>Riesgo y rendimiento: encontrá tu equilibrio.</h3>
              <a href="#top">Leer más ↗</a>
            </article>
            <article className="story-card story-pink">
              <span>03 · Ideas</span>
              <h3>Pequeños hábitos para grandes resultados.</h3>
              <a href="#top">Leer más ↗</a>
            </article>
          </div>
        </div>
      </section>
      <footer className="border-t border-white/[0.07] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2">
            <span className="brand-mark brand-mark-small">v</span> valiu
          </span>
          <span>Una experiencia conceptual para invertir mejor.</span>
          <span>© 2024 Valiu</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
