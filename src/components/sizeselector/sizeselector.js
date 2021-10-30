import React, { useState } from 'react';
import "./sizeselector.css";
import Size from '../front/Size/Size';
import data from '../back/Data/Data';


const sizearray = [
    {
        id:1,
        label:"S",
        value:"small",
        selected: true,
    },

    {
        id:2,
        label:"L",
        value:"Large",
        selected: false,
    },
    {
        id:3,
        label:"M",
        value:"Medium",
        selected: false,
    },
    {
        id:4,
        label:"XL",
        value:"Xtra-Large",
        selected: true,
    },
    {
        id:5,
        label:"XXL",
        value:"double Xtra-Large",
        selected: false,
    },
];

const Sizeselector = () => {

    const [selectedIds, setSelectedIds] = useState([]);
    const handleSizeBtnClick = (id) => {
       //setSelectedId(id);
        if(!selectedIds.includes(id))
        {
            setSelectedIds(selectedIds.concat(id));
        }
        else
        {
            setSelectedIds(selectedIds.splice(id));
        }
    }   
    const rendersizes = () => {
        return sizearray.map((item) => {
            
            return (
                <div  key={item.id} style={{marginBottom:20}}>
                <Size 
               
                label={item.label}
                isSelected={ selectedIds.includes(item.id)}
                onSizeBtnClick={() => {handleSizeBtnClick(item.id)}}
                />
                </div>
            )

        })

    }
    return(
        <div className="size-set-wrapper">
            {rendersizes()}
        
     
        </div>
    )

    }


export default Sizeselector;