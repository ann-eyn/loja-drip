import { useNavigate } from 'react-router-dom';

const categorias = [
  {
    nome: 'Camisetas',
    imagem: 'public/416782855_11662230.jpg',
  },
  {
    nome: 'Calças',
    imagem: 'public/hand-holding-light-brown-beige-pants.jpg',
  },
  {
    nome: 'Bonés',
    imagem: 'https://resourceboy.com/wp-content/uploads/2024/04/perspective-sight-of-snapback-cap-mockup.jpg',
  },
  {
    nome: 'Calçados',
    imagem: 'public/high-heels-black-velvet.jpg',
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
  }

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
