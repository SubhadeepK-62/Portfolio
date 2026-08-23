export default function Footer() {
  return (
    <footer className="border-t border-yellow-400/10 mt-32">
      <div className="max-w-7xl mx-auto px-8 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div>
            <h3
              className="text-2xl text-white"
              style={{ fontFamily: "Bebas Neue" }}
            >
              SUBHADEEP KARMAKAR
            </h3>

            <p className="text-gray-500 text-sm">
              Web Developer • CSE Undergrad • UI/UX Desginer
            </p>
          </div>

          <div className="flex gap-6 text-gray-500">
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>

            <a href="#projects" className="hover:text-yellow-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-yellow-400/10 text-center">
          <p className="text-gray-600 text-sm">
            © 2026 Subhadeep Karmakar.
            <br/>Made with ❤️ by me.
          </p>
        </div>

      </div>
    </footer>
  );
}