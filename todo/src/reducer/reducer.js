export const userList = {
    todo: [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  }
]}

export const reducer = (state, action) => {
    switch (action.type) {
      case 'new_task':
          console.log("action.payload",action)
        return {
            ...state,
            todo: [...state.todo,
                {
                    task: action.payload,
                    id: (Math.random() * Math.random()).toString(9).substr(2, 9),
                    finished: false
                }
            ]
        }
      case 'clear_done':
          return{
              ...state,
              todo: state.todo.filter(item => !item.finished)
          }
      case 'toggled':
           return{
                ...state,
               todo: state.todo.map(item =>{
                   if(action.payload === item.id){
                       return{
                           ...item,
                           finished: !item.finished
                       }
                   }
                   return{
                           ...item
                         }
               })
            }
        default:
        return state;
    }
  };