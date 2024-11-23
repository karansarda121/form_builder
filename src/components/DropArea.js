import React, { useState } from "react";
import FormElementEditor from "./FormElementEditor";

const DropArea = ({ formElements, updateFormElement, removeFormElement }) => {
  const [draggingIndex, setDraggingIndex] = useState(null);

  // Handle when dragging starts
  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  // Handle when an element is dropped
  const handleDrop = (index) => {
    const updatedFormElements = [...formElements];
    const [movedElement] = updatedFormElements.splice(draggingIndex, 1);
    updatedFormElements.splice(index, 0, movedElement);
    setDraggingIndex(null);
    updateFormElement(updatedFormElements);
  };

  // Handle when drag over event occurs
  const handleDragOver = (index) => {
    if (index !== draggingIndex) {
      const updatedFormElements = [...formElements];
      const [movedElement] = updatedFormElements.splice(draggingIndex, 1);
      updatedFormElements.splice(index, 0, movedElement);
      updateFormElement(updatedFormElements);
    }
  };

  return (
    <div className="drop-area">
      <h3>Form Builder</h3>
      {formElements.length === 0 && (
        <p>Drag and drop elements here to build your form.</p>
      )}
      {formElements.map((element, index) => (
        <FormElementEditor
          key={element.id}
          element={element}
          updateFormElement={(updatedElement) =>
            updateFormElement(index, updatedElement)
          }
          removeFormElement={() => removeFormElement(element.id)}
          onDragStart={() => handleDragStart(index)}
          onDrop={() => handleDrop(index)}
          onDragOver={() => handleDragOver(index)}
        />
      ))}
    </div>
  );
};

export default DropArea;
