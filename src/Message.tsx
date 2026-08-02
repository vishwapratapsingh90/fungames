
function Message() {
    const name = '';

    if (name) {
        return <h1>Hello {name}! Welcome to Fun Games!</h1>
    } else {
        return <h1>Welcome to Fun Games!</h1>;
    }
}

export default Message;