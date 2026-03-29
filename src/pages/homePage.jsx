import { useState, useMemo } from 'react'; 
import Section from '../components/section';
import Hero from '../components/hero';
import ProductListing from '../components/HomePage/productListing';
import { IoShirtOutline } from "react-icons/io5";
import { PiBaseballCapLight, PiHeadphonesLight, PiPantsLight } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa"; 
import airJordanImg from '../assets/Laye 1.png';
import { useNavigate } from 'react-router-dom';

const categoryIcons = [
  { icon: <IoShirtOutline size={40} />, label: "Camisetas" },
  { icon: <PiPantsLight size={40} />, label: "Calças" },
  { icon: <PiBaseballCapLight size={40} />, label: "Bonés" },
  { icon: <PiHeadphonesLight size={40} />, label: "Headphones" },
  { icon: <GiConverseShoe size={40} />, label: "Calçados" },
];

const productsData = [
  { id: 1, name: "Nike Air Max 270", image: "https://images.tcdn.com.br/img/img_prod/740066/tenis_nike_air_max_270_react_optical_preto_cinza_389_1_20200120160045.jpg", price: 200, priceDiscount: 149.9, category: "Calçados" },
 
  { id: 2, name: "Adidas Ultraboost", image: "https://authenticfeet.vtexassets.com/arquivos/ids/434723-800-800?v=638562278565370000&width=800&height=800&aspect=true", price: 200, category: "Calçados", priceDiscount: 180 },
  
  { id: 3, name: "Bota Sperry Parafuso de cano", image: "https://m.media-amazon.com/images/I/61s8+4iqNyL._AC_SY879_.jpg", price: 179.90, category: "Calçados", priceDiscount: 199.99 },
  
  { id: 4, name: "BEMMY Chinelo de tubarão", image: "https://m.media-amazon.com/images/I/6163WQt70lL._AC_SY500_.jpg", price: 59, category: "Calçados" },

  { id: 5, name: "Reebok Classic Leather", image: "https://asicsbr.vteximg.com.br/arquivos/ids/3745091-1000-1000/image-1.jpg", price: 30, category: "Calçados" },
  
  { id: 6, name: "Converse Chuck Taylor", image: "https://cloviscalcados.vteximg.com.br/arquivos/ids/1036233-1024-1024/Tenis-Masculino-Chuck-Taylor-Converse-All-Star-CT00040007-0320004_001-02.jpg?v=638364710577700000", price: 250, category: "Calçados" },

  { id: 7, name: "Camiseta Peanuts Best Friends", image: "https://down-br.img.susercontent.com/file/sg-11134201-7rdvg-mcbjxunek52199@resize_w450_nl.webp", price: 100, category: "Camisetas" },

  { id: 8, name: "Calça Mom Jeans", image: "https://oqvestir.fbitsstatic.net/img/p/calca-feminina-mom-jeans-azul-178657/463134.jpg?w=1600&h=2133&v=202501231556", price: 400, category: "Calças" },

  { id: 9, name: "Boné MST", image: "https://http2.mlstatic.com/D_NQ_NP_662323-MLB78900818559_092024-O-bone-mst-brim-6-gomos-adulto.webp", price: 200, category: "Bonés" },

  { id: 10, name: "Headphone JBL", image: "https://m.media-amazon.com/images/I/61BDf8KO8AL.__AC_SX300_SY300_QL70_ML2_.jpg", price: 299, category: "Headphones" },

  { id: 11, name: "Headphone Anker Q201", image: "https://m.media-amazon.com/images/I/61UAFRru23L._AC_SX425_.jpg", price: 331, category: "Headphones" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return productsData;
    }
    return productsData.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = (categoryLabel) => {
    if (selectedCategory === categoryLabel) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryLabel);
    }
  };

  const goToProducts = () => {
    navigate('/produtos');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Hero />

      <div className="bg-[#f6f6f6] pb-20 pt-10">
        <h2 className="text-2xl font-semibold text-gray-700 px-2 md:px-20 lg:px-40 xl:px-56 mb-6">
          Coleções em destaque:
        </h2>

        <div className="grid sm:grid-cols-4 md:grid-cols-3 gap-3 px-2 md:px-20 lg:px-40 xl:px-56">
          {[ "/collection-1.png", "/collection-2.png", "/collection-3.png", ].map((image, index) => (
            <div key={index} className="relative overflow-visible bg-white rounded-xl shadow aspect-square">
              <img src={image} alt={`Coleção ${index + 1}`} className="w-full h-full object-contain p-4" />
              <div className="absolute top-2 left-4 bg-lime-200 text-[12px] font-bold text-gray-900 px-3 py-0.75 rounded-full z-10">30% OFF</div>
              <div className="absolute bottom-6 left-4 z-10">
                <button onClick={goToProducts} className="bg-white text-primary text-sm font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-50 transition opacity-100">Comprar</button>
              </div>
            </div>
          ))}
        </div>

        <Section>
          <div className="flex justify-center gap-6 flex-wrap px-4 md:px-0 mt-10">
            {categoryIcons.map((item, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(item.label)}
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                <div className={`w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 group-hover:text-primary transition-colors ${selectedCategory === item.label ? 'ring-2 ring-offset-2 ring-primary' : ''}`}>
                  {item.icon}
                </div>
                <span className="text-sm text-gray-700 font-medium group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {selectedCategory && (
            <div className="text-center mt-8">
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 mx-auto text-primary font-semibold hover:underline"
              >
                <FaArrowLeft />
                Voltar para todos os produtos
              </button>
            </div>
          )}
        </Section>

        <Section>
          <ProductListing products={filteredProducts} />
        </Section>
      </div>

      <section className="bg-white py-16 px-4 md:px-20 lg:px-32 flex flex-col md:flex-row items-center gap-12 relative">
        <div className="absolute left-1/2 -translate-x-1/2 md:left-44 md:translate-x-0 top-1/2 -translate-y-1/2 w-[18rem] h-[18rem] md:w-[25rem] md:h-[25rem] rounded-full bg-gradient-to-t from-white to-purple-200/40 z-0"></div>
        <div className="flex-1 z-10">
          <img src={airJordanImg} alt="Air Jordan edição de colecionador" className="w-full max-w-md ml-0 mx-auto" />
        </div>
        <div className="flex-1 text-center md:text-left z-10">
          <p className="text-sm font-semibold text-primary mb-2">Oferta especial</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 leading-tight mb-4">
            Air Jordan edição de<br />colecionador
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          {/* Garantia de visibilidade do estado base */}
          <button onClick={goToProducts} className="bg-primary hover:brightness-110 text-white px-12 py-2 rounded-lg font-semibold transition opacity-100">
            Ver Oferta
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
