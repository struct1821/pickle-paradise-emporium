import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/spicy5-logo.png";
import hero from "@/assets/hero-pickles.jpg";
import avakaya from "@/assets/product-avakaya.jpg";
import chili from "@/assets/product-chili.jpg";
import gongura from "@/assets/product-gongura.jpg";
import lemon from "@/assets/product-lemon.jpg";
import garlic from "@/assets/product-garlic.jpg";
import tomato from "@/assets/product-tomato.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  heat: 1 | 2 | 3;
  image: string;
};

const PRODUCTS: Product[] = [
  { id: "avakaya", name: "Avakaya", tagline: "The royal Andhra mango pickle", price: 349, heat: 3, image: avakaya },
  { id: "chili", name: "Guntur Red Chili", tagline: "Whole chilies in spiced oil", price: 299, heat: 3, image: chili },
  { id: "gongura", name: "Gongura", tagline: "Sorrel leaves, slow-cooked", price: 329, heat: 2, image: gongura },
  { id: "lemon", name: "Nimmakaya", tagline: "Sun-cured lemon, aged 21 days", price: 279, heat: 2, image: lemon },
  { id: "garlic", name: "Velluli", tagline: "Whole garlic in red masala", price: 319, heat: 2, image: garlic },
  { id: "tomato", name: "Tomato", tagline: "Roasted tomato relish", price: 269, heat: 1, image: tomato },
];

const WA_NUMBER = "919247572846";

function waLink(productName?: string) {
  const msg = productName
    ? `Hi spicy5, I'd like to order the ${productName} pickle.`
    : `Hi spicy5, I'd like to place an order.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Marquee />
      <Story />
      <Products />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#shop", label: "Shop" },
    { href: "#story", label: "Our Story" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="spicy5 logo" className="h-9 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 md:inline-flex"
        >
          Order on WhatsApp
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-5 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base text-foreground hover:bg-muted">
                {l.label}
              </a>
            ))}
            <a href={waLink()} target="_blank" rel="noreferrer" className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground">
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-20">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> From Guntur, with fire
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-balance text-ink sm:text-6xl lg:text-7xl">
            The pickle your grandmother
            <em className="block italic text-primary"> would approve of.</em>
          </h1>
          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            Small-batch Andhra pickles, handcrafted in Guntur with sun-dried spices,
            cold-pressed sesame oil, and the kind of patience that machines forget.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90">
              Shop the Jars
            </a>
            <a href="#story" className="inline-flex items-center justify-center rounded-full border border-primary/30 px-7 py-3.5 text-sm font-medium text-primary transition-all hover:bg-primary/5">
              Our Story →
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "12.6K+", v: "Happy households" },
              { k: "160+", v: "Batches crafted" },
              { k: "100%", v: "Authentic Guntur" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl text-primary">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full border border-primary/30 lg:block" />
          <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full bg-accent/20 lg:block" />
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl">
            <img
              src={hero}
              alt="A spread of Andhra pickles in glass jars with fresh red chilies"
              width={1600}
              height={1200}
              className="aspect-[5/6] w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-background/85 px-4 py-3 backdrop-blur">
              <p className="font-display text-lg italic text-ink">"The slow art of pickling."</p>
              <p className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">Est. tradition · Guntur, AP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Hygienically Processed", "Cold-Pressed Sesame Oil", "Sun-Dried Spices", "Pan-India Shipping", "Worldwide Delivery", "No Preservatives"];
  return (
    <div className="border-y border-border bg-secondary/60 py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:px-8">
        {items.map((i) => (
          <span key={i} className="flex items-center gap-3">
            <span className="text-primary">✦</span> {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function Story() {
  return (
    <section id="story" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Our Story</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Three generations.<br />One jar at a time.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-7">
          <p>
            In the heart of Guntur — where the soil is red, the chilies are redder, and
            summer afternoons smell of mustard and methi — our family has been making
            pickles for as long as anyone can remember.
          </p>
          <p>
            <span className="font-medium text-foreground">spicy5</span> is what happens when that
            recipe finally leaves the kitchen. We still hand-cut every mango. We still sun-dry
            the spices on the terrace. We still wait twenty-one days before sealing a jar.
            The only thing that's new is that you can now order it from your phone.
          </p>
          <p className="font-display text-2xl italic text-primary">
            "Real flavour cannot be rushed."
          </p>
        </div>
      </div>
    </section>
  );
}

function HeatMeter({ level }: { level: 1 | 2 | 3 }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Heat level ${level} of 3`}>
      {[1, 2, 3].map((i) => (
        <span key={i} className={i <= level ? "text-primary" : "text-border"}>
          ◆
        </span>
      ))}
    </span>
  );
}

function Products() {
  return (
    <section id="shop" className="border-t border-border bg-cream/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">The Collection</span>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Six jars, six stories.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Each jar is 300g — enough for a month of meals, or a week of unapologetic indulgence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article key={p.id} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <div className="relative overflow-hidden bg-secondary/40">
                <img
                  src={p.image}
                  alt={`${p.name} pickle jar`}
                  loading="lazy"
                  width={1000}
                  height={1000}
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
                  300g jar
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl text-ink">{p.name}</h3>
                  <HeatMeter level={p.heat} />
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.tagline}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span className="font-display text-2xl text-primary">₹{p.price}</span>
                  <a
                    href={waLink(p.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-primary px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-primary-foreground transition-all hover:opacity-90"
                  >
                    Order
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Hand-picked", d: "Raw mangoes and chilies sourced directly from Guntur farms, chosen for ripeness, not price." },
    { n: "02", t: "Sun-cured", d: "Spices dried on terrace floors under the Andhra sun for 3 days — never machine-dried." },
    { n: "03", t: "Slow-pickled", d: "Layered with cold-pressed sesame oil, sealed in glass, and rested for 21 days." },
    { n: "04", t: "Shipped fresh", d: "Tamper-proof jars, unboxing-mandatory packaging, delivered across India and worldwide." },
  ];
  return (
    <section id="process" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="max-w-2xl">
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">The Craft</span>
        <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
          How a jar of spicy5 is made.
        </h2>
      </div>
      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="flex flex-col bg-card p-7">
            <span className="font-display text-5xl text-primary/30">{s.n}</span>
            <h3 className="mt-6 font-display text-xl text-ink">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { q: "Tastes exactly like my ammamma's avakaya. I almost cried.", a: "Lavanya R.", c: "Bengaluru" },
    { q: "Shipped to New Jersey in five days. The seal was perfect. The pickle, even better.", a: "Karthik M.", c: "USA" },
    { q: "I bought one jar. I came back for six. My family demanded it.", a: "Priya S.", c: "Hyderabad" },
  ];
  return (
    <section className="border-y border-border bg-cream/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
            From our table<br />to yours.
          </h2>
          <span className="hidden text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground sm:block">12.6K+ followers</span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.a} className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8">
              <span className="font-display text-5xl leading-none text-primary">"</span>
              <blockquote className="font-display text-xl leading-snug text-ink">
                {r.q}
              </blockquote>
              <figcaption className="mt-auto border-t border-border pt-4 text-sm">
                <div className="font-medium text-foreground">{r.a}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{r.c}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16 sm:py-24">
        <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full border border-primary-foreground/15" />
        <div className="absolute -bottom-16 -right-10 h-64 w-64 rounded-full border border-primary-foreground/10" />
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground/70">Order Direct</span>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight text-balance sm:text-6xl">
          One message. One jar.<br />A whole season of meals.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base text-primary-foreground/80">
          We take every order on WhatsApp — so you can ask questions, customise heat,
          or just say hi before you buy.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-medium text-primary transition-all hover:opacity-90"
          >
            <span className="text-lg">✆</span> WhatsApp +91 92475 72846
          </a>
          <a
            href="https://instagram.com/spicy5_"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-primary-foreground/40 px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10"
          >
            @spicy5_ on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-cream/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <img src={logo} alt="spicy5" className="h-10 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Authentic Andhra pickles, handcrafted in Guntur. Hygienically processed.
            Shipped across India and worldwide.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg text-ink">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#shop" className="hover:text-primary">Shop all pickles</a></li>
            <li><a href="#story" className="hover:text-primary">Our story</a></li>
            <li><a href="#process" className="hover:text-primary">How it's made</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-ink">Reach us</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Guntur, Andhra Pradesh, India</li>
            <li><a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp: +91 92475 72846</a></li>
            <li><a href="https://instagram.com/spicy5_" target="_blank" rel="noreferrer" className="hover:text-primary">Instagram: @spicy5_</a></li>
          </ul>
          <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
            Unboxing video mandatory for damage claims.
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} spicy5. Crafted in Guntur.</span>
          <span>Authentic · Hygienic · Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
