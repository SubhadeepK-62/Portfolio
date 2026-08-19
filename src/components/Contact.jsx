import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useSectionObserver from "../hooks/useSectionObserver";
import { motion } from "framer-motion";

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
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
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
      className="min-h-screen flex items-center px-6 py-20 relative"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-7xl mb-16 text-center"
          style={{ fontFamily: "Bebas Neue" }}
        >
          LET'S CONNECT
        </h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Let's Build Something Amazing
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I'm always interested in discussing new projects, creative ideas,
              internships, and opportunities.
            </p>

            <div className="space-y-4 mt-10">
              <a
                href="mailto:subhadeep24400123072@gmail.com"
                className="
            block
            p-5
            rounded-2xl
            bg-[#111111]
            border
            border-yellow-400/10
            hover:border-yellow-400/40
            transition-all
            duration-300
          "
              >
                <p className="text-yellow-400 text-sm">Email</p>
                <p className="text-gray-300">subhadeep24400123072@gmail.com</p>
              </a>

              <a
                href="https://github.com/YOUR_GITHUB"
                target="_blank"
                rel="noreferrer"
                className="
            block
            p-5
            rounded-2xl
            bg-[#111111]
            border
            border-yellow-400/10
            hover:border-yellow-400/40
            transition-all
            duration-300
          "
              >
                <p className="text-yellow-400 text-sm">GitHub</p>
                <p className="text-gray-300">github.com/YOUR_GITHUB</p>
              </a>

              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noreferrer"
                className="
            block
            p-5
            rounded-2xl
            bg-[#111111]
            border
            border-yellow-400/10
            hover:border-yellow-400/40
            transition-all
            duration-300
          "
              >
                <p className="text-yellow-400 text-sm">LinkedIn</p>
                <p className="text-gray-300">Connect with me</p>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="
        bg-[#111111]
        border
        border-yellow-400/10
        rounded-3xl
        p-6 md:p-8
        space-y-6
      "
          >
            <div>
              <label className="block mb-2 text-gray-300">Name</label>

              <input
                type="text"
                name="user_name"
                required
                className="
            w-full
            bg-black
            border
            border-yellow-400/20
            rounded-xl
            px-4
            py-3
            text-white
            outline-none
            focus:border-yellow-400
          "
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Email</label>

              <input
                type="email"
                name="user_email"
                required
                className="
            w-full
            bg-black
            border
            border-yellow-400/20
            rounded-xl
            px-4
            py-3
            text-white
            outline-none
            focus:border-yellow-400
          "
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Subject</label>

              <input
                type="text"
                name="subject"
                required
                className="
            w-full
            bg-black
            border
            border-yellow-400/20
            rounded-xl
            px-4
            py-3
            text-white
            outline-none
            focus:border-yellow-400
          "
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Message</label>

              <textarea
                rows="6"
                name="message"
                required
                className="
            w-full
            bg-black
            border
            border-yellow-400/20
            rounded-xl
            px-4
            py-3
            text-white
            outline-none
            resize-none
            focus:border-yellow-400
          "
              />
            </div>

            <button
              type="submit"
              className="
          w-full
bg-yellow-400
text-black
py-4
rounded-xl
font-semibold
transition-all
duration-300
hover:scale-[1.03]
hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]
active:scale-[0.98]
        "
            >
              Send Message →
            </button>

            {status && <p className="text-center text-gray-300">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
