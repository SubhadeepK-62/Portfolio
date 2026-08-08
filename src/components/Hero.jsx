import profileImage from "../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">
              Hello, I'm
            </p>

            <h1
              className="text-6xl md:text-8xl font-bold leading-none"
              style={{ fontFamily: "Bebas Neue" }}
            >
              SUBHADEEP
              <br />
              KARMAKAR
            </h1>

            <p className="mt-6 text-xl text-gray-400">
              B.Tech CSE Student • Web Developer • AI Enthusiast
            </p>

            <p className="mt-6 max-w-xl text-gray-500">
              I build modern web applications, explore AI technologies,
              and create digital experiences that combine design with
              functionality.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold">
                View Projects
              </button>

              <button className="px-8 py-3 rounded-full border border-yellow-400 text-yellow-400">
                Contact Me
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-80 h-80 object-cover rounded-full border-4 border-yellow-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}