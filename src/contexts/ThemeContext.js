import React,{Children,createContext,useState}from "react";
const Themecontext=createContext();

const ThemeProvider=({children})=>{
    const[theme,setTheme]=useState("light");


    const toggleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme==="light"?"dark":"light"));
    };
    return(
        <Themecontext.Provider value={{theme,toggleTheme}}>
            {children}
        </Themecontext.Provider>
    );
};

export{Themecontext,ThemeProvider};