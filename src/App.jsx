import HabitTable from "./HabitTable";
import HabitInput from "./HabitInput";
import { useState } from "react";

export default function App() {
  const [habits, setHabits] = useState([]);
  const [id, setId] = useState(1);

  function loadFromLocalStorage() {
    let habitsJSON = window.localStorage.getItem("habits");
    if (habitsJSON) {
      let habitsString = JSON.parse(habitsJSON);
      setHabits(habitsString);
    }
  }

  function storeInLocalStorage() {
    let habitsString = JSON.stringify(habits);
    window.localStorage.setItem("habits", habitsString);
  }

  /*  useEffect( () => {
    loadFromLocalStorage();
  }, []) */

  function createHabit(habit) {
    let newHabit = {
      id: id,
      name: habit,
      date: new Date().toString(),
    };
    setId(id + 1);
    return newHabit;
  }

  function onHabitAddedHandler(addedHabit) {
    let newHabit = createHabit(addedHabit);
    setHabits((prevHabits) => [...prevHabits, newHabit]);
    console.log(habits);
  }

  function onHabitSavedHandler() {
    storeInLocalStorage();
    alert("Habits saved successfully!");
  }

  function onHabitLoadedHandler() {
    loadFromLocalStorage();

    setTimeout(() => {
      alert("Habits loaded from previous session!");
    }, 500);
  }

  return (
    <>
      <div id="container">
        <HabitTable newHabits={habits} />
        <HabitInput
          onHabitAdded={onHabitAddedHandler}
          onHabitSaved={onHabitSavedHandler}
          onHabitLoaded={onHabitLoadedHandler}
        />
      </div>
    </>
  );
}
