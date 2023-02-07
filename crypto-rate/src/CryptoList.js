import React from "react";
import './Cryptolist.css'

function Cryptolist (props) {

    let cryptoList = props.cryptolist;

    let liElements = cryptoList.map((cryptoObj)=> {
        return(
                    <li key={cryptoObj.currency}>
                        <span className="CryptoLabel">Last Rate:</span>
                        <span className={`CryptoRate ${cryptoObj.cssClass}`}>{cryptoObj.lastRate}{cryptoObj.htmlArrow}</span>
                        <span className="CurrencyTicker">{cryptoObj.currency}</span>
                        <span className="CurrencySymbol">{cryptoObj.symbol}</span>
                    </li>

        );
    })


    return (
        <div className="Cryptolist">
             <ul className="Thelist">
                   {liElements}
            </ul>
        </div>
    )

};

export default Cryptolist;