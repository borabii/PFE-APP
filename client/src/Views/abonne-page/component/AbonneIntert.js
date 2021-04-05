import React from 'react'
import Select from 'react-select'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function AbonneIntert() {

    const options = [
        { value: 'football', label: 'football' },
        { val1ue: 'fifa', label: 'fifa' },
        { value: 'handball', label: 'handball' }
      ]
    return (
        <div className="abonneIntert">
            <div className="abonneIntert__top">
                <Select  options={options} />   
            </div>

            <div className="abonneIntert__bottom">
                <h2> Mes centre d'intert </h2>
            
            </div>
          
        </div>
    )
}

export default AbonneIntert
