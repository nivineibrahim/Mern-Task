import { useState,useEffect } from "react";
import axios from "axios";
const API="http://localhost:5000/api/items";
function ItemForm({getItems,editItem,setEditItem,categories}){
    const [error,setError]=useState("");
    const [form,setForm]=useState({
        name:"",
        description:"",
        mobileNumber:"",
        category:""});
    const isEdit=editItem !== null;
    //lama ekbos edit yt3aba l form
    useEffect(()=>{
        if (editItem) {
             setForm({
                name:editItem.name,
                description:editItem.description,
                mobileNumber:editItem.mobileNumber,
                category: editItem.category?._id || "",
            });
        }
    },[editItem]);
    //handle input change
    const handleChange=(e)=>{
            setForm({
                ...form,
                [e.target.name]:e.target.value
            });
        };
    //submit (add or update)
    const handleSubmit=async (e)=>{
            e.preventDefault();//prevent refresh of form when submit
           // console.log(form)
           setError("");
           if(!form.name || !form.description ){
            setError("Name and description fields are required");
            return;
           }
           
           try{
            if(isEdit){
                //update
                await axios.patch(`${API}/${editItem._id}`,form);
                setEditItem(null)
            }
            else{
                //add iza mish mawjood
                await axios.post(API,form)
            }
            //am e3ml reset ll form baed m b3aton llbackend
             setForm({name:"",
                description:"",
                mobileNumber:"",
                category:""});
            //refresh item list    
            getItems(); 
           }catch(error){
           // console.log("full error",error);
            console.log(error.response?.data)
            const message=error.response?.data?.error || error.response?.data?.message ;
            if(message){
                setError(message);
            }
            else{
                setError("Something went wrong");
            }
            //console.log(error);
           }
        }
    return(
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Enter name" value={form.name} onChange={handleChange}/>
            <br/> <br/>

            <input name="description" placeholder="Enter description" value={form.description} onChange={handleChange}/>
            <br/> <br/>

            <input name="mobileNumber" placeholder="+......" value={form.mobileNumber} onChange={handleChange}/>
            <br/><br/>
            <select name="category" value={form.category} onChange={handleChange}>
            <option value="">Select Category</option>
         {categories.map((cat) => (
         <option key={cat._id} value={cat._id}>
         {cat.name}
         </option>
          ))}
        </select>

<br /><br />
            <br/> <br/>

            <button type="submit">{isEdit ? "Update Item" : "Add Item"}</button>
            <br/><br/>
            {error && <p style={{color:"red"}}>{error}</p>}
        </form>
    );
}
export default ItemForm;