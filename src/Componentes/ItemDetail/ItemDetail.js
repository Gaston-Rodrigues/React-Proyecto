import React from 'react';
import "./styles.css";

export default function ItemDetail({item}) {

  return (
        <div className="card">
            <div>
               <h4>{item.nombre}</h4>
            </div>
            <div>
                <img className="imagen-detail" src={item.img} />
            </div>
            <div>
                <h5>Marca: {item.Marca}</h5>
    
            </div>
            <div>
                <h5>Garantia: {item.Garantia}</h5>
            </div>
            <div>
                <h5>${item.precio}</h5>
            </div>

        </div>
  )
}