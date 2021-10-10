import React, {useContext, useState} from 'react'

export const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext)
}

export function HBOProvider({children}){
    const [user, setUser] = useState('')
    const defaultUserImg = 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=d5849d81af587a09dbcf3f11f6fa122f'
    const createUserAction = (e) => {
        setUser(e.target.value)
        console.log(user)
    }
    return(
        <StateContext.Provider
        value={{
            user,
            createUserAction,
            defaultUserImg
        }}>
    
            {children}
        </StateContext.Provider>
    )
}