import HabitTable from "./HabitTable";
import HabitInput from "./HabitInput";
import { useEffect, useState } from "react";

export default function App() {
  const [habits, setHabits] = useState([]);
  const [id, setId] = useState(1);

  useEffect( () => {
    fetch('http://localhost:7000/habits')
    .then(res => res.json())
    .then(data => setHabits(data))
  }, [])

  /*  useEffect( () => {
    loadFromLocalStorage();
  }, []) */

  function createHabit(habit) {
    let newHabit = {
      id: id,
      habit: habit,
      date: new Date().toString(),
    };
    setId(id + 1);
    return newHabit;
  }

  function onHabitAddedHandler(addedHabit) {

    if(!addedHabit.trim()){
      return;
    }

    let newHabit = createHabit(addedHabit);
    setHabits((prevHabits) => [...prevHabits, newHabit]);
    console.log(habits);
  }


/* 
  function onHabitSavedHandler() {
    storeInLocalStorage();
    alert("Habits saved successfully!");
  }

  function onHabitLoadedHandler() {
    loadFromLocalStorage();

    setTimeout(() => {
      alert("Habits loaded from previous session!");
    }, 500);
  } */

  return (
    <>
    <div id="container">
      <div id="table-container">
        <HabitTable newHabits={habits} />
        <HabitInput
          onHabitAdded={onHabitAddedHandler}
/*           onHabitSaved={onHabitSavedHandler}
          onHabitLoaded={onHabitLoadedHandler} */
        />
      </div>
      </div>
    </>
  );
}
