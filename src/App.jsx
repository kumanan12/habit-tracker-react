import HabitTable from "./HabitTable";
import HabitInput from "./HabitInput";
import { useState } from "react";

export default function App() {
  const [habits, setHabits] = useState([]);
  const [id, setId] = useState(1);

  function createHabit(habit) {
    let newHabit = {
      id: id,
      name: habit,
      date: new Date().toString(),
    };
    setId(id + 1);
    return newHabit
  }

  function onHabitAddedHandler(addedHabit) {
    let newHabit = createHabit(addedHabit);
    setHabits((prevHabits) => [...prevHabits, newHabit] );
    console.log(habits);
    
    
  }

  return (
    <>
      <HabitTable newHabits={habits} />
      <HabitInput onHabitAdded={onHabitAddedHandler} />
    </>
  );
}
