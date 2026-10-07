"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CalendarDays, MapPin, Users } from "lucide-react";

const tourOptions = [
  "Customized Odisha Holiday",
  "Jagannath Leela Kshetra Darshan",
  "Daringbadi Nature Tour",
  "Satakosia Wild Tour",
  "Baideswar Eco Heritage Tour",
  "Mahendragiri Eco Adventure Tour",
  "Satapada Amazing Chilika Tour",
  "Royal Heritage Tour",
];

export default function EnquiryForm() {
  const [whatsappUrl, setWhatsappUrl] = useState("");

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const tour = String(formData.get("tour") ?? "");
    const date = String(formData.get("date") ?? "");
    const travellers = String(formData.get("travellers") ?? "");
    const pickup = String(formData.get("pickup") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const enquiry = [
      "Hello ERAS Tourism, I would like to enquire about a trip.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Tour: ${tour}`,
      date ? `Travel date: ${date}` : "",
      travellers ? `Travellers: ${travellers}` : "",
      pickup ? `Pickup city: ${pickup}` : "",
      message ? `Details: ${message}` : "",
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/917749074686?text=${encodeURIComponent(enquiry)}`;
    setWhatsappUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="enquiry-form" onSubmit={submitEnquiry}>
      <div className="form-fields">
        <label className="form-field">
          <span>Your name <b aria-hidden="true">*</b></span>
          <input autoComplete="name" name="name" placeholder="Full name" required />
        </label>
        <label className="form-field">
          <span>Phone number <b aria-hidden="true">*</b></span>
          <input autoComplete="tel" name="phone" type="tel" inputMode="numeric" pattern="[0-9]{10,15}" title="Enter 10 to 15 digits, including your country code if needed" placeholder="10–15 digits" required />
        </label>
        <label className="form-field">
          <span>Tour interest</span>
          <select name="tour" defaultValue={tourOptions[0]}>
            {tourOptions.map((tour) => <option key={tour}>{tour}</option>)}
          </select>
        </label>
        <label className="form-field">
          <span>Preferred travel date</span>
          <span className="input-with-icon"><input name="date" type="date" /><CalendarDays size={16} aria-hidden="true" /></span>
        </label>
        <label className="form-field">
          <span>Number of travellers</span>
          <span className="input-with-icon"><input name="travellers" type="number" min="1" max="100" inputMode="numeric" placeholder="For example, 4" /><Users size={16} aria-hidden="true" /></span>
        </label>
        <label className="form-field">
          <span>Pickup city</span>
          <span className="input-with-icon"><input autoComplete="address-level2" name="pickup" placeholder="Bhubaneswar or other" /><MapPin size={16} aria-hidden="true" /></span>
        </label>
        <label className="form-field form-field--wide">
          <span>Anything else we should know?</span>
          <textarea name="message" rows={4} placeholder="Tell us about your plans, preferences, or questions." />
        </label>
      </div>
      <div className="form-submit-row">
        <p>Your enquiry opens in WhatsApp so you can review and send it to our team.</p>
        <button className="button button--dark" type="submit">Send enquiry <ArrowUpRight size={17} /></button>
      </div>
      {whatsappUrl ? (
        <p className="form-status" role="status">
          WhatsApp should open in a new tab. <a href={whatsappUrl} target="_blank" rel="noreferrer">Open your prepared enquiry</a> if it didn’t.
        </p>
      ) : null}
    </form>
  );
}