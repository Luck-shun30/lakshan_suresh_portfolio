"use client";

import { useState } from "react";
import { Button } from "./button";

export function ContactForm() {
  // Remove client-side state and handleSubmit logic as Formspree handles submission directly
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmitStatus(null);

  //   try {
  //     // Formspree handles the actual sending
  //     // You might add Formspree's AJAX logic here if you don't want a page reload
  //     // For a basic implementation, just prevent default and let the form submit
  //     // await new Promise(resolve => setTimeout(resolve, 1000));
  //     // setSubmitStatus("success");
  //     // setFormData({ name: "", email: "", message: "" });
  //   } catch (_) {
  //     // setSubmitStatus("error");
  //   } finally {
  //     // setIsSubmitting(false);
  //   }
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };

  return (
    <form action="https://formspree.io/f/xgvyoelp" method="POST" className="space-y-6 max-w-xl mx-auto">
      {/* Remove Name field as it's not in the provided Formspree example */}
      {/*
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          // value={formData.name}
          // onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md bg-zinc-800/50 border border-zinc-700 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none transition-colors"
        />
      </div>
      */}

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Your email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded-md bg-zinc-800/50 border border-zinc-700 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none transition-colors"
          // value={formData.email}
          // onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Your message:
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 rounded-md bg-zinc-800/50 border border-zinc-700 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none transition-colors resize-none"
          // value={formData.message}
          // onChange={handleChange}
        />
      </div>

      {/* Add any other Formspree hidden inputs here if needed */}
      {/* <input type="text" name="_gotcha" style={{display: "none"}} /> */}

      <Button
        type="submit"
        // disabled={isSubmitting}
        className="w-full"
      >
        Send
      </Button>

      {/* Remove client-side status messages or adapt based on Formspree's response handling */}
      {/* {submitStatus === "success" && (
        <p className="text-green-500 text-center">Message sent successfully!</p>
      )}
      {submitStatus === "error" && (
        // eslint-disable-next-line
        <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
      )} */}
    </form>
  );
} 