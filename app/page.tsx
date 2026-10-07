import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Leaf,
  MapPin,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import HeroSlider from "./hero-slider";
import EnquiryForm from "./enquiry-form";
import FeedbackForm from "./feedback-form";
import TravelChat from "./travel-chat";

const whatsapp = "https://wa.me/917749074686";

const destinations: { name: string; type: string; detail: string; image?: string; className: string }[] = [
  {
    name: "Daringbadi",
    type: "Hill country",
    detail: "Coffee gardens, waterfalls and cool mountain air.",
    image: "/daringbadi/destination-stream.jpeg",
    className: "destination-card--tall",
  },
  {
    name: "Chilika Lake",
    type: "Coastal escape",
    detail: "Island sunsets and the open waters of Asia's largest lagoon.",
    image: "/chilika/reed-channel.jpeg",
    className: "",
  },
  {
    name: "Manikapatna",
    type: "Living heritage",
    detail: "Local legend recalls Manika offering curd to Jagannath and Balabhadra. Archaeology points to Manikapatna’s past as a trading port.",
    image: "/destinations/manikapatana.jpeg",
    className: "",
  },
  {
    name: "Bhitarkanika",
    type: "Wild Odisha",
    detail: "Follow winding creeks through one of India's great mangrove forests.",
    image: "/wildlife/bhitarkanika-boat.jpeg",
    className: "destination-card--wide",
  },
];

type Journey = {
  number: string;
  title: string;
  type: string;
  duration: string;
  group: string;
  image?: string;
  contact: string;
  routes: { name: string; days: string[] }[];
  gallery?: { src: string; alt: string }[];
};

const journeys: Journey[] = [
  {
    number: "01",
    title: "Jagannath Leela Kshetra Darshan",
    type: "Sacred circuit",
    duration: "1 night / 2 days",
    group: "4–7 travellers",
    image: "/jagannath/rath-yatra.jpeg",
    contact: "917749074686",
    routes: [
      {
        name: "Route 1",
        days: [
          "Khurdagada, Gadamanatira and Jaguleipatana before lunch; Kankan Sikhari after lunch. Overnight halt at Balugaon.",
          "Charanchaka, Dev Bannur, Niladriprasad and Bhagabati before lunch; Chikili and Marada after lunch. Return to Bhubaneswar.",
        ],
      },
      {
        name: "Route 2",
        days: [
          "Kapileswarpur, Allarnath, Bentapur and Baliharachandi before lunch; Gadakokal after lunch. Overnight halt at Brahmagiri.",
          "Gurubai, Mahisa and Brahmapura before lunch; lunch at Satapada, then Manikapatana and Bhabakundaleswar. Return to Bhubaneswar.",
        ],
      },
    ],
  },
  {
    number: "02",
    title: "Daringbadi Nature Tour",
    type: "Hills & waterfalls",
    duration: "1 night / 2 days",
    group: "Via Aska & Soroda",
    image: "/daringbadi/waterfall.jpeg",
    contact: "917749074686",
    routes: [{ name: "Day by day", days: [
      "Depart Bhubaneswar at 6:30 am. Visit Dharakote Palace and Balakumari Temple on the way to Daringbadi. After lunch: Hill View Park, Butterfly Zone and Coffee Garden. Overnight in Daringbadi.",
      "Visit Dasingbadi and Kissubadi waterfalls before lunch. Continue to Lovers Point, Silent Valley, Urmargarh Waterfall and Sunset Point, then return to Bhubaneswar.",
    ] }],
  },
  {
    number: "03",
    title: "Satakosia Wild Tour",
    type: "River & forest",
    duration: "1 night / 2 days",
    group: "Wildlife & boating",
    image: "/satakosia/river-sunset.jpeg",
    contact: "917749074686",
    routes: [{ name: "Day by day", days: [
      "Visit Kantilo, Gokulananda and Champanath. Continue to Satakosia Hill Resort, then explore Satakosia Gorge with boating and sunset. Overnight at the resort.",
      "Visit Tikarpada and Sisupathar Dam, then Bhimadhara Waterfall and Deojhar before returning to Bhubaneswar.",
    ] }],
  },
  {
    number: "04",
    title: "Baideswar Eco Heritage Tour",
    type: "Temple & river",
    duration: "1 night / 2 days",
    group: "Heritage & nature camp",
    image: "/baideswar/river-camp.jpeg",
    contact: "917749074686",
    routes: [{ name: "Day by day", days: [
      "Visit Jaguleipatana and Atri hot spring before reaching Baideswar Nature Camp. See Ramanath and Baidyanath temples. After lunch, visit Singhanath Temple and boat on the Mahanadi at sunset. Overnight at the camp.",
      "Visit Bhitarkanika and Badamba Royal Palace before lunch. Continue to Sabarapalli, Nilamadhaba Temple and the museum, with Mahanadi boating, then return to Bhubaneswar.",
    ] }],
  },
  {
    number: "05",
    title: "Mahendragiri Eco Adventure Tour",
    type: "Mountain & adventure",
    duration: "1 night / 2 days",
    group: "Temples & waterfalls",
    image: "/mahendragiri/stupa.jpeg",
    contact: "917749074686",
    routes: [{ name: "Day by day", days: [
      "Travel from Bhubaneswar toward Berhampur. Visit Taptapani hot spring and Lakhari Wildlife Sanctuary, then Chandragiri. After lunch, visit Zilang Monastery and Khasada Waterfall. Overnight at a hotel.",
      "Travel from Chandragiri toward Mahendragiri, visiting the Kunti, Yudhisthira and Bhima temples. Return via Gandahati Waterfall to Bhubaneswar.",
    ] }],
  },
  {
    number: "06",
    title: "Satapada Amazing Chilika Tour",
    type: "Lake & coastline",
    duration: "1 night / 2 days",
    group: "Chilika & dolphin trip",
    image: "/chilika/lake-boats.jpeg",
    contact: "917749074686",
    routes: [{ name: "Day by day", days: [
      "Travel from Bhubaneswar to Brahmagiri, visiting Alarnath, Baliharachandi and Bentapur before lunch. After lunch, visit Panchupandab temples: Bhimeswar, Yudhisthira, Arjuneswar, Sahadev and Nakul. Overnight at Brahmagiri.",
      "Travel to Satapada and visit Bhabakundaleswar Temple and the new mouth. Explore the eco park and Chilika Interpretation Centre, then enter Chilika Lake for dolphin watching and sunset at Satapada Jetty. Return to Bhubaneswar.",
    ] }],
  },
  {
    number: "07",
    title: "Festive & Cultural Odisha Tour",
    type: "Festival & culture",
    duration: "Festival dates vary",
    group: "Puri & local traditions",
    image: "/festive-cultural/festival-chariots-night.jpeg",
    contact: "917749074686",
    routes: [{ name: "Day by day", days: [
      "Depart Bhubaneswar for Puri. Explore the city's festival traditions and cultural landmarks. When dates align, the route can be timed around Rath Yatra or another public celebration. Overnight in Puri.",
      "Visit local cultural stops before returning to Bhubaneswar. Festival schedules, access and dates vary, so confirm the event calendar when enquiring.",
    ] }],
  },
  {
    number: "08",
    title: "Ethnic Village Tour",
    type: "Village & culture",
    duration: "1 night / 2 days",
    group: "Locally hosted visit",
    image: "/ethnic-village/village-hamlet.jpeg",
    contact: "917749074686",
    routes: [{ name: "Day by day", days: [
      "Travel from Bhubaneswar to a locally selected village area. Meet your local host, learn about the landscape and everyday community life, and stay overnight in pre-arranged accommodation.",
      "Join a morning walk through the village and surrounding countryside. Learn about local homes and livelihoods through conversation, with activities arranged by the community, then return to Bhubaneswar.",
    ] }],
  },
  {
    number: "09",
    title: "Wildlife Safari Tour",
    type: "Wildlife & safari",
    duration: "Day excursion",
    group: "Jeep safari",
    image: "/wildlife/chandaka-safari.jpeg",
    contact: "917749074686",
    routes: [{ name: "Day excursion", days: [
      "Depart Bhubaneswar for a nearby wildlife sanctuary and join a scheduled jeep safari through the forest. Return to Bhubaneswar; timings and access depend on sanctuary permissions and availability.",
    ] }],
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
          <a href="tel:+917749074686"><Phone size={14} /> +91 77490 74686</a>
          <span className="utility-note"><MapPin size={14} /> Bhubaneswar &amp; Khordha offices</span>
          <a className="utility-email" href="mailto:tourism.eras@gmail.com">tourism.eras@gmail.com</a>
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="ERAS Tourism home">
          <Image className="brand-logo" src="/Eras_Logo.png" alt="ERAS Tourism, a division of ERAS Creative & Tourism Service" width={1600} height={1276} priority />
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
        <HeroSlider />

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
            <div className="story-photo story-photo--main" role="img" aria-label="Stone temple from the Rare Temple tour" />
            <div className="story-photo story-photo--small" role="img" aria-label="White historic building from the Manu Mental tour" />
            <div className="story-note"><span>ଓଡ଼ିଶା</span><small>Our home.<br />Your next story.</small></div>
            <span className="story-vertical">MADE WITH LOCAL KNOW-HOW</span>
          </div>
          <div className="story-copy">
            <span className="eyebrow"><span /> The ERAS way</span>
            <h2>Good journeys<br />begin with <i>good people.</i></h2>
            <p>We’re an Odisha-based holiday idea company, here to help you see our home a little differently. The famous places are only the beginning.</p>
            <p>With local coordination, thoughtful routes and room for the unexpected, we shape each holiday around what brings you here.</p>
            <a className="underlined-link" href="#contact">A little more about us <ArrowRight size={16} /></a>
            <div className="story-stats"><span><strong>Odisha roots</strong><small>Local knowledge, from Bhubaneswar</small></span><span><strong>Your pace</strong><small>Flexible trips shaped around you</small></span><span><strong>Local connections</strong><small>Real places, experienced with local hosts</small></span></div>
          </div>
        </section>

        <section className="chandua-section" aria-labelledby="chandua-title">
          <div className="chandua-layout section-wrap">
            <div className="chandua-copy">
              <span className="eyebrow chandua-eyebrow"><span /> Pipili · Odisha</span>
              <h2 id="chandua-title">Colour stitched<br /><i>into tradition.</i></h2>
              <p>Pipili’s Chandua appliqué brings cut fabric and careful stitching together in vivid canopies, umbrellas and decorative hangings.</p>
            </div>
            <div className="chandua-art" role="img" aria-label="Original colorful medallion inspired by Pipili Chandua appliqué">
              <div className="chandua-art-inner" aria-hidden="true"><span className="chandua-rosette" /></div>
            </div>
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
                  {destination.image ? <div className="destination-image" style={{ backgroundImage: `url("${destination.image}")` }} /> : null}
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
          <div className="royal-stay-gallery" aria-label="Dhenkanal Palace photo gallery">
            <div className="royal-stay-image royal-stay-image--exterior"><Image src="/dhenkanal-palace/palace-exterior.jpeg" alt="The yellow and white exterior of Dhenkanal Palace" fill sizes="(max-width: 680px) 60vw, 36vw" /></div>
            <div className="royal-stay-image royal-stay-image--courtyard"><Image src="/dhenkanal-palace/palace-courtyard.jpeg" alt="The green courtyard at Dhenkanal Palace" fill sizes="(max-width: 680px) 30vw, 18vw" /></div>
            <div className="royal-stay-image royal-stay-image--hall"><Image src="/dhenkanal-palace/reception-hall.jpeg" alt="The reception hall inside Dhenkanal Palace" fill sizes="(max-width: 680px) 20vw, 12vw" /></div>
            <div className="royal-stay-image royal-stay-image--dining"><Image src="/dhenkanal-palace/dining-room.jpeg" alt="The dining room at Dhenkanal Palace" fill sizes="(max-width: 680px) 20vw, 12vw" /></div>
            <div className="royal-stay-image royal-stay-image--drawing-room"><Image src="/dhenkanal-palace/drawing-room.jpeg" alt="A furnished drawing room inside Dhenkanal Palace" fill sizes="(max-width: 680px) 20vw, 12vw" /></div>
          </div>
          <div className="royal-content">
            <span className="eyebrow eyebrow--light"><span /> A stay with a story</span>
            <h2>Sleep inside<br />the <i>old stories.</i></h2>
            <p>Open the doors to Odisha’s royal past with thoughtfully hosted stays at Aul Palace and Dhenkanal Palace.</p>
            <div className="palace-list"><span><strong>Aul Palace</strong><small>Kendrapara · Royal homestay</small></span><span><strong>Dhenkanal Palace</strong><small>Dhenkanal · Heritage stay</small></span></div>
            <a className="button button--outline" href={`${whatsapp}?text=${encodeURIComponent("Hello ERAS Tourism, I'm interested in a royal heritage stay.")}`}>Ask about a heritage stay <ArrowRight size={17} /></a>
          </div>
          <span className="royal-index">A PLACE TO REMEMBER · 02</span>
        </section>

        <section className="journeys-section section-wrap" id="journeys">
          <div className="journeys-top">
            <SectionHeading eyebrow="Nine local favourites" title="Odisha Tour Packages" description="Explore pilgrimage, nature, wildlife, heritage and cultural tours across Odisha. Open an itinerary, then enquire about dates and availability." />
            <a className="underlined-link" href={`${whatsapp}?text=Hello%20ERAS%20Tourism%2C%20please%20help%20me%20choose%20a%20tour.`}>Help me choose <ArrowRight size={16} /></a>
          </div>
          <div className="journey-grid">
            {journeys.map((journey) => (
              <article className="journey-card" key={journey.number}>
                <div className={`journey-image${journey.gallery ? " journey-image--gallery" : ""}${journey.image ? "" : " journey-image--placeholder"}`} style={journey.image ? { backgroundImage: `url("${journey.image}")` } : undefined}>
                  {journey.gallery ? <div className={`journey-photo-grid${journey.gallery.length === 2 ? " journey-photo-grid--two" : ""}`}>{journey.gallery.map((photo, photoIndex) => <div className={`journey-photo${photoIndex === 0 ? " journey-photo--lead" : ""}`} key={photo.src}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 680px) 60vw, (max-width: 900px) 28vw, 22vw" /></div>)}</div> : null}
                  <span>{journey.type}</span>
                </div>
                <div className="journey-info">
                  <h3>{journey.title}</h3>
                  <div className="journey-meta"><span><Clock3 size={14} />{journey.duration}</span><span><Users size={14} />{journey.group}</span></div>
                  <details className="journey-itinerary">
                    <summary>View itinerary <span>+</span></summary>
                    {journey.routes.map((route) => (
                      <div className="route-details" key={route.name}>
                        {journey.routes.length > 1 ? <h4>{route.name}</h4> : null}
                        {route.days.map((day, index) => <p key={day}><strong>Day {index + 1}</strong>{day}</p>)}
                      </div>
                    ))}
                  </details>
                  <a href={`${whatsapp}?text=${encodeURIComponent(`Hello ERAS Tourism, please tell me more about ${journey.title}.` )}`}>Ask about this tour <ArrowRight size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="royal-tour-section" id="royal-tour">
          <div className="royal-tour-layout section-wrap">
            <div className="royal-tour-gallery" aria-label="Aul Palace Royal Heritage Tour photos">
              <div className="royal-tour-image royal-tour-image--garden"><Image src="/aul-palace/palace-garden.jpeg" alt="Aul Palace and its garden pond" fill sizes="(max-width: 680px) 100vw, 60vw" /></div>
              <div className="royal-tour-image royal-tour-image--facade"><Image src="/aul-palace/palace-facade.jpeg" alt="The ornate facade of Aul Palace" fill sizes="(max-width: 680px) 25vw, 15vw" /></div>
              <div className="royal-tour-image royal-tour-image--interior"><Image src="/aul-palace/palace-interior.jpeg" alt="A heritage corridor inside Aul Palace" fill sizes="(max-width: 680px) 25vw, 15vw" /></div>
              <div className="royal-tour-image royal-tour-image--arcade"><Image src="/aul-palace/palace-arcade.jpeg" alt="An old arched pavilion surrounded by greenery" fill sizes="(max-width: 680px) 50vw, 30vw" /></div>
            </div>
            <div className="royal-tour-copy">
              <span className="eyebrow"><span /> Aul Palace · Kendrapara</span>
              <h2>A royal past,<br /><i>open to explore.</i></h2>
              <p>See Aul Palace through its ornate facade, quiet interiors, old stone arches and garden setting. Make space for a slower visit to one of Odisha’s living heritage landmarks.</p>
              <div className="royal-tour-highlights"><span><MapPin size={16} /> Kendrapara, Odisha</span><span><Sparkles size={16} /> Palace, grounds & gardens</span></div>
              <a className="button button--dark" href={`${whatsapp}?text=${encodeURIComponent("Hello ERAS Tourism, I'm interested in an Aul Palace Royal Heritage Tour.")}`}>Enquire about the tour <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-mark">“</div>
          <p>Odisha you know is not<br />the Odisha <i>we know.</i></p>
          <span>Come see it with us.</span>
          <a href="#places" aria-label="Discover Odisha"><ArrowDown size={18} /></a>
          <div className="quote-landscape" />
        </section>

        <section className="feedback-section" id="feedback">
          <div className="feedback-inner">
            <div className="feedback-intro">
              <span className="eyebrow eyebrow--light"><span /> A note from the road</span>
              <h2>Your experience<br />helps us <i>do better.</i></h2>
              <p>Travelled with ERAS? Tell us what worked, what surprised you, and what we can improve. Your feedback goes directly to our local team.</p>
              <span className="feedback-privacy"><span /> Shared privately with ERAS Tourism</span>
            </div>
            <FeedbackForm />
          </div>
        </section>

        <section className="faq-contact section-wrap" id="faq">
          <div className="faq-column">
            <SectionHeading eyebrow="A few useful things" title="Before you set off." />
            <div className="faq-list">
              {faqs.map((faq) => <details className="faq-item" key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}
            </div>
            <div className="contact-details" id="contact-methods">
              <span className="eyebrow"><span /> Talk to a local team</span>
              <a className="contact-primary" href="tel:+917749074686"><Phone size={18} /><span><small>Call our team</small><strong>+91 77490 74686</strong></span><ArrowUpRight className="contact-link-arrow" size={16} /></a>
              <a href="tel:+917655047448"><Phone size={16} /> +91 76550 47448</a>
              <a href="tel:+919861464247"><Phone size={16} /> +91 98614 64247</a>
              <a href={`${whatsapp}?text=Hello%20ERAS%20Tourism%2C%20I%27d%20like%20to%20plan%20a%20trip.`}><span className="contact-method-icon">W</span> WhatsApp our team <ArrowUpRight className="contact-link-arrow" size={15} /></a>
              <a href="mailto:tourism.eras@gmail.com"><ArrowUpRight size={16} /> tourism.eras@gmail.com</a>
              <p className="contact-address"><MapPin size={16} /><span><strong>Bhubaneswar Office</strong>Plot No. 1297/2098, Lane No. 7, Mallick Complex, Jagamara, Bhubaneswar</span></p>
              <p className="contact-address"><MapPin size={16} /><span><strong>Khordha Office</strong>Badha Sabarsahi Lane, Ward No. 3</span></p>
            </div>
          </div>
          <div className="contact-panel" id="contact">
            <span className="eyebrow"><span /> Your next story starts here</span>
            <h2>Let’s plan your<br /><i>Odisha journey.</i></h2>
            <p>Share a few details. We’ll help you shape the route around your dates and the way you like to travel.</p>
            <EnquiryForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand brand--footer" href="#home" aria-label="ERAS Tourism home"><Image className="brand-logo brand-logo--footer" src="/Eras_Logo.png" alt="ERAS Tourism" width={1600} height={1276} /></a>
          <div className="footer-about">
            <strong>ERAS TOURISM</strong>
            <small>A Division of ERAS Creative &amp; Tourism Service</small>
            <p>An Odisha-based holiday idea company helping travellers rediscover nature, culture, pilgrimage, heritage and hidden destinations across Odisha.</p>
          </div>
          <div className="footer-links"><a href="#about">Our story</a><a href="#places">Destinations</a><a href="#journeys">Journeys</a><a href="#faq">FAQs</a></div>
          <div className="footer-contact">
            <a href="mailto:tourism.eras@gmail.com">tourism.eras@gmail.com</a>
            <a href="tel:+917749074686">+91 77490 74686</a>
            <a href="tel:+917655047448">+91 76550 47448</a>
            <a href="tel:+919861464247">+91 98614 64247</a>
            <span><strong>Bhubaneswar Office</strong>Plot No. 1297/2098, Lane No. 7, Mallick Complex, Jagamara, Bhubaneswar</span>
            <span><strong>Khordha Office</strong>Badha Sabarsahi Lane, Ward No. 3</span>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 ERAS Tourism</span><span>Thoughtfully travelling, together.</span><a href="#home">Back to top ↑</a></div>
      </footer>
      <TravelChat />
    </>
  );
}
