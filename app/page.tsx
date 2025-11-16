
"use client";
export default function Page() {
  return (
    <div className="bg-black min-h-screen text-white">
      <section className="h-screen flex items-center justify-center" style={{backgroundImage:'url(https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/4217818974cc42aacda89090bab6f9a5)',backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className="bg-black/60 absolute inset-0"/>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-8xl font-black mb-4" style={{color:'#FFD700'}}>
            BOURBON STREET
          </h1>
          <p className="text-2xl mb-4" style={{color:'#8B008B'}}BY LIT FARM</p>
          <p className="text-xl mb-8 text-gray-300">Indica Híbrido • 26% THC</p>
          <button className="px-12 py-5 rounded-lg text-xl font-bold" style={{background:'linear-gradient(135deg,#FFD700,#FF8C00)',color:'#000'}}>Shop at CULTIMED</button>
        </div>
      </section>
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl" style={{background:'linear-gradient(135deg,#1a0f1f,#0f070f)'}}><div className="text-6xl mb-4">🔥</div><h3 className="text-4xl font-black mb-2" style={{color:'#FFD700'}}>26% THC</h3></div>
          <div className="p-8 rounded-3xl" style={{background:'linear-gradient(135deg,#1a0f1f,#0f070f)'}}><div className="text-6xl mb-4">🌿</div><h3 className="text-4xl font-black mb-2" style={{color:'#8B008B'}}>Indica Híbrido</h3></div>
          <div className="p-8 rounded-3xl" style={{background:'linear-gradient(135deg,#1a0f1f,#0f070f)'}}><div className="text-6xl mb-4">⭐</div><h3 className="text-4xl font-black mb-2" style={{color:'#FF8C00'}}>LIT FARM</h3></div>
        </div>
      </section>
      <footer className="py-12 text-center text-gray-500 text-sm">© 2025 CULTIMED | LIT FARM</footer>
    </div>
  );
}