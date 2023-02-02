function List() {
    console.log('List -> render')

    let stickies

    try {
        stickies = retrievePublicStickies()
    } catch(error) {
        alert(error.message)
    }

    return <ul className="list-panel">
        {stickies.map(sticky => <li key={sticky.id}>
            <p>{sticky.text}</p>
            <strong>{sticky.user}</strong>
        </li>)}
    </ul>
}