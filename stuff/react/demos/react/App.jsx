function App() {
    const h1 = <h1 className="text-red" title="hello world">hola mundo</h1>

    const ul = <ul>
        <li>red</li>
        <li>green</li>
        <li>blue</li>
    </ul>


    return <div>
        {h1}
        {ul}
        <Hello />
        <Calculin />
        <TicTacToe />
        <TicTacToe />
        <HelloTo who="Lau" />
        <HelloTo who="Flor" />
        <HelloTo who="Eli" />
        <SaluteTo salutation="Bye" who="Xavi" />
        <SaluteTo salutation="Ciao" who="Juan" />
        <Counter />
        <Abc />
        <Notes />
    </div>
}