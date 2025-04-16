function ShopItem({ item }) {
    return (
        <div className="item">
            <img src={item.img} alt={item.name} className="w-20 h-16 object-contain item-pic" />
            <h2 className="text-md font-semibold uppercase">{item.name}</h2>
            <p className="text-sm text-gray-500">{item.color}</p>
            <span className="text-red-500 font-bold text-sm">${item.price}</span>
            <button>
                Add to cart
            </button>
        </div>
    );
}


export default ShopItem;
