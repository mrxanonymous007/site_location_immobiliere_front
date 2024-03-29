//importation des module react et react-dom
import React from 'react';
import ReactDOM from 'react-dom/client';

//importation du composant BrowserRouter depuis react-router
import { BrowserRouter } from 'react-router-dom';

//importation du CSS
import App from './App';

//création de la racine de notre app associé à un élément HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   //composant permettant la gestion de la navigation côté client, fournissant un contexte de routage
   <BrowserRouter>
      <App />
   </BrowserRouter>
);

