import { createContext, useContext, useState } from 'react'


const MyContext = createContext();

export const useMyContext = () => {
    return useContext(MyContext);
};

