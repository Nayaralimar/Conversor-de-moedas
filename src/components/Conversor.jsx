import React, { useState } from "react";
import styles from './Conversor.css'

export default function Conversor({ moedaA, moedaB }) {
    const [moedaA_valor, setMoedaA_valor] = useState()
    const [moedaB_valor, setMoedaB_valor] = useState(0)

    function converter() {
        let de_para = `${moedaA}_${moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=20741cb2f37fb4f4958d`;

        fetch(url)
        .then( res => {
            return res.json()
        })
        .then(json => {
            let cotacao = json[de_para];
            let moedaB_valor = ( parseFloat(moedaA_valor) * cotacao).toFixed(2);
            setMoedaB_valor(moedaB_valor)
        });
}

    return (
        <div className="conversor">
            <h2>{moedaA} para {moedaB}</h2>
            <input className="input" type="text" onChange={(e) =>setMoedaA_valor(e.target.value)}></input>
            <input className="input" type="button" value="Converter" onClick={converter}></input>
            <h2>valor convertido: {moedaB_valor}</h2>
        </div>
    )
}