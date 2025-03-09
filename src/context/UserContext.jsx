import { createContext, useReducer } from "react";

const UserContext = createContext();

const ACTIONS = {
  SAVE_CREDENTIALS: "save credentials"
}

const reducer = (user, action) => {
  switch (action.type) {
    case ACTIONS.SAVE_CREDENTIALS :
      localStorage.setItem('user-cred', JSON.stringify(action.payload));
    default:
      return user
  }
}

function UserProvider({children}) {
  const [user, dispatch] = useReducer(reducer, "");

  return (
    <UserContext.Provider value={{ user, dispatch}}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider, ACTIONS }