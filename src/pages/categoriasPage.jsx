import { useNavigate } from 'react-router-dom';

const categorias = [
  {
    nome: 'Camisetas',
    imagem: 'https://img.freepik.com/psd-gratuitas/homem-de-camiseta-branca-sentado-em-um-cafe_23-2151971621.jpg?t=st=1774654514~exp=1774658114~hmac=f1e5346ac64d1ea36cf80800eb26618111071d7ad232fcc96af6531629cc524a&w=1060',
  },
  {
    nome: 'Calças',
    imagem: 'https://img.freepik.com/fotos-gratis/mao-segurando-calcas-beige-castanhas-claras_23-2150756279.jpg?t=st=1774655855~exp=1774659455~hmac=f9649d34449ec5d3dfb0fbd2156b477a4f2172ddffb4fcef1e240ad0273210ec&w=1060',
  },
  {
    nome: 'Bonés',
    imagem: 'https://resourceboy.com/wp-content/uploads/2024/04/perspective-sight-of-snapback-cap-mockup.jpg',
  },
  {
    nome: 'Calçados',
    imagem: 'https://img.freepik.com/fotos-gratis/salto-alto-em-veludo-preto_53876-102771.jpg?t=st=1774656626~exp=1774660226~hmac=00d7557ca8d1976ba2231da1f1fc903156be607017fe44ee5fcbfebd29b97abe&w=1060',
  },
  {
    nome: 'Headphones',
    imagem: 'https://img.freepik.com/fotos-gratis/display-de-fones-de-ouvido-de-musica-levitantes_23-2149817606.jpg?t=st=1774656409~exp=1774660009~hmac=22011f4d0e6904be13714cd81415149c5ca7b4e28e77c5c769d4b03a5d332117&w=740',
  },
];

const CategoriasPage = () => {
  const navigate = useNavigate();

  const handleClick = (categoria) => {
    navigate(`/produtos?categoria=${encodeURIComponent(categoria)}`);
  };

  return (
    <div className="min-h-screen bg-base py-16 px-4 sm:px-6 md:px-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-primary mb-2 tracking-wide">
        Categorias:
      </h1>
      <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-12"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {categorias.map((cat) => (
          <div
            key={cat.nome}
            onClick={() => handleClick(cat.nome)}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105 overflow-hidden flex flex-col"
          >
            <img
              src={cat.imagem}
              alt={cat.nome}
              className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-t-2xl"
            />
            <div className="p-5 text-center">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 hover:text-primary transition-colors">
                {cat.nome}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriasPage;
