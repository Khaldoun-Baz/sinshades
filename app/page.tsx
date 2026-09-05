'use client';

import { type SyntheticEvent, useState } from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowRight, Check, Leaf, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const products = [
  {
    number: '01',
    name: 'Cream Blush',
    whisper: 'Cloud-soft color',
    description:
      'A buildable sweep of botanical color with a soft brush finish—made to melt into skin, never mask it.',
    image: '/images/sinshade-blush.png',
    className: 'product-card--tall',
  },
  {
    number: '02',
    name: 'Lip Gloss',
    whisper: 'Glass-like glow',
    description:
      'Juicy shine, cushiony comfort and a spectrum of wearable color for lips that catch every ray of light.',
    image: '/images/sinshade-lipgloss.png',
    className: 'product-card--wide',
  },
  {
    number: '03',
    name: 'Eyeshadow',
    whisper: '18 ways to bloom',
    description:
      'Velvety mattes and light-catching shimmers inspired by petals, berries and the warmest golden hour.',
    image: '/images/sinshade-eyeshadow.png',
    className: 'product-card--square',
  },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  function joinWaitlist(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setJoined(true);
  }

  return (
    <main>
      <div className="intro" aria-hidden="true">
        <span className="intro-mark">SinShade</span>
        <span className="intro-line" />
      </div>

      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="SinShade home">
          SinShade<span>®</span>
        </a>
        <div className="nav-note">
          <span className="status-dot" /> Coming soon
        </div>
        <a className="nav-link" href="#join">
          Join the first bloom <ArrowRight aria-hidden="true" />
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/images/sinshade-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-wash" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow reveal reveal--1">
            <Leaf aria-hidden="true" /> Botanical color, blooming soon
          </p>
          <h1 className="reveal reveal--2">
            Soft on skin.
            <em>Loud in color.</em>
          </h1>
          <p className="hero-description reveal reveal--3">
            Organic-inspired beauty made for your most radiant self. Dreamy
            pigments, glossy finishes, and a little everyday magic—coming soon.
          </p>
          <a className="hero-cta reveal reveal--4" href="#collection">
            Discover the first drop <ArrowDown aria-hidden="true" />
          </a>
        </div>

        <div
          className="hero-stamp reveal reveal--4"
          aria-label="Organic inspired beauty"
        >
          <span>ORGANIC INSPIRED • MADE TO GLOW • </span>
          <Sparkles aria-hidden="true" />
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>SS / 01</span>
          <span>BEIRUT — 2026</span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, group) => (
            <div className="ticker-group" key={group}>
              <span>Eyes that shimmer</span>
              <i>✦</i>
              <span>Lips that glow</span>
              <i>✦</i>
              <span>Cheeks that bloom</span>
              <i>✦</i>
              <span>Naturally you</span>
              <i>✦</i>
            </div>
          ))}
        </div>
      </div>

      <section className="manifesto" aria-labelledby="manifesto-title">
        <div className="manifesto-kicker">
          <span>Our glow code</span>
          <span>( Naturally radiant )</span>
        </div>
        <h2 id="manifesto-title">
          Beauty should feel as good as it <em>looks.</em>
        </h2>
        <div className="manifesto-body">
          <p>
            SinShade is a love letter to expressive color and thoughtful beauty.
            Our formulas are created with organic-derived ingredients and
            skin-loving textures that blend, build, and glow with you.
          </p>
          <ul aria-label="SinShade product values">
            <li>
              <Leaf aria-hidden="true" /> Organic-derived ingredients
            </li>
            <li>
              <Sparkles aria-hidden="true" /> Radiant, buildable payoff
            </li>
            <li>
              <Check aria-hidden="true" /> Made for everyday expression
            </li>
          </ul>
        </div>
      </section>

      <section
        className="collection"
        id="collection"
        aria-labelledby="collection-title"
      >
        <div className="section-heading">
          <p className="eyebrow">
            <Sparkles aria-hidden="true" /> The first drop
          </p>
          <h2 id="collection-title">
            Meet your new <em>obsessions.</em>
          </h2>
          <p>
            Three icons. Endless moods. Each one designed to layer, play, and
            make the look completely yours.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article
              className={`product-card ${product.className}`}
              key={product.name}
            >
              <div className="product-visual">
                <Image
                  src={product.image}
                  alt={`${product.name} by SinShade`}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
                <span className="product-number">{product.number}</span>
                <span className="product-whisper">{product.whisper}</span>
              </div>
              <div className="product-copy">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ingredient-story" aria-labelledby="ingredient-title">
        <div className="ingredient-orbit" aria-hidden="true">
          <span className="orbit orbit--1" />
          <span className="orbit orbit--2" />
          <span className="petal petal--1" />
          <span className="petal petal--2" />
          <span className="ingredient-word">GLOW</span>
        </div>
        <div className="ingredient-copy">
          <p className="eyebrow">
            <Leaf aria-hidden="true" /> Rooted in nature
          </p>
          <h2 id="ingredient-title">
            Plant-powered feel.
            <br />
            <em>High-impact finish.</em>
          </h2>
          <p>
            We pair organic-derived materials with modern color performance, so
            every swipe feels creamy, comfortable, and unmistakably SinShade.
          </p>
          <span className="fine-print">
            Thoughtful formulas • Dreamy textures • Joyful color
          </span>
        </div>
      </section>

      <section className="join" id="join" aria-labelledby="join-title">
        <div className="join-halo" aria-hidden="true" />
        <div className="join-content">
          <p className="eyebrow">
            <Sparkles aria-hidden="true" /> Get first shade
          </p>
          <h2 id="join-title">
            Your glow is
            <br />
            <em>almost here.</em>
          </h2>
          <p>
            Be first to meet the collection, unlock launch-day surprises, and
            hear when the doors to SinShade officially open.
          </p>

          {joined ? (
            <output className="success-message">
              <span>
                <Check aria-hidden="true" />
              </span>
              <div>
                <strong>You’re on the glow list.</strong>
                <small>We’ll meet you at launch.</small>
              </div>
            </output>
          ) : (
            <form className="join-form" onSubmit={joinWaitlist}>
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                required
                aria-label="Email address"
              />
              <Button type="submit" size="lg">
                Tell me first <ArrowRight aria-hidden="true" />
              </Button>
            </form>
          )}
          <small className="privacy-note">
            Only beautiful news. No spam, ever.
          </small>
        </div>

        <div className="domain-lockup" aria-label="SinShade website">
          <span>Our online store will be live soon</span>
          <a href="https://sinshade.shop">sinshade.shop</a>
        </div>
      </section>

      <footer>
        <a className="wordmark wordmark--footer" href="#top">
          SinShade<span>®</span>
        </a>
        <p>Organic-inspired color for every shade of you.</p>
        <div>
          <span>© 2026 SinShade</span>
          <a href="mailto:hello@sinshade.shop">hello@sinshade.shop</a>
        </div>
      </footer>
    </main>
  );
}
