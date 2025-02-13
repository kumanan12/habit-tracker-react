export default function HabitTable({ newHabits }){

    let habitsToBeAdded = newHabits;


    return(
        <>
        <div className="container">
        <table>
            <thead>
            <tr>
                <th>Habit</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {
                habitsToBeAdded.map( (habit) => (
                    <tr key={habit.id}>
                        <td>{habit.name}</td>
                        <td>{habit.date}</td>
                    </tr>
                ) )
            }
            </tbody>
        </table>
        </div>
        </>
    );
}