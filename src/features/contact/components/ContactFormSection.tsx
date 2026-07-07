"use client";

import React from "react";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  FileText,
  Send,
  MapPin,
} from "lucide-react";

const ContactFormSection = () => {
  return (
    <section
      className="w-full py-20 md:py-28"
      style={{ background: "var(--color-section-soft)" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* =========================
            LEFT: FORM
        ========================= */}
        <div
          className="p-8 md:p-10 rounded-2xl"
          style={{
            background: "var(--color-card)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          {/* Heading */}
          <div className="mb-8">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-2"
              style={{ color: "var(--color-card-heading)" }}
            >
              Send Us a Message
            </h2>
            <p
              className="text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Fill in the details and our team will get back to you shortly.
            </p>
          </div>

          <form className="flex flex-col gap-5">

            {/* Input Field Component */}
            {[
              {
                label: "Full Name",
                placeholder: "Enter your full name",
                icon: <User size={18} />,
                type: "text",
              },
              {
                label: "Email",
                placeholder: "Enter your email",
                icon: <Mail size={18} />,
                type: "email",
              },
              {
                label: "Mobile Number",
                placeholder: "Enter your mobile number",
                icon: <Phone size={18} />,
                type: "tel",
              },
              {
                label: "Subject",
                placeholder: "Enter subject",
                icon: <FileText size={18} />,
                type: "text",
              },
            ].map((field, index) => (
              <div key={index}>
                <label
                  className="text-xs mb-1 block font-medium"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {field.label}
                </label>

                <div
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition focus-within:ring-2"
                  style={{
                    border: "1px solid var(--color-input)",
                    background: "var(--color-input-bg)",
                  }}
                >
                  <span style={{ color: "var(--color-text-tertiary)" }}>
                    {field.icon}
                  </span>

                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent outline-none text-sm"
                  />
                </div>
              </div>
            ))}

            {/* Message */}
            <div>
              <label
                className="text-xs mb-1 block font-medium"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Message
              </label>

              <div
                className="flex gap-3 px-3 py-2.5 rounded-lg focus-within:ring-2"
                style={{
                  border: "1px solid var(--color-input)",
                  background: "var(--color-input-bg)",
                }}
              >
                <span style={{ color: "var(--color-text-tertiary)" }}>
                  <MessageSquare size={18} />
                </span>

                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full bg-transparent outline-none text-sm resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all hover:scale-[1.02]"
              style={{
                background: "var(--color-button-primary)",
                color: "var(--color-button-primary-text)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <Send size={16} />
              Submit Message
            </button>

          </form>
        </div>

        {/* =========================
            RIGHT: CONTACT INFO
        ========================= */}
        <div
          className="p-8 md:p-10 rounded-2xl flex flex-col gap-8"
          style={{
            background: "linear-gradient(135deg, #3b3b8f, #2d2d6e)",
            color: "white",
            boxShadow: "var(--shadow-md)",
          }}
        >

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Get in Touch
            </h3>
            <p className="text-sm opacity-80">
              Prefer direct communication? Reach out using the details below.
            </p>
          </div>

          {/* Info Cards */}
          <div className="flex flex-col gap-6">

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white/10">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Contact No.</h4>
                <p className="text-sm opacity-80 mt-1">
                  +91 82540 36679
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white/10">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Email</h4>
                <p className="text-sm opacity-80 mt-1">
                  aine.guwahati@yahoo.com
                </p>
                <p className="text-sm opacity-80">
                  info@aine.org.in
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white/10">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Address</h4>
                <p className="text-sm opacity-80 mt-1 leading-relaxed">
                  IIT Road, Near IIT Sila Grant, Adjacent to GNRC Hospitals,
                  North Guwahati - 781031, Assam
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;