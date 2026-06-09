interface Buttonprops {
    children: React.ReactNode;
    onClick?: () => void;
}

export const Button = ({ children, onClick }: Buttonprops) => {
    return (
        <button
        type="button" 
        onClick={onClick}
        className="px-6 py-3 bg-[#ad5921] text-parchment font-bold uppercase tracking-widest rounded-full border-2 border-deep-brown shadow-[4px_4px_0px_0px_rgba(74,55,40,1)] hover:translate-x-[0.5] hover:translate-y-[0.5] hover:shadow-[2px_2px_0px_0px_rgba(74,55,40,1)] transition-all"
        >
            {children}
        </button>
    );
};
