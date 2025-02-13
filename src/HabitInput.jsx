export default function HabitInput() {
  return (
    <>
      <div id="habit-input-box">
        <label htmlFor="habit-input">Habit: </label>
        <input type="text" id="habit-input" name="habit-input" />
        <button id="add-habit">Add</button>
        <button id="save-habit">Save</button>
        <button id="Load-habit">Load</button>
      </div>
    </>
  );
}
