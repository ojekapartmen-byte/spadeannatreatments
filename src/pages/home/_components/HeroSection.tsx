import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[520px] flex items-center overflow-hidden"
      style={{
        // Gradasi disesuaikan agar serasi dengan warna tombol baru #40a3da
        background: "linear-gradient(135deg, #004d52 0%, #00696e 40%, #40a3da 100%)"
      }}>
      
      {/* Background image overlay - MENGGUNAKAN URL BARU ANDA */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(http://deannadayspa.com/wp-content/uploads/2026/03/Hero-banner.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }} />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#004d52]/80 via-[#00696e]/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:py-32 py-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center">
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-sm font-sans font-medium tracking-[0.3em] uppercase mb-4">
            Welcome to Deanna
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight text-balance mb-6">
            Our Luxury
            <br />
            <span className="italic font-normal">Spa Treatments</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-white/75 font-sans text-base font-light leading-relaxed mb-10 max-w-lg mx-auto">
            Indulge in a world of relaxation and beauty. Experience our premium treatments crafted for your well-being.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}>
            
            <a
              href="#contact"
              className="inline-block px-10 py-3.5 bg-white text-[#40a3da] font-sans font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-[#40a3da] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 20C480 40 240 10 0 30L0 60Z" fill="oklch(0.99 0.005 85)" />
        </svg>
      </div>
    </section>
  );
}
