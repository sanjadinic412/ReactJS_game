import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from "./App";
import Igra from "./Igra";
import Pravila from "./Pravila";

ReactDOM.render( <Router>
    <Route exact path="/">
     <App body={<p > Dobrodošli u još jednu igru slagalice! Da li ste spremni? Klikom na New game odigrajte novu igru skočka, a klikom na Rules pročitajte pravila igre.

Srećno!</p>}/>
    </Route>
    <Route path="/igra">
    <App body={<Igra />}/>
    </Route>
    <Route path="/pravila">
        <App body={<Pravila />}/>
    </Route>
 </Router>, document.getElementById('root'));