import { createContext, useContext, useReducer, useRef } from "react"

const AppContext = createContext();

const initialState = {
    showMobileNav:false,
}

function reducer(state, action){
    switch(action.type){
        case "toggleMobileNav":
            return {...state, showMobileNav: action.payload};
        default:
            throw new Error("Unknown action");
    }
}

function AppProvider({children}) {
    const [{showMobileNav}, dispatch] = useReducer(reducer, initialState);
    const sections = {
        heroSection: useRef(null),
        aboutSection: useRef(null),
        projectsSection: useRef(null),
        contactSection: useRef(null),
    };


    function handleDispatch(type, action){
        dispatch({type, payload:action})
    }
    

    return (
        <AppContext.Provider value={{
            handleDispatch, 
            showMobileNav,
            sections,
        }}>
            {children}
        </AppContext.Provider>
    )
}

function useApp(){
    const context = useContext(AppContext);

    if(!context)
          throw new Error("💥 Don't use a hook useApp outside of the provider!!!");

    return context;
}


export { AppProvider, useApp }
