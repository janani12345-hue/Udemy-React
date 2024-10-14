import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import Navebar from './Navebar';
import Categories from './Categories';
import Salesection from './main';
import Recommendation from './Recommendation';
import Topics from './Topics';
import Popular from './Popular';
import Footer from './footer';
 
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
   <div><Navebar></Navebar><Categories></Categories><Salesection></Salesection>
   <Recommendation></Recommendation><Topics></Topics><Popular></Popular><Footer></Footer></div>
)


