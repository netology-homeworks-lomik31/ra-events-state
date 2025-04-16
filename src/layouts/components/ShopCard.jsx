function ShopCard({ card }) {
    return (
        <div className="card">
            <img src={card.img} alt={card.title} className="item-pic"/>
            <h2 className="text-lg font-semibold uppercase">{card.title}</h2>
            <p className="text-sm text-gray-500">{card.color}</p>
            <span className="text-red-500 font-bold">${card.price}</span>
            <button>
                Add to cart
            </button>
        </div>
    );
}


export default ShopCard;
