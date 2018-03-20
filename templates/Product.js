import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import mock from './../data/mock.json';

class Product extends React.Component {
   constructor() {
       super();
       this.state = {
           list: [],
       };
   }
   componentWillMount() {
       fetch(`https://raw.githubusercontent.com/keslymartinez/challenge-ecommerce/master/data/mock.json`)
       .then(results  => {
           return results.json();
       }).then(items => {
           console.log(items.catalog);
           let list = items.catalog.map((pic) => {
               return(
                  // llamando a los valores
                   <div className="lista2" key={pic.catalog}>
                       <img src={pic.imageURL} />
                        <p>{pic.name}</p>
                        <p>{pic.price}</p>
                        <p>{pic.currency}</p>
                        <p>{pic.type}</p>

                   </div>
               )
           })
           this.setState({list: list});
       });
       
   }
   

   render() {
       return (
           <div className="lista" >
               {this.state.list}
           </div>
       )
   }
}
export default Product;