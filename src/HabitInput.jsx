import { useState } from "react";

export default function HabitInput({ onHabitAdded, onHabitSaved, onHabitLoaded }) {
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

  function onSaveHandler(){
    onHabitSaved();
  }

  function onLoadHandler(){
    onHabitLoaded();
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
        <button id="save-habit" onClick={onSaveHandler}>Save</button>
        <button id="Load-habit" onClick={onLoadHandler}>Load</button>
      </div>
    </>
  );
}
