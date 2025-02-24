import React ,  {createContext  , useReducer ,  useEffect  } from "react";
import AppReducer   from   '../reducers/AppReducer'  ; 

//  initial state   
const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
}; 
//  create context    

export const  GlobalContext     = createContext(initialState)  ; 

export const GlobalProvider   = ({children  })  =>  {
    const  [state  ,  dispatch   ]   = useReducer(AppReducer  , initialState)  ;
    
    useEffect(() => {
      localStorage.setItem("transactions", JSON.stringify(state.transactions));
    }, [state.transactions]);


    // Actions 

    function deleteTransaction(id){
        console.log("Deleting transaction with id:", id);
        dispatch({
            type  : 'DELETE TRANSACTION'    ,  
            payload :    id  

        })
    }; 
    
    
    function addTransaction(transaction){
        console.log("Adding transaction:", transaction);
        
        dispatch({
            type  :  'ADD TRANSACTION'  , 
            payload : transaction   
        });  

    } 

    console.log(initialState);


    return (
        <GlobalContext.Provider value={{
            transactions :  state.transactions  , 
            addTransaction  , 
            deleteTransaction   

        }}>
            {children}
        </GlobalContext.Provider>
    )

    


}