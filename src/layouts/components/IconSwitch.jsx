function IconSwitch({ icon, onSwitch }) {
    return (
        <button
            className="icon-switch material-icons text-3xl text-indigo-600 hover:text-indigo-800 transition-colors"
            onClick={onSwitch}
        >
            {icon}
        </button>
    );
}

export default IconSwitch;
