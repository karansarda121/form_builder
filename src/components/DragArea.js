// import React from "react";

// const DragArea = ({ handleDragStart }) => {
//   return (
//     <div className="drag-area">
//       <h3>Drag Elements</h3>
//       <div
//         className="draggable-item"
//         draggable
//         onDragStart={() => handleDragStart("text")}
//       >
//         Text Field
//       </div>
//       <div
//         className="draggable-item"
//         draggable
//         onDragStart={() => handleDragStart("email")}
//       >
//         Email Field
//       </div>
//       <div
//         className="draggable-item"
//         draggable
//         onDragStart={() => handleDragStart("password")}
//       >
//         Password Field
//       </div>
//       <div
//         className="draggable-item"
//         draggable
//         onDragStart={() => handleDragStart("number")}
//       >
//         Number Field
//       </div>
//       <div
//         className="draggable-item"
//         draggable
//         onDragStart={() => handleDragStart("textarea")}
//       >
//         Textarea
//       </div>
//       <div
//         className="draggable-item"
//         draggable
//         onDragStart={() => handleDragStart("date")}
//       >
//         Date Picker
//       </div>
//       <div
//         className="draggable-item"
//         draggable
//         onDragStart={() => handleDragStart("select")}
//       >
//         Dropdown (Select)
//       </div>
//       <div
//         className="draggable-item"
//         draggable
//         onDragStart={() => handleDragStart("radio")}
//       >
//         Radio Button
//       </div>
//       <div
//         className="draggable-item"
//         draggable
//         onDragStart={() => handleDragStart("checkbox")}
//       >
//         Checkbox
//       </div>
//       <div
//         className="draggable-item"
//         draggable
//         onDragStart={() => handleDragStart("image")}
//       >
//         Image Upload
//       </div>
//     </div>
//   );
// };

// export default DragArea;

import React from "react";

const DragArea = ({ handleDragStart }) => {
  return (
    <div className="drag-area">
      <h3>Drag Elements</h3>
      <div
        className="draggable-item"
        draggable
        onDragStart={() => handleDragStart("text")}
      >
        Text Field
      </div>
      <div
        className="draggable-item"
        draggable
        onDragStart={() => handleDragStart("email")}
      >
        Email Field
      </div>
      <div
        className="draggable-item"
        draggable
        onDragStart={() => handleDragStart("password")}
      >
        Password Field
      </div>
      <div
        className="draggable-item"
        draggable
        onDragStart={() => handleDragStart("number")}
      >
        Number Field
      </div>
      <div
        className="draggable-item"
        draggable
        onDragStart={() => handleDragStart("textarea")}
      >
        Textarea
      </div>
      <div
        className="draggable-item"
        draggable
        onDragStart={() => handleDragStart("date")}
      >
        Date Picker
      </div>
      <div
        className="draggable-item"
        draggable
        onDragStart={() => handleDragStart("select")}
      >
        Dropdown (Select)
      </div>
      <div
        className="draggable-item"
        draggable
        onDragStart={() => handleDragStart("radio")}
      >
        Radio Button
      </div>
      <div
        className="draggable-item"
        draggable
        onDragStart={() => handleDragStart("checkbox")}
      >
        Checkbox
      </div>
      <div
        className="draggable-item"
        draggable
        onDragStart={() => handleDragStart("image")}
      >
        Image Upload
      </div>
    </div>
  );
};

export default DragArea;



