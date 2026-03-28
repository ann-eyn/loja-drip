import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";


const ProductCard = ({ product = {} }) => {
  const { image, price, priceDiscount, name, id, category } = product;
  const { cartItems, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const isInCart = cartItems.some((item) => item.id === id);
  console.log("Render Card", id, { isInCart, cartItems });

  const discountPercentage =
    typeof price === "number" &&
    typeof priceDiscount === "number" &&
    price > priceDiscount
      ? Math.round(((price - priceDiscount) / price) * 100)
      : null;

  const formatPrice = (value) => {
    if (typeof value !== "number") return null;
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const handleCartClick = () => {
    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(product);
    }
  };

  const handleViewMore = () => {
    navigate(`/produto/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col border rounded-lg overflow-hidden shadow-md bg-white transition hover:shadow-lg w-full">
      <div className="relative h-56 md:h-60 flex items-center justify-center p-4">
        {discountPercentage && (
          <span className="absolute top-2 left-2 bg-lime-200 text-xs font-bold text-gray-800 px-2 py-1 rounded">
            {discountPercentage}% OFF
          </span>
        )}
        <img
          src={image}
          alt={`Imagem do produto ${name}`}
          className="max-h-40 md:max-h-44 object-contain"
          // Corrigido: adiciona fallback local caso o domínio da imagem falhe (DNS/CORS/Tracking Prevention)
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/product-thumb-1.jpeg'; }}
        />
      </div>

      <div className="p-4 flex flex-col gap-2 grow">
        <p className="text-sm text-gray-500">{category || "Produto"}</p>
        <p className="font-medium text-sm">{name}</p>

        <div className="text-sm">
          {typeof price === "number" && priceDiscount && (
            <span className="line-through text-gray-400 mr-2">
              {formatPrice(price)}
            </span>
          )}
          <span className="font-bold text-black">
            {formatPrice(priceDiscount ?? price)}
          </span>
        </div>
      </div>

      <div className="p-4 pt-0 flex flex-col gap-2 relative z-10">
        {/* CAUSA: Em alguns cenários, estilos externos podiam ocultar o botão no estado base. */}
        {/* SOLUÇÃO: Garantimos visibilidade explícita e altura mínima e estados de interação claros (AA). */}
        <button
          onClick={handleCartClick}
          className={`relative z-[1] mb-2 py-3 px-3 rounded text-sm transition font-semibold w-full opacity-100 visible block min-h-11 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 ${
            isInCart
              ? "bg-green-600 text-white hover:brightness-110"
              : "bg-primary text-white hover:brightness-110"
          }`}
        >
          {console.log("Botão render:", id, isInCart)}
          {isInCart ? "Adicionado ao carrinho" : "Adicionar ao carrinho"}
        </button>

        <button
          onClick={handleViewMore}
          className="text-sm px-3 py-2 rounded bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 opacity-100 visible block"
        >
          Ver mais
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
