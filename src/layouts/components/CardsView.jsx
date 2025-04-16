import ShopCard from "./ShopCard";

function CardsView({ cards }) {
    return (
        <div className="cards-view grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cards.map((card) => (
                <ShopCard card={card} />
            ))}
        </div>
    );
}

export default CardsView;
