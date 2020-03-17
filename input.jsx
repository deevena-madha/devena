import React from "react";
const Input = ({ value, inputName, type, handleInputField, label, error }) => {
    return (
        <div>
            <label htmlFor={inputName}>{label}</label>
            <input
                value={value}
                type={type}
                className="form-control"
                id={inputName}
                name={inputName}
                onChange={handleInputField}
            />
            {error && <p className="text-danger small">{error}*</p>}
        </div>
    );
};

export default Input;