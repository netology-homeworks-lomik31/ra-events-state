function Toolbar({ filters, selected, onSelectFilter }) {

    return (
        <div className="toolbar">
            {filters.map((filter) => (
                <div className="filter">
                    <button
                        key={filter}
                        className={`toolbar-button ${selected === filter ? "selected" : ""}`}
                        onClick={() => onSelectFilter(filter)}
                    >
                        {filter}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Toolbar;
