export const initialState = [{
    item: "Build another Todo List",
    completed: false,
    id: new Date()
}]

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            return [...state,
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
            ]
        case "TOGGLE_SELECT":
            const target = state.find((el) => {
                return el.id === action.id
            })
            target.completed = !target.completed;
            if(target.completed) {
                const selected = document.getElementById(action.id);
                selected.classList.add("selected");
            }
            else {
                const selected = document.getElementById(action.id);
                selected.classList.remove("selected");
            }
            return state;
        case "REMOVE_COMPLETE":
            const findItems = state.filter((item) => {
                return item.completed === true
            })
            const selectItems = findItems.map((item) => {
                const items = document.getElementById(item.id);
                items.remove();

            })
        
        default:
            return state;
    }
}