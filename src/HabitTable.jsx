export default function HabitTable({ newHabits }) {
  let habitsToBeAdded = newHabits;

  return (
    <>
      <div className="table-box">
        <table>

          <thead>
            <tr>
              <th>Habit</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {habitsToBeAdded.map((habit) => (
              <tr key={habit.id}>
                <td>{habit.name}</td>
                <td className="table-date">{habit.date}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </>
  );
}
