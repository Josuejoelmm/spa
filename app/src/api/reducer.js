let initialState = {
    links: ['productos','nutricion', 'contacto'],
    contador: 0,
    notification: {
        time: 3000,
        message: 'Bienvenido a la mejor web para tu entrenamiento',
        color: 'verde'
    }
}

let reducer = (state=initialState, action) => {
    return state
}

export default reducer;