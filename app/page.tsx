import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Compass,
  Leaf,
  MapPin,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";

const whatsapp = "https://wa.me/919237312521";

const destinations = [
  {
    name: "Daringbadi",
    type: "Hill country",
    detail: "Coffee gardens, waterfalls and cool mountain air.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
    className: "destination-card--tall",
  },
  {
    name: "Chilika Lake",
    type: "Coastal escape",
    detail: "Island sunsets and the open waters of Asia's largest lagoon.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85",
    className: "",
  },
  {
    name: "Mukteshwar",
    type: "Living heritage",
    detail: "A quiet morning among the stonework of old Bhubaneswar.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/Mukteshwar_Temple_Bhubaneswar.jpg",
    className: "",
  },
  {
    name: "Bhitarkanika",
    type: "Wild Odisha",
    detail: "Follow winding creeks through one of India's great mangrove forests.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/Bhitarkanika_Wildlife_Sanctuary%2C_2015_%282%29.jpg",
    className: "destination-card--wide",
  },
];

const journeys = [
  {
    number: "01",
    title: "Jagannath Leela Kshetra",
    type: "Sacred Odisha",
    duration: "1 night / 2 days",
    group: "4–7 travellers",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    title: "Daringbadi Nature Trail",
    type: "Hills & waterfalls",
    duration: "1 night / 2 days",
    group: "Private departures",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    title: "Satakosia Wild Tour",
    type: "River & forest",
    duration: "1 night / 2 days",
    group: "Small groups",
    image:
      "https://images.unsplash.com/photo-1443632864897-14973fa006cf?auto=format&fit=crop&w=1000&q=85",
  },
];

const faqs = [
  {
    question: "Can you create a trip around our dates and interests?",
    answer:
      "Yes. Every itinerary can be adapted around your travel dates, group size and the places or experiences you care about most.",
  },
  {
    question: "Where do ERAS trips start from?",
    answer:
      "Most journeys can begin in Bhubaneswar. Share your arrival details when you enquire and the team can help coordinate the route.",
  },
  {
    question: "Are the packages suitable for families?",
    answer:
      "Many routes work well for families and mixed-age groups. ERAS can suggest a comfortable pace and stops to suit your travellers.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><span />{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="utility-bar">
        <div className="utility-inner">
          <a href="tel:+919237312521"><Phone size={14} /> +91 92373 12521</a>
          <span className="utility-note"><MapPin size={14} /> Bhubaneswar, Odisha</span>
          <a className="utility-email" href="mailto:tourism.eras@gmail.com">tourism.eras@gmail.com</a>
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="ERAS Tourism home">
          <span className="brand-mark"><Compass size={27} strokeWidth={1.6} /></span>
          <span className="brand-copy"><strong>ERAS <em>TOURISM</em></strong><small>AN ODISHA BASED HOLIDAY IDEA COMPANY</small></span>
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#about">Our story</a><a href="#places">Destinations</a><a href="#journeys">Journeys</a><a href="#contact">Contact</a>
          </nav>
        </details>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">Our story</a><a href="#places">Places</a><a href="#journeys">Journeys</a><a href="#faq">FAQs</a>
        </nav>
        <a className="header-cta" href={`${whatsapp}?text=Hello%20ERAS%20Tourism%2C%20I%27d%20like%20to%20plan%20a%20trip.`}>Plan a trip <ArrowUpRight size={16} /></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" role="img" aria-label="Waterways winding through the mangroves of Bhitarkanika" />
          <div className="hero-shade" />
          <div className="hero-content">
            <span className="hero-kicker"><span className="kicker-line" /> Odisha, at your own pace</span>
            <h1>Somewhere<br />between <i>wild</i> and<br />wonderful.</h1>
            <p>Temple towns, forest trails and salt-air mornings. Find the Odisha that stays with you.</p>
            <div className="hero-actions">
              <a className="button button--lime" href="#places">Find your somewhere <ArrowRight size={17} /></a>
              <a className="hero-text-link" href="#about">Meet your local hosts <ArrowDown size={15} /></a>
            </div>
          </div>
          <div className="hero-caption"><span>01 / 04</span><span>Bhitarkanika · Kendrapara</span></div>
          <a className="hero-scroll" href="#welcome"><span>Scroll to explore</span><ArrowDown size={15} /></a>
          <div className="hero-stamp"><Sparkles size={17} /><span>Locally<br />imagined</span></div>
        </section>

        <section className="welcome section-wrap" id="welcome">
          <div className="welcome-label"><span className="label-rule" /> A different kind of Odisha</div>
          <p>Not just a place to visit.<br /><em>A feeling to take home.</em></p>
          <a href="#about" aria-label="Read our story"><ArrowDown size={19} /></a>
        </section>

        <section className="values-band" aria-label="What makes an ERAS journey">
          <div className="value-item"><span className="value-icon"><MapPin size={19} /></span><span><strong>Local, always</strong><small>People who know the way</small></span></div>
          <div className="value-item"><span className="value-icon"><Leaf size={19} /></span><span><strong>Made for you</strong><small>Thoughtful, flexible plans</small></span></div>
          <div className="value-item"><span className="value-icon"><Sparkles size={19} /></span><span><strong>A little unexpected</strong><small>Beyond the usual itinerary</small></span></div>
          <div className="value-item"><span className="value-icon"><Users size={19} /></span><span><strong>Here when it matters</strong><small>Care from start to finish</small></span></div>
        </section>

        <section className="story-section section-wrap" id="about">
          <div className="story-visual">
            <div className="story-photo story-photo--main" role="img" aria-label="Mukteshwar Temple in Bhubaneswar" />
            <div className="story-photo story-photo--small" role="img" aria-label="Waterfall in Odisha's green hills" />
            <div className="story-note"><span>ଓଡ଼ିଶା</span><small>Our home.<br />Your next story.</small></div>
            <span className="story-vertical">MADE WITH LOCAL KNOW-HOW</span>
          </div>
          <div className="story-copy">
            <span className="eyebrow"><span /> The ERAS way</span>
            <h2>Good journeys<br />begin with <i>good people.</i></h2>
            <p>We’re an Odisha-based holiday idea company, here to help you see our home a little differently. The famous places are only the beginning.</p>
            <p>With local coordination, thoughtful routes and room for the unexpected, we shape each holiday around what brings you here.</p>
            <a className="underlined-link" href="#contact">A little more about us <ArrowRight size={16} /></a>
            <div className="story-stats"><span><strong>Odisha</strong><small>Rooted here</small></span><span><strong>Your pace</strong><small>Always personal</small></span><span><strong>Real places</strong><small>Local connections</small></span></div>
          </div>
        </section>

        <section className="places-section" id="places">
          <div className="section-wrap">
            <div className="places-heading-row">
              <SectionHeading eyebrow="A map with more to it" title="Where will the road take you?" description="From cool hill mornings to ancient stone courtyards, Odisha has many ways of saying welcome." />
              <a className="underlined-link places-all" href="#journeys">See all journeys <ArrowRight size={16} /></a>
            </div>
            <div className="destination-grid">
              {destinations.map((destination, index) => (
                <a className={`destination-card ${destination.className}`} href="#contact" key={destination.name}>
                  <div className="destination-image" style={{ backgroundImage: `url("${destination.image}")` }} />
                  <div className="destination-shade" />
                  <span className="destination-number">0{index + 1}</span>
                  <span className="destination-arrow"><ArrowUpRight size={17} /></span>
                  <div className="destination-copy"><small>{destination.type}</small><h3>{destination.name}</h3><p>{destination.detail}</p></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="royal-section">
          <div className="royal-photo" role="img" aria-label="Heritage palace in Odisha" />
          <div className="royal-content">
            <span className="eyebrow eyebrow--light"><span /> A stay with a story</span>
            <h2>Sleep inside<br />the <i>old stories.</i></h2>
            <p>Open the doors to Odisha’s royal past with thoughtfully hosted stays at Aul Palace and Dhenkanal Palace.</p>
            <div className="palace-list"><span><strong>Aul Palace</strong><small>Kendrapara · Royal homestay</small></span><span><strong>Dhenkanal Palace</strong><small>Dhenkanal · Heritage stay</small></span></div>
            <a className="button button--outline" href={`${whatsapp}?text=Hello%20ERAS%20Tourism%2C%20I%27m%20interested%20in%20a%20royal%20heritage%20stay.`}>Ask about a heritage stay <ArrowRight size={17} /></a>
          </div>
          <span className="royal-index">A PLACE TO REMEMBER · 02</span>
        </section>

        <section className="journeys-section section-wrap" id="journeys">
          <div className="journeys-top">
            <SectionHeading eyebrow="A good place to start" title="Journeys with a little more soul." description="A few of our favourite ways into Odisha. We’ll take care of the details; you bring your curiosity." />
            <a className="underlined-link" href={`${whatsapp}?text=Hello%20ERAS%20Tourism%2C%20please%20share%20your%20journey%20options.`}>Ask for the full collection <ArrowRight size={16} /></a>
          </div>
          <div className="journey-grid">
            {journeys.map((journey) => (
              <article className="journey-card" key={journey.number}>
                <div className="journey-image" style={{ backgroundImage: `url("${journey.image}")` }}><span>{journey.type}</span><span className="journey-index">{journey.number}</span></div>
                <div className="journey-info"><h3>{journey.title}</h3><div className="journey-meta"><span><Clock3 size={14} />{journey.duration}</span><span><Users size={14} />{journey.group}</span></div><a href={`${whatsapp}?text=${encodeURIComponent(`Hello ERAS Tourism, please tell me more about ${journey.title}.`)}`}>Explore this journey <ArrowRight size={15} /></a></div>
              </article>
            ))}
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-mark">“</div>
          <p>Odisha you know is not<br />the Odisha <i>we know.</i></p>
          <span>Come see it with us.</span>
          <a href="#places" aria-label="Discover Odisha"><ArrowDown size={18} /></a>
          <div className="quote-landscape" />
        </section>

        <section className="faq-contact section-wrap" id="faq">
          <div className="faq-column">
            <SectionHeading eyebrow="A few useful things" title="Before you set off." />
            <div className="faq-list">
              {faqs.map((faq) => <details className="faq-item" key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}
            </div>
          </div>
          <div className="contact-panel" id="contact">
            <span className="contact-icon"><Compass size={24} /></span>
            <span className="eyebrow"><span /> Your next story starts here</span>
            <h2>Tell us what<br />you’re <i>looking for.</i></h2>
            <p>A weekend away, a family holiday, or a place you’ve always wanted to see. We’d love to help you find your way.</p>
            <a className="button button--dark" href={`${whatsapp}?text=Hello%20ERAS%20Tourism%2C%20I%27d%20like%20to%20plan%20a%20trip%20to%20Odisha.`}>Chat with our team <ArrowUpRight size={17} /></a>
            <a className="contact-phone" href="tel:+919237312521">Or call +91 92373 12521</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand brand--footer" href="#home"><span className="brand-mark"><Compass size={26} strokeWidth={1.6} /></span><span className="brand-copy"><strong>ERAS <em>TOURISM</em></strong><small>AN ODISHA BASED HOLIDAY IDEA COMPANY</small></span></a>
          <p>Rediscover Odisha with<br />a little help from home.</p>
          <div className="footer-links"><a href="#about">Our story</a><a href="#places">Destinations</a><a href="#journeys">Journeys</a><a href="#faq">FAQs</a></div>
          <div className="footer-contact"><a href="mailto:tourism.eras@gmail.com">tourism.eras@gmail.com</a><a href="tel:+919237312521">+91 92373 12521</a><span>Bhubaneswar, Odisha</span></div>
        </div>
        <div className="footer-bottom"><span>© 2026 ERAS Tourism</span><span>Thoughtfully travelling, together.</span><a href="#home">Back to top ↑</a></div>
      </footer>
      <a className="whatsapp-float" href={`${whatsapp}?text=Hello%20ERAS%20Tourism%2C%20I%27d%20like%20to%20plan%20a%20trip.`} aria-label="Chat with ERAS Tourism on WhatsApp"><Phone size={19} /></a>
    </>
  );
}
