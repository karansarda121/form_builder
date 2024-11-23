// import React, { useState } from "react";
// import DragArea from "./components/DragArea";
// import FormArea from "./components/FormArea";

// const App = () => {
//   const [draggedElement, setDraggedElement] = useState(null);
//   const [formElements, setFormElements] = useState([]);

//   const handleDragStart = (elementType) => {
//     setDraggedElement(elementType);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     if (draggedElement) {
//       const newElement = {
//         id: Date.now(),
//         type: draggedElement,
//         label: `${draggedElement} Label`,
//         value: draggedElement === "checkbox" ? [] : "",
//         options:
//           draggedElement === "radio" || draggedElement === "checkbox"
//             ? ["Option 1"]
//             : [],
//       };
//       setFormElements([...formElements, newElement]);
//       setDraggedElement(null);
//     }
//   };

//   const updateFormElement = (id, updatedProperties) => {
//     const updatedElements = formElements.map((element) =>
//       element.id === id ? { ...element, ...updatedProperties } : element
//     );
//     setFormElements(updatedElements);
//   };

//   const handleRemoveElement = (id) => {
//     const updatedElements = formElements.filter((element) => element.id !== id);
//     setFormElements(updatedElements);
//   };

//   return (
//     <div className="App">
//       <h1>Drag-and-Drop Form Builder</h1>
//       <div className="form-builder">
//         <div className="left-panel">
//           <DragArea handleDragStart={handleDragStart} />
//         </div>
//         <div
//           className="form-preview"
//           onDrop={handleDrop}
//           onDragOver={(e) => e.preventDefault()}
//         >
//           <FormArea
//             formElements={formElements}
//             updateFormElement={updateFormElement}
//             removeFormElement={handleRemoveElement}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import DragArea from "./components/DragArea";
import FormArea from "./components/FormArea";

const App = () => {
  const [draggedElement, setDraggedElement] = useState(null);
  const [formElements, setFormElements] = useState([]);
  const [generatedForm, setGeneratedForm] = useState([]);

  // This will hold the actual input values for the generated form
  const [formValues, setFormValues] = useState({});

  const handleDragStart = (elementType) => {
    setDraggedElement(elementType);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedElement) {
      const newElement = {
        id: Date.now(),
        type: draggedElement,
        label: `${draggedElement} Label`,
        value: draggedElement === "checkbox" ? [] : "", // Default values based on type
        options:
          draggedElement === "radio" || draggedElement === "checkbox"
            ? ["Option 1"]
            : [],
      };
      setFormElements([...formElements, newElement]);
      setDraggedElement(null);
    }
  };

  const updateFormElement = (id, updatedProperties) => {
    const updatedElements = formElements.map((element) =>
      element.id === id ? { ...element, ...updatedProperties } : element
    );
    setFormElements(updatedElements);
  };

  const handleRemoveElement = (id) => {
    const updatedElements = formElements.filter((element) => element.id !== id);
    setFormElements(updatedElements);
  };

  const handleInputChange = (id, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleCheckboxChange = (id, option) => {
    setFormValues((prevValues) => {
      const updatedValue = prevValues[id] || [];
      if (updatedValue.includes(option)) {
        return {
          ...prevValues,
          [id]: updatedValue.filter((item) => item !== option),
        };
      } else {
        return {
          ...prevValues,
          [id]: [...updatedValue, option],
        };
      }
    });
  };

  const generateForm = () => {
    const formHTML = formElements.map((element) => {
      switch (element.type) {
        case "text":
        case "email":
        case "password":
        case "number":
        case "textarea":
        case "date":
          return (
            <div key={element.id} className="generated-form-element">
              <label>{element.label}</label>
              <input
                type={element.type}
                placeholder={`Enter ${element.label.toLowerCase()}...`}
                value={formValues[element.id] || ""}
                onChange={(e) => handleInputChange(element.id, e.target.value)}
              />
            </div>
          );
        case "select":
          return (
            <div key={element.id} className="generated-form-element">
              <label>{element.label}</label>
              <select
                value={formValues[element.id] || ""}
                onChange={(e) => handleInputChange(element.id, e.target.value)}
              >
                {element.options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        case "radio":
          return (
            <div key={element.id} className="generated-form-element">
              <label>{element.label}</label>
              {element.options.map((option, idx) => (
                <div key={idx}>
                  <input
                    type="radio"
                    name={element.id}
                    value={option}
                    checked={formValues[element.id] === option}
                    onChange={() => handleInputChange(element.id, option)}
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>
          );
        case "checkbox":
          return (
            <div key={element.id} className="generated-form-element">
              <label>{element.label}</label>
              {element.options.map((option, idx) => (
                <div key={idx}>
                  <input
                    type="checkbox"
                    checked={formValues[element.id]?.includes(option)}
                    onChange={() => handleCheckboxChange(element.id, option)}
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>
          );
        case "image":
          return (
            <div key={element.id} className="generated-form-element">
              <label>{element.label}</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleInputChange(element.id, e.target.files[0])
                }
              />
              {formValues[element.id] && (
                <div>
                  <img
                    src={URL.createObjectURL(formValues[element.id])}
                    alt="Uploaded"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              )}
            </div>
          );
        default:
          return null;
      }
    });

    setGeneratedForm(formHTML);
  };

  return (
    <div className="App">
      <h1>Drag-and-Drop Form Builder</h1>

      <div className="form-builder">
        <div className="left-panel">
          <DragArea handleDragStart={handleDragStart} />
        </div>
        <div
          className="form-preview"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <FormArea
            formElements={formElements}
            updateFormElement={updateFormElement}
            removeFormElement={handleRemoveElement}
          />
        </div>
      </div>

      <button
        onClick={generateForm}
        style={{ marginTop: "20px", padding: "10px" }}
      >
        Generate Form and Scroll Down
      </button>

      <div className="generated-form">{generatedForm}</div>
    </div>
  );
};

export default App;
