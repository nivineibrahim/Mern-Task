function ItemList({items,deleteItem,setEditItem}){
    return(
        <div>
           <h2>Items List</h2> 
           {items.length === 0 ? (
            <p>No items found</p>)
            :(
             items.map((item)=>(
              <div key={item._id} 
              style={{
                border:"1px solid black",
                margin:"10px",
                padding:"10px"}}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.mobileNumber}</p>
              <p>Country CODE:{item.countryCode}</p>
              <p>Country Name:{item.countryName}</p>
              <p>Operator Name:{item.operatorName}</p>

             
              <button onClick={()=>setEditItem(item)}>Edit</button>
              
              <br/> <br/>
              <button onClick={()=>deleteItem(item._id)}>
                Delete
                </button>
                
                </div>
             ))
    )}
    </div>
    )
}
export default ItemList;