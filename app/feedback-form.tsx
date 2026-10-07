"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Star } from "lucide-react";

export default function FeedbackForm() {
  const [feedbackUrl, setFeedbackUrl] = useState("");

  function submitFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const tour = String(formData.get("tour") ?? "").trim();
    const rating = String(formData.get("rating") ?? "");
    const feedback = String(formData.get("feedback") ?? "").trim();
    const message = [
      "Hello ERAS Tourism, I would like to share feedback about my trip.",
      name ? `Name: ${name}` : "",
      tour ? `Tour: ${tour}` : "",
      `Rating: ${rating}/5`,
      `Feedback: ${feedback}`,
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/917749074686?text=${encodeURIComponent(message)}`;
    setFeedbackUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="feedback-form" onSubmit={submitFeedback}>
      <label className="feedback-field">
        <span>Your rating</span>
        <span className="rating-select"><Star size={17} aria-hidden="true" /><select name="rating" defaultValue="5" aria-label="Your rating">
          <option value="5">5 · Excellent</option>
          <option value="4">4 · Very good</option>
          <option value="3">3 · Good</option>
          <option value="2">2 · Could be better</option>
          <option value="1">1 · Needs improvement</option>
        </select></span>
      </label>
      <label className="feedback-field">
        <span>Tour or destination <small>Optional</small></span>
        <input name="tour" placeholder="Which journey did you take?" />
      </label>
      <label className="feedback-field">
        <span>Your experience</span>
        <textarea name="feedback" rows={3} minLength={8} placeholder="What stood out? Your honest feedback helps us improve." required />
      </label>
      <label className="feedback-field">
        <span>Your name <small>Optional</small></span>
        <input autoComplete="name" name="name" placeholder="Name" />
      </label>
      <button className="feedback-submit" type="submit">Send feedback privately <ArrowUpRight size={16} /></button>
      {feedbackUrl ? <p className="feedback-status" role="status">WhatsApp should open in a new tab. <a href={feedbackUrl} target="_blank" rel="noreferrer">Open your prepared feedback</a> if it didn’t.</p> : null}
    </form>
  );
}