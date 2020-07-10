import React from 'react'

function DeleteList (props) {
 
 return (
   <div>
   <button onClick={ props.onDelete} disabled={ props.noItem}>
          Delete Last Item
    </button>
   
   </div>
   
   )
}

export default DeleteList;