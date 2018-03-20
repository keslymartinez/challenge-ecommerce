import React from 'react';
import ReactDOM from 'react-dom';
import Product from '../../../templates/Product';
import shoppingCart from '../../../templates/shoppingCart';



// const App = ({ message }) => <div>{ message }</div>;


ReactDOM.render(
<div>
	<button>Total</button>

<h1>Lista de Productos</h1>
 	<tbody className="list">
      <tr>
        <td className="producto"></td>
        <td className="valor"></td>
      </tr>
      </tbody>
      <tbody>
      <tr>
        <td className="producto"></td>
        <td className="valor"></td>
      </tr>
      </tbody>
      <tbody>
      <tr>
        <td className="producto"><Product/></td>
        <td className="valor"></td>
      </tr>
      </tbody>
      <button onClick={activateLasers}>
		  buy
		</button>
   </div>, 



document.getElementById('app'));
