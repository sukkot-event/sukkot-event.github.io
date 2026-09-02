import Image from 'next/image';
import type { CSSProperties } from 'react';
import {
  ArrowUp,
  Baby,
  Blocks,
  CalendarDays,
  CalendarPlus,
  Clock3,
  Drum,
  Gamepad2,
  MapPin,
  Navigation,
  Palette,
  PartyPopper,
  Popcorn,
  Puzzle,
  Sparkles,
  Sun,
  Ticket,
} from 'lucide-react';
import { ScrollEffects } from './scroll-effects';

const WAZE_URL =
  'https://www.waze.com/ul?q=%D7%A4%D7%90%D7%A8%D7%A7%20%D7%A0%D7%97%D7%9C%20%D7%91%D7%90%D7%A8%20%D7%A9%D7%91%D7%A2&navigate=yes';
const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=%D7%A4%D7%90%D7%A8%D7%A7%20%D7%A0%D7%97%D7%9C%20%D7%91%D7%90%D7%A8%20%D7%A9%D7%91%D7%A2';
const ICS_URL = '/event/sukkot-baagam.ics';

const vars = (v: Record<string, string | number>) => v as CSSProperties;

const activities = [
  {
    title: 'עמדות משחק',
    text: 'עמדות פתוחות שמזמינות את כל המשפחה לשחק יחד.',
    Icon: Gamepad2,
    tint: 'var(--tint-yellow)',
    chip: 'var(--yellow)',
    chipInk: 'var(--ink)',
    wide: true,
  },
  {
    title: 'פינות יצירה',
    text: 'צובעים, גוזרים ומדביקים. יוצאים הביתה עם יצירה ביד.',
    Icon: Palette,
    tint: 'var(--tint-pink)',
    chip: 'var(--pink)',
    wide: true,
  },
  {
    title: 'ג׳ימבורי',
    text: 'מתחם רך ובטוח לזחילה, קפיצה וגלגולים.',
    Icon: Blocks,
    tint: 'var(--tint-teal)',
    chip: 'var(--teal)',
  },
  {
    title: 'שולחנות משחק',
    text: 'עוברים, מתיישבים, משחקים.',
    Icon: Puzzle,
    tint: 'var(--tint-purple)',
    chip: 'var(--purple)',
  },
  {
    title: 'סדנת תיפוף',
    text: 'קצב חי, תופים ביד וכל הפארק מנגן.',
    Icon: Drum,
    tint: 'var(--tint-orange)',
    chip: 'var(--orange)',
  },
  {
    title: 'דמויות שטח',
    text: 'דמויות אהובות מסתובבות במתחם ומצטלמות עם הילדים.',
    Icon: PartyPopper,
    tint: 'var(--tint-green)',
    chip: 'var(--green)',
    wide: true,
  },
  {
    title: 'דוכני מכירה של אוכל',
    text: 'אוכל, פופקורן ושיערות סבתא.',
    Icon: Popcorn,
    tint: 'var(--tint-blue)',
    chip: 'var(--blue)',
    wide: true,
  },
];

const goodToKnow = [
  {
    title: 'הכניסה חופשית',
    text: 'פתוח לכל המשפחה, בלי כרטיסים ובלי הרשמה.',
    Icon: Ticket,
    tint: 'var(--tint-yellow)',
    color: 'var(--orange)',
  },
  {
    title: 'שעות האירוע',
    text: 'יום שלישי 29.9, בין 10:00 ל־14:00, בפארק נחל באר שבע.',
    Icon: Clock3,
    tint: 'var(--tint-pink)',
    color: 'var(--pink)',
  },
  {
    title: 'מתאים מהגיל הרך',
    text: 'ג׳ימבורי לקטנטנים, משחקים ויצירה לכל הגילים.',
    Icon: Baby,
    tint: 'var(--tint-teal)',
    color: 'var(--teal)',
  },
  {
    title: 'כמה שעות בשמש',
    text: 'מומלץ להגיע עם כובע, קרם הגנה ובקבוק מים.',
    Icon: Sun,
    tint: 'var(--tint-green)',
    color: 'var(--green-deep)',
  },
];

export default function Home() {
  return (
    <>
      <ScrollEffects />

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="סוכות באגם, לראש העמוד">
            <Image
              src="/event/event-title.webp"
              alt="סוכות באגם"
              width={1200}
              height={738}
              priority
            />
            <span>באר שבע · 29.9</span>
          </a>

          <nav className="header-nav" aria-label="ניווט ראשי">
            <a href="#lineup">על הבמה</a>
            <a href="#activities">מה קורה</a>
            <a href="#know">טוב לדעת</a>
          </nav>

          <div className="header-actions">
            <a className="btn btn--light btn--sm" href={ICS_URL} download>
              <CalendarPlus aria-hidden="true" />
              הוספה ליומן
            </a>
            <a
              className="btn btn--primary btn--sm hide-mobile"
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Navigation aria-hidden="true" />
              ניווט
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero ---------------------------------------------------------- */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-bg" aria-hidden="true">
            <Image
              src="/event/park-background.webp"
              alt=""
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="hero-veil" aria-hidden="true" />

          <div className="container hero-inner">
            <div className="hero-copy">
              <h1 id="hero-title" className="hero-logo">
                <Image
                  src="/event/event-title.webp"
                  alt="אירוע סוכות באגם"
                  width={1200}
                  height={738}
                  priority
                />
              </h1>

              <p className="hero-lead">
                ארבע שעות של מופעי ילדים, משחקים, יצירה וקצב בלב פארק נחל באר
                שבע.
              </p>

              <ul className="fact-pills" aria-label="פרטי האירוע">
                <li className="pill pill--teal">
                  <CalendarDays aria-hidden="true" />
                  יום שלישי · <span dir="ltr">29.9</span>
                </li>
                <li className="pill pill--pink">
                  <Clock3 aria-hidden="true" />
                  10:00–14:00
                </li>
                <li className="pill pill--purple">
                  <MapPin aria-hidden="true" />
                  פארק נחל באר שבע
                </li>
                <li className="pill pill--yellow">
                  <Ticket aria-hidden="true" />
                  כניסה חופשית
                </li>
              </ul>

              <div className="hero-actions">
                {/* desktop opens Google Maps, phones keep Waze */}
                <a
                  className="btn btn--primary hide-mobile"
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Navigation aria-hidden="true" />
                  ניווט לפארק
                </a>
                <a
                  className="btn btn--primary hide-desktop"
                  href={WAZE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Navigation aria-hidden="true" />
                  ניווט לפארק
                </a>
                <a className="btn btn--light" href={ICS_URL} download>
                  <CalendarPlus aria-hidden="true" />
                  הוספה ליומן
                </a>
              </div>
            </div>

            <div className="hero-cast" aria-hidden="true">
              <Image
                className="cast-miki"
                src="/event/miki-cutout.webp"
                alt=""
                width={1000}
                height={1374}
                priority
              />
              <Image
                className="cast-paw"
                src="/event/paw-patrol-cutout.webp"
                alt=""
                width={963}
                height={1317}
                priority
              />
            </div>
          </div>
        </section>

        <div className="sheet">
          {/* Lineup ------------------------------------------------------ */}
          <section
            className="section"
            id="lineup"
            aria-labelledby="lineup-title"
          >
            <div className="container">
              <header className="section-head" data-reveal>
                <p className="eyebrow" style={vars({ '--dot': 'var(--pink)' })}>
                  על הבמה
                </p>
                <h2 id="lineup-title" className="section-title">
                  כוכבים שהילדים אוהבים.
                </h2>
              </header>

              <div className="star-grid">
                <article
                  className="star-card star-card--miki"
                  data-reveal
                >
                  <div className="star-logo">
                    <Image
                      src="/event/miki-logo.webp"
                      loading="eager"
                      alt="מיקי"
                      width={1200}
                      height={751}
                    />
                  </div>
                  <Image
                    className="star-figure"
                    src="/event/miki-cutout.webp"
                    loading="eager"
                    alt=""
                    width={1000}
                    height={1374}
                    aria-hidden="true"
                  />
                  <div className="star-text">
                    <h3>מיקי</h3>
                    <p>
                      שירים, ריקודים והמון אנרגיה עם הכוכבת שהילדים הכי
                      אוהבים.
                    </p>
                    <span className="star-tag">
                      <Sparkles aria-hidden="true" />
                      מופע חי על הבמה
                    </span>
                  </div>
                </article>

                <article
                  className="star-card star-card--paw"
                  data-reveal
                >
                  <div className="star-logo">
                    <Image
                      src="/event/paw-patrol-logo.webp"
                      loading="eager"
                      alt="מפרץ ההרפתקאות"
                      width={900}
                      height={854}
                    />
                  </div>
                  <Image
                    className="star-figure star-figure--paw"
                    src="/event/paw-patrol-cutout.webp"
                    loading="eager"
                    alt=""
                    width={963}
                    height={1317}
                    aria-hidden="true"
                  />
                  <div className="star-text">
                    <h3>מפרץ ההרפתקאות</h3>
                    <p>
                      צ׳ייס, מרשל, סקאי וריידר יוצאים למשימה חדשה, הפעם על
                      הבמה בפארק.
                    </p>
                    <span className="star-tag">
                      <Sparkles aria-hidden="true" />
                      מופע חי על הבמה
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Activities -------------------------------------------------- */}
          <section
            className="section section--tinted"
            id="activities"
            aria-labelledby="activities-title"
          >
            <div className="container">
              <header className="section-head" data-reveal>
                <p className="eyebrow" style={vars({ '--dot': 'var(--teal)' })}>
                  מה קורה במתחם
                </p>
                <h2
                  id="activities-title"
                  className="section-title section-title--sm"
                >
                  שבעה מתחמים פתוחים לקטנטנים ולכל המשפחה.
                </h2>
              </header>

              <ul className="act-grid">
                {activities.map(
                  ({ title, text, Icon, tint, chip, chipInk, wide }) => (
                    <li
                      key={title}
                      className={`act-card${wide ? ' act-card--wide' : ''}`}
                      data-reveal
                      style={vars({
                        '--tint': tint,
                        '--chip': chip,
                        '--chip-ink': chipInk ?? '#fff',
                      })}
                    >
                      <span className="act-icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </section>

          {/* Good to know ------------------------------------------------ */}
          <section
            className="section section--last"
            id="know"
            aria-labelledby="know-title"
          >
            <div className="container know">
              <header className="section-head know-head" data-reveal>
                <p className="eyebrow" style={vars({ '--dot': 'var(--orange)' })}>
                  טוב לדעת
                </p>
                <h2 id="know-title" className="section-title">
                  באים חופשי.
                  <br />
                  <em style={{ color: 'var(--orange)' }}>נשארים כמה שרוצים.</em>
                </h2>
                <p className="section-lead">
                  כל מה שכדאי לדעת לפני שיוצאים מהבית.
                </p>
                <a className="btn btn--light know-cta" href={ICS_URL} download>
                  <CalendarPlus aria-hidden="true" />
                  שמרו את התאריך ביומן
                </a>
              </header>

              <ul className="know-list">
                {goodToKnow.map(({ title, text, Icon, tint, color }) => (
                  <li
                    key={title}
                    className="know-item"
                    data-reveal
                    style={vars({ '--tint': tint, '--chip': color })}
                  >
                    <span className="know-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Finale -------------------------------------------------------- */}
        <section className="finale" aria-labelledby="finale-title">
          <div className="container finale-inner" data-reveal>
            <h2 id="finale-title">נתראה באגם.</h2>
            <p className="finale-meta">
              יום שלישי <span dir="ltr">29.9</span> ·{' '}
              10:00–14:00 · פארק נחל באר שבע · הכניסה
              חופשית
            </p>
            <div className="finale-actions">
              <a
                className="btn btn--yellow hide-mobile"
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
              >
                <Navigation aria-hidden="true" />
                ניווט לפארק
              </a>
              <a
                className="btn btn--yellow hide-desktop"
                href={WAZE_URL}
                target="_blank"
                rel="noreferrer"
              >
                <Navigation aria-hidden="true" />
                ניווט לפארק
              </a>
              <a className="btn btn--ghost" href={ICS_URL} download>
                <CalendarPlus aria-hidden="true" />
                הוספה ליומן
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Image
            src="/event/sponsors.webp"
            alt="עיריית באר שבע וקרן קיימת לישראל"
            width={1600}
            height={480}
          />
          <p className="footer-meta">
            סוכות באגם · אירוע משפחתי בפארק נחל באר שבע
          </p>
          <a className="to-top" href="#top">
            <ArrowUp aria-hidden="true" />
            חזרה למעלה
          </a>
        </div>
      </footer>
    </>
  );
}
