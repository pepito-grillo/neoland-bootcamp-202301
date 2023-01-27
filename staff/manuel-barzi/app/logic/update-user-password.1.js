/**
 * Updates the user password
 * 
 * @param {string} email The user email
 * @param {string} currentPassword The user current password
 * @param {string} newPassword The user new password
 * @param {string} newPasswordConfirm The confirmation of the new password
 */
function updateUserPassword(email, currentPassword, newPassword, newPasswordConfirm) {
    var user = users.find(user => user.email === email)

    user.password = newPassword
}