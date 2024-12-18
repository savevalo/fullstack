const Course = (props) => {
    const {course} = props
    console.log(course)
    // for (let i = 0; i < course.parts.length; i++) {
    //     total = total + course.parts[i].exercises
    // }
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <div>
            <h2>{course.name}</h2>
            <ul>
                {course.parts.map(part =>
                    <li key={part.id}>
                        {part.name} {part.exercises}
                    </li>
                )}
            </ul>
            <p>total of {total} excercises</p>
        </div>
    )
}

export default Course