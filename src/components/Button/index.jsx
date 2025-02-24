import React from "react";

const Button = ({ onClick, color, children }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center w-[163px] h-[32px] border rounded-[4px] ${color}`}
            style={{ zIndex: 500 }}
        >
            <span className="flex text-[12px] font-bold uppercase">{children}</span>
        </button>
    );
};

export default Button;
