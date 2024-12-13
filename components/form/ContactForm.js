"use client";

import { useState } from "react";
import FadeIn from "../framer/FadeIn";
import Toast from "../toast/Toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response?.json();
      if (response?.ok) {
        setToastMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setToastMessage(result.error || "Failed to send message.");
      }
    } catch (error) {
      setToastMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setShowToast(true);
    }
  };

  const handleDismissToast = () => {
    setShowToast(false);
  };

  return (
    <FadeIn>
      <aside className="flex w-full flex-col items-start justify-between p-3 md:flex-row">
        <h4 className="text-center font-head text-4xl uppercase leading-none drop-shadow-[2px_2px_2px_#111] md:w-2/3 md:text-left md:text-6xl">
          Let&apos;s get in touch
        </h4>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex flex-col gap-1 rounded-sm border border-dark p-1.5 shadow-lg *:cursor-none *:caret-dark *:outline-none md:w-1/3"
        >
          <input
            type="text"
            id="name"
            name="name"
            title="Your Name"
            placeholder="Full Name"
            autoCapitalize="words"
            data-click="true"
            value={formData.name}
            onChange={handleChange}
            className="rounded-sm border border-dark bg-transparent px-1.5 py-1 text-xs leading-none placeholder:text-gray-600 focus:ring-2 focus:ring-dark focus:ring-offset-2 focus:ring-offset-light"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            title="Your email"
            placeholder="Email"
            autoCapitalize="none"
            data-click="true"
            value={formData.email}
            onChange={handleChange}
            className="rounded-sm border border-dark bg-transparent px-1.5 py-1 text-xs leading-none placeholder:text-gray-600 focus:ring-2 focus:ring-dark focus:ring-offset-2 focus:ring-offset-light"
            required
          />
          <textarea
            id="message"
            name="message"
            title="Your message"
            placeholder="Message"
            autoCapitalize="sentences"
            data-click="true"
            value={formData.message}
            onChange={handleChange}
            className="resize-none rounded-sm border border-dark bg-transparent px-1.5 py-1 text-xs leading-none placeholder:text-gray-600 focus:ring-2 focus:ring-dark focus:ring-offset-2 focus:ring-offset-light"
            rows={5}
            required
          />
          <button
            type="submit"
            data-click="true"
            disabled={isSubmitting}
            className={`w-full rounded-sm border py-0.5 text-xs font-bold transition-colors duration-300 ease-in-out ${isSubmitting ? "border-dark bg-transparent text-dark hover:bg-transparent focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:ring-offset-transparent focus:hover:ring-transparent" : "border-light bg-dark text-light hover:bg-gray-900 focus:ring-2 focus:ring-dark focus:ring-offset-2 focus:ring-offset-light focus:hover:ring-gray-900"}`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </aside>

      {showToast && (
        <Toast message={toastMessage} onDismiss={handleDismissToast} />
      )}
    </FadeIn>
  );
};

export default ContactForm;
