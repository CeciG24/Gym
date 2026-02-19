import { useState } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Play,
  Check,
  Apple,
  MonitorSmartphone
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://i.blogs.es/ee9f11/1366_2000-6-/1366_2000.jpeg"
            alt="Athletic man training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        </div>

        {/* Navbar */}
        <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#F5D90A] rounded-full flex items-center justify-center">
              <span className="font-['Bebas_Neue'] text-2xl text-black">B</span>
            </div>
            <span className="font-['Bebas_Neue'] text-3xl tracking-wider">BULL</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className="font-['Inter'] hover:text-[#F5D90A] transition-colors">Nosotros</a>
            <a href="#membership" className="font-['Inter'] hover:text-[#F5D90A] transition-colors">Membresías</a>
            <a href="#blog" className="font-['Inter'] hover:text-[#F5D90A] transition-colors">Blog</a>
            <a href="#contact" className="font-['Inter'] hover:text-[#F5D90A] transition-colors">Contacto</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-20 right-6 bg-[#1A1A1A] rounded-2xl p-6 z-30 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <a href="#about" className="font-['Inter'] hover:text-[#F5D90A] transition-colors">Nosotros</a>
              <a href="#membership" className="font-['Inter'] hover:text-[#F5D90A] transition-colors">Membresías</a>
              <a href="#blog" className="font-['Inter'] hover:text-[#F5D90A] transition-colors">Blog</a>
              <a href="#contact" className="font-['Inter'] hover:text-[#F5D90A] transition-colors">Contacto</a>
            </div>
          </motion.div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center px-6 md:px-12">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-['Bebas_Neue'] text-6xl md:text-7xl lg:text-8xl leading-none mb-6">
                TU VIAJE FITNESS<br />COMIENZA<br />AQUÍ
              </h1>
              <p className="font-['Inter'] text-lg text-gray-300 mb-8 max-w-lg">
                Transforma tu cuerpo, eleva tu mente y libera tu potencial con nuestros 
                programas de entrenamiento de clase mundial y entrenadores expertos.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#F5D90A] text-black font-['Inter'] font-semibold px-10 py-4 rounded-full hover:bg-[#e5c900] transition-colors"
              >
                Explorar más
              </motion.button>
              <div className="mt-12 flex items-center gap-2 text-gray-400">
                <MapPin size={20} />
                <span className="font-['Inter'] text-sm">9464 Columbia Ave, Nueva York</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Training Section */}
      <section className="py-20 px-6 md:px-12 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side */}
            <div className="lg:col-span-4">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-['Bebas_Neue'] text-6xl md:text-7xl mb-8"
              >
                ENTRENAMIENTO<br />PERSONAL
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg"
              >
                <div className="text-[#F5D90A] font-['Bebas_Neue'] text-xl mb-3">OFRECEMOS</div>
                <p className="font-['Inter'] text-gray-300 mb-6">
                  Sesiones de prueba gratuitas para nuevos miembros
                </p>
                <button className="w-full bg-[#F5D90A] text-black font-['Inter'] font-semibold py-3 rounded-full hover:bg-[#e5c900] transition-colors">
                  Regístrate
                </button>
              </motion.div>
            </div>

            {/* Center Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-4"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758875569220-6934933d443c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMHdvbWFuJTIwZ3ltfGVufDF8fHx8MTc3MTQ0MjkxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Personal trainer coaching"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-4"
            >
              <div className="bg-[#1A1A1A] rounded-2xl p-8 shadow-lg">
                <div className="font-['Bebas_Neue'] text-5xl text-[#F5D90A] mb-4">+10</div>
                <div className="font-['Bebas_Neue'] text-2xl mb-4">Entrenadores personales</div>
                <p className="font-['Inter'] text-gray-400 mb-6">
                  Profesionales certificados dedicados a ayudarte a alcanzar tus objetivos fitness con programas personalizados.
                </p>
                <button className="bg-[#F5D90A] text-black font-['Inter'] font-semibold px-8 py-3 rounded-full hover:bg-[#e5c900] transition-colors">
                  Explorar más
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section id="membership" className="py-20 px-6 md:px-12 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Bebas_Neue'] text-5xl md:text-6xl text-center mb-16 max-w-4xl mx-auto"
          >
            PLANES DE MEMBRESÍA FLEXIBLES PARA TU ESTILO DE VIDA
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Premium Plan - Highlighted */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white text-black rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform"
            >
              <div className="text-sm font-['Inter'] font-semibold text-gray-600 mb-2">MÁS POPULAR</div>
              <h3 className="font-['Bebas_Neue'] text-4xl mb-2">Premium</h3>
              <div className="mb-6">
                <span className="font-['Bebas_Neue'] text-5xl">$320</span>
                <span className="font-['Inter'] text-gray-600">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-['Inter']">
                  <Check size={20} className="text-[#F5D90A]" />
                  Entrenadores Profesionales
                </li>
                <li className="flex items-center gap-3 font-['Inter']">
                  <Check size={20} className="text-[#F5D90A]" />
                  Todas las Instalaciones
                </li>
                <li className="flex items-center gap-3 font-['Inter']">
                  <Check size={20} className="text-[#F5D90A]" />
                  Bebidas y Suplementos Gratis
                </li>
                <li className="flex items-center gap-3 font-['Inter']">
                  <Check size={20} className="text-[#F5D90A]" />
                  Programa de Dieta
                </li>
              </ul>
              <button className="w-full bg-[#F5D90A] text-black font-['Inter'] font-semibold py-4 rounded-full hover:bg-[#e5c900] transition-colors">
                Ordenar ahora
              </button>
            </motion.div>

            {/* Advanced Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0F0F0F] border border-gray-800 rounded-3xl p-8 shadow-lg hover:border-[#F5D90A]/50 transition-colors"
            >
              <h3 className="font-['Bebas_Neue'] text-4xl mb-2">Avanzado</h3>
              <div className="mb-6">
                <span className="font-['Bebas_Neue'] text-5xl">$120</span>
                <span className="font-['Inter'] text-gray-400">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-['Inter'] text-gray-300">
                  <Check size={20} className="text-[#F5D90A]" />
                  Todas las Instalaciones
                </li>
                <li className="flex items-center gap-3 font-['Inter'] text-gray-300">
                  <Check size={20} className="text-[#F5D90A]" />
                  Clases Grupales
                </li>
                <li className="flex items-center gap-3 font-['Inter'] text-gray-300">
                  <Check size={20} className="text-[#F5D90A]" />
                  Bebidas Gratis
                </li>
              </ul>
              <button className="w-full bg-transparent border border-[#F5D90A] text-[#F5D90A] font-['Inter'] font-semibold py-4 rounded-full hover:bg-[#F5D90A] hover:text-black transition-colors">
                Ordenar ahora
              </button>
            </motion.div>

            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#0F0F0F] border border-gray-800 rounded-3xl p-8 shadow-lg hover:border-[#F5D90A]/50 transition-colors"
            >
              <h3 className="font-['Bebas_Neue'] text-4xl mb-2">Básico</h3>
              <div className="mb-6">
                <span className="font-['Bebas_Neue'] text-5xl">$70</span>
                <span className="font-['Inter'] text-gray-400">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-['Inter'] text-gray-300">
                  <Check size={20} className="text-[#F5D90A]" />
                  Acceso al Gimnasio
                </li>
                <li className="flex items-center gap-3 font-['Inter'] text-gray-300">
                  <Check size={20} className="text-[#F5D90A]" />
                  Uso de Equipamiento
                </li>
                <li className="flex items-center gap-3 font-['Inter'] text-gray-300">
                  <Check size={20} className="text-[#F5D90A]" />
                  Vestuarios
                </li>
              </ul>
              <button className="w-full bg-transparent border border-[#F5D90A] text-[#F5D90A] font-['Inter'] font-semibold py-4 rounded-full hover:bg-[#F5D90A] hover:text-black transition-colors">
                Ordenar ahora
              </button>
            </motion.div>

            {/* Family Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#0F0F0F] border border-gray-800 rounded-3xl p-8 shadow-lg hover:border-[#F5D90A]/50 transition-colors"
            >
              <h3 className="font-['Bebas_Neue'] text-4xl mb-2">Familiar</h3>
              <div className="mb-6">
                <span className="font-['Bebas_Neue'] text-5xl">$580</span>
                <span className="font-['Inter'] text-gray-400">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-['Inter'] text-gray-300">
                  <Check size={20} className="text-[#F5D90A]" />
                  Hasta 4 Miembros
                </li>
                <li className="flex items-center gap-3 font-['Inter'] text-gray-300">
                  <Check size={20} className="text-[#F5D90A]" />
                  Todas las Funciones Premium
                </li>
                <li className="flex items-center gap-3 font-['Inter'] text-gray-300">
                  <Check size={20} className="text-[#F5D90A]" />
                  Clases Familiares
                </li>
              </ul>
              <button className="w-full bg-transparent border border-[#F5D90A] text-[#F5D90A] font-['Inter'] font-semibold py-4 rounded-full hover:bg-[#F5D90A] hover:text-black transition-colors">
                Ordenar ahora
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-6 md:px-12 bg-[#F5D90A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Bebas_Neue'] text-6xl md:text-7xl text-black mb-6">
              HISTORIAS DE ÉXITO
            </h2>
            <p className="font-['Inter'] text-black/80 text-lg max-w-2xl mx-auto">
              Transformaciones reales de personas reales. Mira cómo nuestros miembros alcanzaron sus objetivos fitness.
            </p>
          </motion.div>

          {/* Video Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1639496908117-6633c4aa9592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwc3VjY2VzcyUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc3MTQ0MjkxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Success story"
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={32} className="text-white ml-1" fill="white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1741156229623-da94e6d7977d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwbW90aXZhdGlvbnxlbnwxfHx8fDE3NzE0NDI5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Success story"
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={32} className="text-white ml-1" fill="white" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 text-center"
            >
              <div className="font-['Bebas_Neue'] text-5xl text-black mb-2">6,154</div>
              <div className="font-['Inter'] font-semibold text-black">Miembros del Gym</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 text-center"
            >
              <div className="font-['Bebas_Neue'] text-5xl text-black mb-2">350</div>
              <div className="font-['Inter'] font-semibold text-black">Campeones</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 text-center"
            >
              <div className="font-['Bebas_Neue'] text-5xl text-black mb-2">90%</div>
              <div className="font-['Inter'] font-semibold text-black">Éxito Quema Grasa</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 text-center"
            >
              <div className="font-['Bebas_Neue'] text-5xl text-black mb-2">20%</div>
              <div className="font-['Inter'] font-semibold text-black">Aumento Muscular</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl mb-6">
                SUSCRÍBETE A NUESTRO NEWSLETTER PARA RECIBIR ACTUALIZACIONES, INFORMACIÓN O NOTICIAS.
              </h2>
              <form className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="email"
                  placeholder="Ingresa tu email"
                  className="flex-1 bg-[#1A1A1A] border border-gray-800 rounded-full px-6 py-4 font-['Inter'] focus:outline-none focus:border-[#F5D90A] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#F5D90A] text-black font-['Inter'] font-semibold px-10 py-4 rounded-full hover:bg-[#e5c900] transition-colors whitespace-nowrap"
                >
                  Suscribirse
                </button>
              </form>
              <p className="font-['Inter'] text-sm text-gray-500">
                Nos importa tu privacidad y no compartiremos tu email con nadie.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] rounded-3xl p-8 shadow-xl"
            >
              <div className="aspect-video bg-gray-800 rounded-2xl flex items-center justify-center mb-4">
                <MapPin size={48} className="text-[#F5D90A]" />
              </div>
              <h3 className="font-['Bebas_Neue'] text-2xl mb-2">Visita Nuestro Gym</h3>
              <p className="font-['Inter'] text-gray-400">9464 Columbia Ave, Nueva York, NY 10001</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo & Contact */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#F5D90A] rounded-full flex items-center justify-center">
                  <span className="font-['Bebas_Neue'] text-2xl text-black">B</span>
                </div>
                <span className="font-['Bebas_Neue'] text-3xl tracking-wider">BULL</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin size={18} />
                  <span className="font-['Inter'] text-sm">9464 Columbia Ave, New York</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail size={18} />
                  <span className="font-['Inter'] text-sm">info@bullgym.com</span>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div>
              <h4 className="font-['Bebas_Neue'] text-xl mb-4">Menú</h4>
              <ul className="space-y-2 font-['Inter'] text-gray-400">
                <li><a href="#about" className="hover:text-[#F5D90A] transition-colors">Nosotros</a></li>
                <li><a href="#membership" className="hover:text-[#F5D90A] transition-colors">Membresías</a></li>
                <li><a href="#blog" className="hover:text-[#F5D90A] transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-[#F5D90A] transition-colors">Contacto</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-['Bebas_Neue'] text-xl mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 font-['Inter'] text-gray-400">
                <li><a href="#" className="hover:text-[#F5D90A] transition-colors">Entrenadores</a></li>
                <li><a href="#" className="hover:text-[#F5D90A] transition-colors">Clases</a></li>
                <li><a href="#" className="hover:text-[#F5D90A] transition-colors">Horarios</a></li>
                <li><a href="#" className="hover:text-[#F5D90A] transition-colors">Galería</a></li>
              </ul>
            </div>

            {/* Hours & Phone */}
            <div>
              <h4 className="font-['Bebas_Neue'] text-xl mb-4">Horarios</h4>
              <div className="font-['Inter'] text-gray-400 mb-6">
                <p>Lunes - Viernes: 6AM - 10PM</p>
                <p>Sábado - Domingo: 8AM - 8PM</p>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <span className="font-['Inter']">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Social & Copyright */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#F5D90A] rounded-full flex items-center justify-center hover:bg-[#e5c900] transition-colors">
                <Facebook size={20} className="text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#F5D90A] rounded-full flex items-center justify-center hover:bg-[#e5c900] transition-colors">
                <Instagram size={20} className="text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#F5D90A] rounded-full flex items-center justify-center hover:bg-[#e5c900] transition-colors">
                <Twitter size={20} className="text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#F5D90A] rounded-full flex items-center justify-center hover:bg-[#e5c900] transition-colors">
                <Youtube size={20} className="text-black" />
              </a>
            </div>
            <p className="font-['Inter'] text-gray-500 text-sm">
              © 2026 BULL Gym. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}