


import React from "react";

const FormElementEditor = ({
  element,
  updateFormElement,
  removeFormElement,
}) => {
  const handleLabelChange = (e) => {
    updateFormElement(element.id, { label: e.target.value });
  };

  const handleInputChange = (e) => {
    updateFormElement(element.id, { value: e.target.value });
  };

  const handleOptionChange = (e, idx) => {
    const updatedOptions = [...element.options];
    updatedOptions[idx] = e.target.value;
    updateFormElement(element.id, { options: updatedOptions });
  };

  const addOption = () => {
    updateFormElement(element.id, {
      options: [...element.options, `Option ${element.options.length + 1}`],
    });
  };

  const handleRadioChange = (e) => {
    updateFormElement(element.id, { selectedOption: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        updateFormElement(element.id, { value: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-element">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <label>
          Label:
          <input
            type="text"
            value={element.label}
            onChange={handleLabelChange}
            style={{ marginLeft: "10px" }}
          />
        </label>
        <button
          onClick={() => removeFormElement(element.id)}
          style={{
            background: "red",
            color: "white",
            border: "none",
            cursor: "pointer",
            padding: "5px",
          }}
        >
          Remove
        </button>
      </div>

      <div style={{ marginTop: "10px" }}>
        {element.type === "text" && (
          <>
            <label>{element.label}</label>
            <input
              type="text"
              placeholder="Enter text..."
              value={element.value || ""}
              onChange={handleInputChange}
              style={{ marginLeft: "10px" }}
            />
          </>
        )}
        {element.type === "email" && (
          <>
            <label>{element.label}</label>
            <input
              type="email"
              placeholder="Enter email..."
              value={element.value || ""}
              onChange={handleInputChange}
              style={{ marginLeft: "10px" }}
            />
          </>
        )}
        {element.type === "password" && (
          <>
            <label>{element.label}</label>
            <input
              type="password"
              placeholder="Enter password..."
              value={element.value || ""}
              onChange={handleInputChange}
              style={{ marginLeft: "10px" }}
            />
          </>
        )}
        {element.type === "number" && (
          <>
            <label>{element.label}</label>
            <input
              type="number"
              placeholder="Enter number..."
              value={element.value || ""}
              onChange={handleInputChange}
              style={{ marginLeft: "10px" }}
            />
          </>
        )}
        {element.type === "textarea" && (
          <>
            <label>{element.label}</label>
            <textarea
              placeholder="Enter text..."
              value={element.value || ""}
              onChange={handleInputChange}
              style={{ marginLeft: "10px", width: "100%", minHeight: "50px" }}
            />
          </>
        )}
        {element.type === "date" && (
          <>
            <label>{element.label}</label>
            <input
              type="date"
              value={element.value || ""}
              onChange={handleInputChange}
              style={{ marginLeft: "10px" }}
            />
          </>
        )}
        {element.type === "select" && (
          <>
            <label>{element.label}</label>
            <select
              value={element.value || ""}
              onChange={handleInputChange}
              style={{ marginLeft: "10px" }}
            >
              <option value="" disabled>
                Select an option
              </option>
              {element.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button onClick={addOption} style={{ marginLeft: "10px" }}>
              Add Option
            </button>
            {element.options.map((option, idx) => (
              <div key={idx}>
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(e, idx)}
                  style={{ marginLeft: "10px" }}
                />
              </div>
            ))}
          </>
        )}
        {element.type === "radio" && (
          <>
            <label>{element.label}</label>
            {element.options.map((option, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  name={element.id}
                  value={option}
                  onChange={handleRadioChange}
                  checked={element.selectedOption === option}
                />
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(e, idx)}
                  style={{ marginLeft: "5px" }}
                />
              </div>
            ))}
            <button onClick={addOption} style={{ marginTop: "5px" }}>
              Add Option
            </button>
          </>
        )}
        {element.type === "checkbox" && (
          <>
            <label>{element.label}</label>
            {element.options.map((option, idx) => (
              <div key={idx}>
                <input type="checkbox" />
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(e, idx)}
                  style={{ marginLeft: "5px" }}
                />
              </div>
            ))}
          </>
        )}
        {element.type === "image" && (
          <>
            <label>{element.label}</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ marginLeft: "10px" }}
            />
            {element.value && (
              <div style={{ marginTop: "10px" }}>
                <img
                  src={element.value}
                  alt="Uploaded"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FormElementEditor;


