const load = key => {
    try {
    let serializedState = localStorage.getItem(key);

    return (serializedState = JSON.parse(serializedState) || undefined);
    } catch (error) {
    console.error('Get state error: ', error.message);
    }
};

const save = (key, value) => {
    try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
    } catch (error) {
    console.error('Set state error: ', error.message);
    }
};

const remove = key => {
    try {
    localStorage.removeItem(key);
    } catch (error) {
    console.error('Remove state error: ', error.message);
    }
};

export { load, save, remove }