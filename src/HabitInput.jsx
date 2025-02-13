export default function HabitInput() {

    function onInputChangeHandler(event){
        let newHabit = event.target.value;
        console.log(newHabit);
        
        
    }

    function onAddHandler(){
        console.log('add button clicked'); 
    }

  return (
    <>
      <div id="habit-input-box">
        <label htmlFor="habit-input">Habit: </label>
        <input type="text" id="habit-input" name="habit-input" placeholder="Add a habit..." onChange={onInputChangeHandler}/>
        <button id="add-habit" onClick={onAddHandler}>Add</button>
        <button id="save-habit">Save</button>
        <button id="Load-habit">Load</button>
      </div>
    </>
  );
}
