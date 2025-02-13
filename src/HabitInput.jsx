import { useState } from "react";

export default function HabitInput({ onHabitAdded }) {
  const [newHabit, setNewHabit] = useState("");

  function onInputChangeHandler(event) {
    let userInput = event.target.value;
    setNewHabit(userInput);
  }

  function onAddHandler() {
    console.log(newHabit);
    onHabitAdded(newHabit);
    setNewHabit("");
  }

  function onKeyEnter(key){
    if (key.code === 'Enter') {
        onAddHandler();
    }

  }

  return (
    <>
      <div id="habit-input-box">
        <label htmlFor="habit-input">Habit: </label>
        <input
          type="text"
          id="habit-input"
          name="habit-input"
          placeholder="Add a habit..."
          value={newHabit}
          onChange={onInputChangeHandler}
          onKeyDown={onKeyEnter}
        />
        <button id="add-habit" onClick={onAddHandler}>
          Add
        </button>
        <button id="save-habit">Save</button>
        <button id="Load-habit">Load</button>
      </div>
    </>
  );
}
