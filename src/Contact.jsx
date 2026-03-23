function Contact() {
  return (
    <div className="bg-black text-white">


      <section className="h-[50vh] bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/70 p-8 rounded text-center">
          <h1 className="text-5xl font-bold">
            CONTACT <span className="text-red-500">US</span>
          </h1>
          <p className="text-gray-300 mt-4">
            Get in touch with UFC Gym
          </p>
        </div>
      </section>

      
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        
        <div>
          <h2 className="text-3xl font-bold mb-6">Send Message</h2>

          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-900 text-white outline-none"
            />

            <input 
              type="email" 
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-900 text-white outline-none"
            />

            <textarea 
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded bg-gray-900 text-white outline-none"
            ></textarea>

            <button className="bg-red-500 px-6 py-3 rounded hover:bg-red-600">
              Send Message
            </button>
          </form>
        </div>

        
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Info</h2>

          <div className="space-y-4 text-gray-300">
            <p>📍 UFC Gym India</p>
            <p>📞 +91 9876543210</p>
            <p>✉ info@ufcgym.com</p>
            <p>🕒 Mon - Sat: 6AM - 10PM</p>
          </div>

          
          <div className="mt-6">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=india&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-60 rounded"
            ></iframe>
          </div>
        </div>

      </section>

      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Visit Us?
        </h2>
        <p className="text-gray-400 mb-6">
          Find your nearest UFC Gym and start today
        </p>

        <button className="bg-red-500 px-8 py-3 rounded hover:bg-red-600">
          Get Directions
        </button>
      </section>

    </div>
  );
}

export default Contact;