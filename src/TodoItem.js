import React, { useEffect, useState } from "react";
import randomcolor from "randomcolor";
function TodoItem(props) {
  const [itemColor, setColor] = useState("red");
  /**Styling each item with random color upon change in its state */
  useEffect(() => {
    setColor(randomcolor());
  }, [props.data.checked]);

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.data.checked}
        onChange={() => props.handleChange(props.data.id)}
      />
      <p style={{ color: itemColor }}>{props.data.name}</p>
    </div>
  );
}
export default TodoItem;
