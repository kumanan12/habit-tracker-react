import HabitTable from "./HabitTable";
import HabitInput from "./HabitInput";
import { useEffect, useState } from "react";

const backendURl = import.meta.env.VITE_BACKEND_URL

export default function App() {
  const [habits, setHabits] = useState([]);

  useEffect( () => {
    fetch(`${backendURl}/habits`)
    .then(res => res.json())
    .then(data => setHabits(data))
  }, [])

  /*  useEffect( () => {
    loadFromLocalStorage();
  }, []) */

  function createHabit(habit) {
    let newHabit = {
      habit: habit,
      date: new Date().toString(),
    };
    return newHabit;
  }

  function onHabitAddedHandler(addedHabit) {

    if(!addedHabit.trim()){
      return;
    }

    let newHabit = createHabit(addedHabit);

        fetch(`${backendURl}/habits`, {
          method: 'POST',
          headers : { 'Content-Type': 'application/json' },
          body: JSON.stringify(newHabit)
        })
        .then(res => {
          if(!res.ok){
            throw new Error('failed to add new habit')
          }
          return res.json();

        })
        .then(
          newlySentHabit => {
            setHabits(prev => [...prev, newlySentHabit])
          }
        )
          .catch(error => console.error('Fetch error:', error.message));

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
