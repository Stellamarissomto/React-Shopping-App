import React from 'react'

const Items = props => {
  return (
    <div>
      <p className="items">Items</p>
        <ol className="item-list">
          {props.myItem.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      
      </div>
    )
  }

export default Items;
