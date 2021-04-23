import React, { createContext, useContext,useMemo,useState } from "react";
const MainContext = createContext();
export const ContextProvider = (props) => {
    const [postList, setPostList] = useState([
      {id:1,title:"laguna1",body:"asdasda"},
      {id:2,title:"laguna2",body:"bnmmbnmbnmb"},
      {id:3,title:"laguna3",body:"zxczxczxczxc"}
    ]);
    const [post, setPost] = useState(null);
    const [showModal, setShowModal] = useState(false);
    
    const value = useMemo(
        () => {
        const remove_post=(id)=>{
      const newList = postList.filter((element)=>{ return element.id !== id? element:""});
      return newList
        }
            return({post,postList,showModal,setShowModal,setPost,setPostList,remove_post})
        },[post,postList,showModal])
     return <MainContext.Provider  value={value}{...props}/> 
};

export function ConsumerContext(){
  
    const context = useContext(MainContext);
    if (!context) {
      throw new Error("No se encuentra dentro de fullContext...")
    }
    return context;
  }

