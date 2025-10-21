import React from "react";

const PrimaryButton = ({ label, onClick, type = "button" }) => {
    return (
        <button
        type ={type}
        onClick = {onClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
        >{label}
        </button>
    );
};

export default PrimaryButton;