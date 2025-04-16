import ShopItem from "./ShopItem";

function ListView({ items }) {
    return (
        <div className="list-view flex flex-col gap-4">
            {items.map((item) => (
                <ShopItem item={item} />
            ))}
        </div>
    )
}

export default ListView
