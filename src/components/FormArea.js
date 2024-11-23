import React from "react";
import FormElementEditor from "./FormElementEditor";

const FormArea = ({ formElements, updateFormElement, removeFormElement }) => {
  return (
    <div className="form-area">
      {formElements.length === 0 ? (
        <p>Drag elements here to build your form!</p>
      ) : (
        formElements.map((element) => (
          <FormElementEditor
            key={element.id}
            element={element}
            updateFormElement={updateFormElement}
            removeFormElement={removeFormElement}
          />
        ))
      )}
    </div>
  );
};

export default FormArea;
