const { validateToken, validateStickyId, validateCallback } = require('com')

/**
 * Toggles a favorite sticky
 * 
 * @param {string} token The session token
 * @param {string} stickyId The sticky identifier
 * @param {string} callback The function to call when the fav is changed (or failed)
 */
function toggleFavSticky(token, stickyId, callback) {
    validateToken(token)
    validateStickyId(stickyId)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status } = xhr

        if (status === 500) {
            const { response } = xhr
        
            const payload = JSON.parse(response)

            const { error } = payload

            callback(new Error(error))

            return
        }

        callback(null)
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('PATCH', `http://localhost:8080/stickies/${stickyId}/favs`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default toggleFavSticky