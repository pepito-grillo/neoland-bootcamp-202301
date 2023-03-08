import { useState } from 'react'
import unregisterUser from '../logic/unregister-user'
import Button from '../library/Button'

function UnregisterUser({ onUnregisterUser }) {
    console.log('UnregisterUser -> render')

    const [feedback, setFeedback] = useState({
        message: '',
        type: ''
    })

    const handleSubmit = event => {
        event.preventDefault()

        const password = event.target.password.value

        try {
            unregisterUser(sessionStorage.userId, password, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        type: 'error'
                    })

                    return
                }

                event.target.reset()

                delete sessionStorage.userId

                onUnregisterUser()
            })
        } catch (error) {
            setFeedback({
                message: error.message,
                type: 'error'
            })
        }
    }

    return <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className="update-password-panel flex flex-col gap-2">
            <input className="text-[gold] placeholder-[gold] bg-[transparent] font-odibee border-2 border-[gold] focus:outline-none p-1" type="password" name="password" placeholder="password" />

            {/* <button type="submit" className="logout-button font-press border-[2px] border-[gold] text-[gold] p-1">Unregister</button> */}
            <Button type="submit">Unregister</Button>
        </form>
        <p className={`font-odibee ${feedback.type === 'success' ? "text-[greenyellow]" : "text-[tomato]"}`}>{feedback.message}</p>
    </div>
}

export default UnregisterUser