import React, { Component } from 'react'
import './style/Pravila.css';

export default class Pravila extends Component {
    render() {
        return (
            <div>
                <div className="pravila_igre">
                <h4>Kako se igra?</h4>
<ul>
<li>generisana je kombinacija od 4 boja</li>
<li>imate 6 pokusaja</li>
<li>u polju rezultata crvena boja oznacava tacnu boju i tacno mesto</li>
<li>u polju rezultata zuta boja oznacava tacnu boju i pogresno mesto</li>
<li>na kraju igre bicete obavesteni o pravoj kombinaciji</li>
</ul>
                </div>

            </div >
        )
    }
}
