import React, { useState, useEffect } from "react";
import "./styles.css";
import Title from "./Title";
import TodoItem from "./TodoItem";
import todoitems from "./todoitems";

export default function App() {
  const [todoArray, setTodoArray] = useState(todoitems);
  const [score, setScore] = useState(0);
  /**This handleChange toggles the checkbox upon user input */
  function handleChange(id) {
    setTodoArray(
      todoArray.map(items =>
        items.id === id ? { ...items, checked: !items.checked } : items
      )
    );
  }
  /**Calculate total Credit based on checked items here useEffect works as
   * componentDidUpdate Lifecycle event,which runs upon change in todoArray.
   */
  useEffect(() => {
    const scoreArr = [];
    todoArray.forEach(item => {
      if (item.checked) {
        scoreArr.push(item.weight);
      }
    });
    let finalTempScore = 0;
    scoreArr.forEach(weight => {
      finalTempScore += weight;
    });
    setScore(finalTempScore);
  }, [todoArray]);
  /**Instantaniate the TodoItem component by iterating over the todoItems array */
  const itemArray = todoArray.map(item => (
    <TodoItem key={item.id} data={item} handleChange={handleChange} />
  ));
  return (
    <div>
      <div className="title-header">
        <Title title={"You Got to do Something!!!"} />
      </div>
      <div className="todo-list">
        {itemArray}
        <h5 style={{ color: score < 13 ? "red" : "green" }}>
          Total Credit:{score}
        </h5>
      </div>
    </div>
  );
}
