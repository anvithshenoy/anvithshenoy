"use client";

import { useDataContext } from "@/app/context/DataContext";
import Link from "next/link";
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

  const { socialLinks } = useDataContext();

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
      <aside className="flex w-full flex-col items-center justify-center gap-2 md:flex-row lg:items-end">
        <div className="flex w-full flex-wrap justify-start gap-0.5 bg-dark py-1 text-light selection:bg-light selection:text-dark md:place-items-center">
          <h4 className="inline-block w-full text-center indent-1.5 font-head text-2xl uppercase leading-none underline underline-offset-8 md:text-6xl md:no-underline">
            Let&apos;s get in touch
          </h4>
          <div className="inline-flex w-full flex-wrap justify-center gap-x-2.5 gap-y-1.5 md:justify-between md:bg-light md:p-1.5 md:text-dark">
            {socialLinks.map((link) => (
              <Link
                key={link?._id}
                href={link?.url}
                target="_blank"
                data-click="true"
                className="relative text-sm leading-none outline-hidden transition-all duration-500 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-[calc(100%+0.25rem)] focus:after:w-[calc(100%+0.25rem)]"
              >
                {link?.media}
              </Link>
            ))}
          </div>
        </div>
        {/* <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex flex-col gap-1 rounded-xs border border-dark p-1.5 shadow-lg *:cursor-none *:caret-dark *:outline-hidden md:w-1/3"
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
            className="rounded-xs border border-dark bg-transparent px-1.5 py-1 text-xs leading-none placeholder:text-gray-600 focus:ring-2 focus:ring-dark focus:ring-offset-2 focus:ring-offset-light"
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
            className="rounded-xs border border-dark bg-transparent px-1.5 py-1 text-xs leading-none placeholder:text-gray-600 focus:ring-2 focus:ring-dark focus:ring-offset-2 focus:ring-offset-light"
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
            className="resize-none rounded-xs border border-dark bg-transparent px-1.5 py-1 text-xs leading-none placeholder:text-gray-600 focus:ring-2 focus:ring-dark focus:ring-offset-2 focus:ring-offset-light"
            rows={5}
            required
          />
          <button
            type="submit"
            data-click="true"
            disabled={isSubmitting}
            className={`w-full rounded-xs border py-0.5 text-xs font-bold transition-colors duration-300 ease-in-out ${isSubmitting ? "border-dark bg-transparent text-dark hover:bg-transparent focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:ring-offset-transparent focus:hover:ring-transparent" : "border-light bg-dark text-light hover:bg-gray-900 focus:ring-2 focus:ring-dark focus:ring-offset-2 focus:ring-offset-light focus:hover:ring-gray-900"}`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form> */}
      </aside>

      {showToast && (
        <Toast message={toastMessage} onDismiss={handleDismissToast} />
      )}
    </FadeIn>
  );
};

export default ContactForm;
