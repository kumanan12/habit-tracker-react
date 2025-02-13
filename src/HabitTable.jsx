export default function HabitTable({ newHabits }){

    let habitsToBeAdded = newHabits;


    return(
        <>
        <div className="container">
        <table>
            <tr>
                <th>Habit</th>
                <th>Date</th>
            </tr>
            {
                habitsToBeAdded.map( (habit) => (
                    <tr key={habit.id}>
                        <td>{habit.name}</td>
                        <td>{habit.date}</td>
                    </tr>
                ) )
            }
        </table>
        </div>
        </>
    );
}