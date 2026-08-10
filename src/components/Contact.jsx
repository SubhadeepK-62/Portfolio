import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useSectionObserver from "../hooks/useSectionObserver";

export default function Contact() {
  const ref = useSectionObserver("contact");
  const form = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("Message sent successfully ✅");
      form.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message ❌");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4 text-center">
          Contact
        </p>

        <h2
          className="text-5xl md:text-7xl mb-12 text-center"
          style={{ fontFamily: "Bebas Neue" }}
        >
          LET'S CONNECT
        </h2>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="bg-[#1a1a1a] border border-yellow-400/20 rounded-3xl p-8 space-y-6"
        >
          <div>
            <label className="block mb-2 text-gray-300">
              Name
            </label>

            <input
              type="text"
              name="user_name"
              required
              className="w-full bg-black border border-yellow-400/20 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Email
            </label>

            <input
              type="email"
              name="user_email"
              required
              className="w-full bg-black border border-yellow-400/20 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              required
              className="w-full bg-black border border-yellow-400/20 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Message
            </label>

            <textarea
              rows="6"
              name="message"
              required
              className="w-full bg-black border border-yellow-400/20 rounded-xl px-4 py-3 text-white outline-none resize-none focus:border-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-gray-300">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}