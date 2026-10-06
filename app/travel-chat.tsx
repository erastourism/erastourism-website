"use client";

import { useState } from "react";
import { ArrowRight, Bot, MessageCircle, X } from "lucide-react";

const whatsappUrl = "https://wa.me/919237312521?text=Hello%20ERAS%20Tourism%2C%20I%20have%20a%20travel%20question.";

export default function TravelChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="travel-chat">
      {isOpen ? (
        <section className="travel-chat-panel" id="travel-chat-panel" aria-labelledby="travel-chat-title">
          <header className="travel-chat-header">
            <span className="travel-chat-avatar"><Bot size={20} /></span>
            <span><strong id="travel-chat-title">ERAS travel desk</strong><small>Odisha trip planning</small></span>
            <button type="button" className="travel-chat-close" onClick={() => setIsOpen(false)} aria-label="Close travel assistant"><X size={18} /></button>
          </header>
          <div className="travel-chat-body">
            <p className="travel-chat-greeting">Namaskar! What can we help you plan?</p>
            <p className="travel-chat-note">Our itinerary assistant is being prepared. For now, choose a quick route or send your question to our team.</p>
            <a className="travel-chat-option" href="#journeys" onClick={() => setIsOpen(false)}>Browse tour itineraries <ArrowRight size={16} /></a>
            <a className="travel-chat-option" href="#contact" onClick={() => setIsOpen(false)}>Make a booking enquiry <ArrowRight size={16} /></a>
            <a className="travel-chat-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Ask us on WhatsApp</a>
          </div>
        </section>
      ) : null}
      <button
        type="button"
        className="travel-chat-toggle"
        aria-expanded={isOpen}
        aria-controls="travel-chat-panel"
        aria-label={isOpen ? "Close travel assistant" : "Open travel assistant"}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={21} /> : <MessageCircle size={21} />}
        <span>{isOpen ? "Close" : "Travel help"}</span>
      </button>
    </div>
  );
}
