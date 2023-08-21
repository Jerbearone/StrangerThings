const storage = localStorage;
const TOKEN = "token"

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

export {saveToken, deleteToken, getToken}