function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-10 mt-10">
      
      <div className="grid md:grid-cols-4 gap-8">
        
        <div>
          <h1 className="text-2xl font-bold text-red-500">UFC GYM</h1>
          <p className="mt-3 text-gray-400 text-sm">
            Train Different. UFC Gym provides world-class fitness,
            MMA training, boxing, and strength programs.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Membership</li>
            <li>Locations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Training</h2>
          <ul className="space-y-2 text-gray-400">
            <li>MMA</li>
            <li>Boxing</li>
            <li>Fitness</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-gray-400 text-sm">
            📍 India <br />
            📞 +91 6263442343 <br />
            ✉ ufc_gym@gmail.com
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        2026 UFC Gym. 
      </div>

    </footer>
  );
}

export default Footer;