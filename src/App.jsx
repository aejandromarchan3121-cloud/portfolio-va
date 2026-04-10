import React, { useState } from 'react'
import { CheckCircle, Play, MessageSquare, Mail, ArrowLeft } from 'lucide-react'

import dashboard1 from './assets/dashboard-principal.jpg'
import dashboard2 from './assets/dashboard-graficos.jpg'
import crm1 from './assets/crm-leads.png'
import vidReel from './assets/video.mp4'

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [view, setView] = useState('home');

  return (
    <div className="min-h-screen bg-[#0a0b10] text-slate-200 selection:bg-cyber-blue selection:text-black">
      
      {/* --- RENDERIZADO CONDICIONAL: VISTA DETALLE --- */}
      {view !== 'home' ? (
        <div className="min-h-screen p-6">
          <button 
            onClick={() => setView('home')}
            className="mb-10 flex items-center gap-2 text-cyber-blue hover:text-white transition-all cursor-pointer font-bold"
          >
            <ArrowLeft className="w-5 h-5" /> Volver al inicio
          </button>

          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-bold mb-6 capitalize text-white border-b border-slate-800 pb-4">
              Servicio: <span className="text-cyber-blue">{view}</span>
            </h2>
            
            <div className="bg-[#161b22] p-8 rounded-3xl border border-slate-800 shadow-2xl">
              {view === 'Administrativo' && (
                <div className="space-y-6">
                  <p className="text-lg text-slate-300">Optimizo tu tiempo gestionando lo que consume tu energía diaria.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div onClick={() => setSelectedImg(dashboard1)} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-lg group cursor-pointer hover:border-cyber-blue/50 transition-all">
                      <img src={dashboard1} alt="Dashboard 1" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                      <p className="p-3 text-sm text-slate-400 text-center bg-slate-900/50">Automatización de Datos</p>
                    </div>
                    <div onClick={() => setSelectedImg(dashboard2)} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-lg group cursor-pointer hover:border-cyber-blue/50 transition-all">
                      <img src={dashboard2} alt="Dashboard 2" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                      <p className="p-3 text-sm text-slate-400 text-center bg-slate-900/50">Gestión de Agenda</p>
                    </div>
                  </div>
                </div>
              )}

              {view === 'Comercial' && (
                <div className="space-y-6">
                  <p className="text-lg text-slate-300">Atención profesional para cerrar ventas y fidelizar clientes.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div onClick={() => setSelectedImg(crm1)} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-lg group cursor-pointer hover:border-green-400/50 transition-all">
                      <img src={crm1} alt="CRM Leads" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                      <p className="p-3 text-sm text-slate-400 text-center bg-slate-900/50">Control de Prospectos</p>
                    </div>
                  </div>
                </div>
              )}

              {/* --- DETALLE CREATIVO (VIDEO) --- */}
            {view === 'Creativo' && (
              <div className="space-y-6 text-center">
                <p className="text-lg text-slate-300 text-left">Edición dinámica diseñada para captar atención en segundos.</p>
                <div className="aspect-[9/16] w-64 mx-auto bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-[0_0_25px_rgba(146,69,255,0.2)]">
                   <video 
                     src={vidReel} 
                     controls 
                     autoPlay 
                     loop 
                     muted 
                     className="w-full h-full object-cover"
                   />
                </div>
                <p className="text-sm text-cyber-purple font-medium">Ejemplo de cortes rápidos y subtítulos</p>
              </div>
            )}
          </div>
            
            <div className="mt-12 text-center">
              <a 
                href={`https://wa.me/584167091522?text=Hola%20Alejandro,%20me%20interesa%20el%20servicio%20de%20${view}`}
                target="_blank" rel="noopener noreferrer"
                className="bg-cyber-blue text-black px-12 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:scale-105 transition-all inline-block"
              >
                ¡Me gusta tu trabajo, hablemos!
              </a>
            </div>
          </div>
        </div>
      ) : (
        /* --- VISTA PRINCIPAL (HOME) --- */
        <>
          <header className="py-20 px-6 text-center">
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              Alejandro Marchan
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Soluciones administrativas, comerciales y edición creativa de alto impacto.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://wa.me/584167091522" target="_blank" rel="noopener noreferrer" className="bg-cyber-blue text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-all">Contrátame</a>
              <a href="#servicios" className="border border-slate-700 px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all">Ver servicios</a>
            </div>
          </header>

          <section id="servicios" className="py-20 px-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div onClick={() => setView("Administrativo")} className="p-8 rounded-2xl bg-[#161b22] border border-slate-800 hover:border-cyber-blue/50 transition-all cursor-pointer">
                <CheckCircle className="w-12 h-12 text-cyber-blue mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Administrativo</h3>
                <ul className="text-slate-400 space-y-2 text-sm">
                  <li>• Gestión de agendas</li>
                  <li>• Organización de archivos</li>
                  <li>• Manejo de bases de datos</li>
                </ul>
              </div>

              <div onClick={() => setView("Comercial")} className="p-8 rounded-2xl bg-[#161b22] border border-slate-800 hover:border-green-400/50 transition-all cursor-pointer">
                <MessageSquare className="w-12 h-12 text-green-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Comercial</h3>
                <ul className="text-slate-400 space-y-2 text-sm">
                  <li>• Atención al cliente</li>
                  <li>• Gestión de pedidos</li>
                  <li>• Soporte en ventas</li>
                </ul>
              </div>

              <div onClick={() => setView("Creativo")} className="p-8 rounded-2xl bg-[#161b22] border border-slate-800 hover:border-cyber-purple/50 transition-all cursor-pointer">
                <Play className="w-12 h-12 text-cyber-purple mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Creativo</h3>
                <ul className="text-slate-400 space-y-2 text-sm">
                  <li>• Edición de Video (Reels)</li>
                  <li>• Diseño de imágenes</li>
                  <li>• Contenido para redes</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-20 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Proyectos Recientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div onClick={() => setView('Creativo')} className="aspect-[9/16] bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 relative group cursor-pointer">
    {/* AGREGAMOS EL VIDEO DE FONDO AQUÍ */}
    <video 
      src={vidReel} 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
    />
    
    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-all z-10">
       <Play className="w-12 h-12 text-cyber-blue opacity-80" />
    </div>
    
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-6 flex flex-col justify-end z-20">
       <p className="font-bold text-white">Edición Dinámica</p>
       <p className="text-xs text-slate-400">Reels & TikToks</p>
    </div>
</div>
              <div onClick={() => setSelectedImg(dashboard1)} className="aspect-square bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 cursor-pointer group relative">
                 <img src={dashboard1} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Admin Project" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-6 flex flex-col justify-end">
                    <p className="font-bold text-white">Automatización</p>
                    <p className="text-xs text-slate-300">Google Sheets Expert</p>
                 </div>
              </div>
              <div onClick={() => setSelectedImg(dashboard2)} className="aspect-square bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 cursor-pointer group relative">
                 <img src={dashboard2} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Dashboard Admin" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-6 flex flex-col justify-end">
                    <p className="font-bold text-white">Dashboard Admin</p>
                    <p className="text-xs text-slate-300">Gestión de Datos</p>
                 </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-6 max-w-4xl mx-auto text-center border-t border-slate-900">
            <h2 className="text-3xl font-bold mb-6 text-cyber-blue">Sobre Mí</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Soy Alejandro Marchán, apasionado por la tecnología y la optimización. 
              Organizo tu flujo administrativo y creo contenido visual que destaca.
            </p>
          </section>
        </>
      )}

{/* BOTONES FLOTANTES DE CONTACTO */}
<div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">

  {/* Botón Gmail */}
  <a 
    href="mailto:alejandromz4555@gmail.com"
    className="bg-white text-black p-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-110 hover:bg-cyber-blue transition-all group relative"
    title="Enviame un correo"
  >
    <Mail className="w-6 h-6" />
    <span className="absolute right-14 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      Correo electrónico
    </span>
  </a>

  {/* Botón WhatsApp */}
  <a 
    href="https://wa.me/584167091522?text=Hola%20Alejandro,%20vi%20tu%20portafolio%20y%20me%20gustaría%20trabajar%20contigo" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-[#25D366] text-white p-3 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-all group relative"
  >
    {/* Usamos el icono de mensaje de Lucide ya que no hay uno oficial de WhatsApp en la librería base, 
        pero con el color verde se identifica al instante */}
    <MessageSquare className="w-6 h-6" />
    <span className="absolute right-14 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      Chat de WhatsApp
    </span>
  </a>
</div>

      {/* --- ELEMENTOS COMUNES (FOOTER Y MODAL) --- */}
      <footer className="py-10 text-center border-t border-slate-900 text-slate-500 text-sm mt-auto">
        <p>Alejandro Marchán | Amazonas, Venezuela | 2026</p>
      </footer>

      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 z-[60] bg-white text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-2xl hover:bg-cyber-blue transition-colors shadow-xl"
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
          > × </button>
          <img 
            src={selectedImg} 
            className="max-w-full max-h-full rounded-lg shadow-2xl border border-slate-800 cursor-default"
            alt="Vista ampliada"
            onClick={(e) => e.stopPropagation()} 
          />
          
        </div>
        
      )}
    </div>
  );
}

export default App;