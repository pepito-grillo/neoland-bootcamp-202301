import { useState } from 'react'
import createSticky from '../logic/create-sticky'
import List from '../components/List'
import Profile from '../components/Profile'
import MyList from '../components/MyList'

function Home(props) {
    console.log('Home -> render')
    
    const [view, setView] = useState('list')
    const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())

    const handleShowProfile = event => {
        event.preventDefault()

        setView('profile')
    }

    const handleShowList = event => {
        event.preventDefault()

        setView('list')
    }

    const handleAdd = () => {
        try {
            createSticky(sessionStorage.userId, '', 'public')

            setListUpdateStamp(Date.now())
        } catch(error) {
            alert(error.message)
        }
    }

    const handleLogout = () => {
        delete sessionStorage.userId

        props.onLogout()
    }

    const handleShowMyList = event => {
        event.preventDefault()

        setView('my-list')
    }

    return <div className="bg-black h-screen">
        <header className="flex justify-between p-2">
            <a onClick={handleShowList} className="logo-link" href=""><img className="w-10" src="images/logo.png" alt="Chachi Games" /></a>

            <nav className="flex items-center gap-5">
                <a onClick={handleShowMyList} className="text-[gold] font-odibee underline" href="">My stickies</a>
                <a onClick={handleShowProfile} className="text-[gold] font-odibee underline" href="">Profile</a>
                <button onClick={handleLogout} className="logout-button border-[2px] border-[gold] text-[gold] p-1 font-press">Logout</button>
            </nav>
        </header>
        <main className="home-main">
            {view === 'list' && <List updateStamp={listUpdateStamp} />}

            {view === 'profile' && <Profile />}

            {view === 'my-list' && <MyList />}
        </main>
        <footer className="fixed bottom-0 w-full flex justify-center">
            <button onClick={handleAdd} className="logout-button font-press border-[2px] border-[gold] text-[gold] p-1">+</button>
        </footer>
    </div>
}

export default Home