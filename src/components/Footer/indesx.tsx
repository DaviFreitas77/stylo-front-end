import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#252525] text-white py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img className="w-[160px]" src="img/logo.png" alt="Logo da loja" />
        </div>

        {/* Navegação */}
        <ul className="flex gap-6 text-sm flex-wrap justify-center">
          <li><a href="#" className="hover:text-blue-400 transition">Início</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Produtos</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Sobre</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Contato</a></li>
        </ul>

        {/* Redes sociais com ícones */}
        <div className="flex gap-4 text-2xl">
          <a
            href="https://instagram.com/seu_perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/55SEUNUMERO" // Ex: https://wa.me/5511999999999
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Debora Moda Feminina. Todos os direitos reservados.
      </div>
    </footer>
  );
}
