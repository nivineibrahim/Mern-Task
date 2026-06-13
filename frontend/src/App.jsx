import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import { useState,useEffect } from "react";
import axios from "axios";
const API="http://localhost:5000/api/items";
function App() {
  const [items,setItems]=useState([]);
  const [categories, setCategories] = useState([]);
  const [editItem,setEditItem]=useState(null);
  //Get all items
   const getItems=async () => {
    try{
      const res=await axios.get(API);
      setItems(res.data.data || res.data);
    }catch(error){
      console.log(error)
    }
  };
  //Delete item
  const deleteItem=async(id)=>{
    try{
      await axios.delete(`${API}/${id}`);
      //refresh list after delete
      getItems();
    }catch(error){
      console.log(error)
    }
  };
  useEffect(() => {
    getItems();
    getCategories();
  }, []);
  //get all categories
  const getCategories = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/categories");

    console.log("RAW:", res.data);

    const data = res.data.categories || res.data.data || res.data;

    setCategories(Array.isArray(data) ? data : []);
  } catch (error) {
    console.log(error);
  }
};
  return (
    <>
    <div>
      <h1>Micro-Service System</h1>
      <ItemForm 
      getItems={getItems} 
      editItem={editItem} 
      setEditItem={setEditItem}
      categories={categories}/>
      <hr/>
      <ItemList items={items} 
      deleteItem={deleteItem} 
      setEditItem={setEditItem}/>
    </div>
    </>
  )
}

export default App