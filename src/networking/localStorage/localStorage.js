const storage = localStorage;
const TOKEN = "token";
const USERNAME = "username";

//save token (log in)
const saveToken = (token) => {
    storage.setItem(TOKEN, token);
}
//remove token (log out)
const deleteToken = () => {
    storage.removeItem(TOKEN);
}

const getToken = () => {
    const token = storage.getItem(TOKEN)
    if (storage.TOKEN !== null) {
        return token;
    } else {
        return null;
    }
}

const saveUserName = (username) => {
    storage.setItem(USERNAME, username);
}

const getUserName = () => {
    const username = storage.getItem(USERNAME);
    if (storage.USERNAME !== null) {
        return username
    } else {
        return null;
    }
}

const deleteUserName = () => {
    storage.removeItem(USERNAME);
}

export {saveToken, deleteToken, getToken, saveUserName, getUserName, deleteUserName}