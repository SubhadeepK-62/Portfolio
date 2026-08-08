export default function Footer() {
  return (
    <footer className="border-t border-yellow-400/10 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Subhadeep Karmakar.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}