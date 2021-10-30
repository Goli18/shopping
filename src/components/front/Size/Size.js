import React from 'react';
import "./Size.css";

const Size = (props) => {

    const {label, isSelected, onSizeBtnClick}=props;
    const handleClick = () => {
       onSizeBtnClick()


      

    }
    return(
      <div className="Wrapper"
          onClick={handleClick}
          style={{backgroundColor: isSelected ? 'pink':false}}
          >
            {label}
      </div>
        )
}
export default Size;