import { useState } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    alert("Message Sent Successfully ✅");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="h-[60vh] bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438')] bg-cover bg-center flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            CONTACT <span className="text-red-500">US</span>
          </h1>
          <p className="text-gray-300 mt-4">
            We’d love to hear from you
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* FORM */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Send Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-900 outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-900 outline-none focus:ring-2 focus:ring-red-500"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded bg-gray-900 outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

            <button className="w-full bg-red-500 py-3 rounded hover:bg-red-600 transition">
              Send Message
            </button>

          </form>
        </div>

        {/* INFO */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Info</h2>

          <div className="space-y-4 text-gray-300">
            <p>📍 UFC Gym India</p>
            <p>📞 +91 9876543210</p>
            <p>✉ info@ufcgym.com</p>
            <p>🕒 Mon - Sat: 6AM - 10PM</p>
          </div>

          {/* SOCIAL */}
          <div className="mt-6 flex gap-4">
            <button className="bg-gray-800 px-4 py-2 rounded hover:bg-red-500">Instagram</button>
            <button className="bg-gray-800 px-4 py-2 rounded hover:bg-red-500">Facebook</button>
            <button className="bg-gray-800 px-4 py-2 rounded hover:bg-red-500">YouTube</button>
          </div>

          {/* MAP */}
          <div className="mt-6">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=india&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-60 rounded-lg border-2 border-gray-800"
            ></iframe>
          </div>
        </div>

      </section>

      {/* FAQ SECTION */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Frequently Asked Questions</h2>

        <div className="max-w-4xl mx-auto space-y-6 text-left">

          <div>
            <h3 className="font-semibold text-lg">Do you offer free trial?</h3>
            <p className="text-gray-400">Yes, we provide a 1-day free trial for new members.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">What are your timings?</h3>
            <p className="text-gray-400">We are open from 6AM to 10PM (Mon-Sat).</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Do you provide personal trainers?</h3>
            <p className="text-gray-400">Yes, certified trainers are available.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Transform Yourself?
        </h2>
        <p className="text-gray-400 mb-6">
          Join UFC Gym today and start your journey
        </p>

        <button className="bg-red-500 px-10 py-4 rounded text-lg hover:bg-red-600">
          Get Directions
        </button>
      </section>

    </div>
  );
}

export default Contact;