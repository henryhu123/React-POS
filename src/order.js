import React from 'react';
import './App.css';
import Creditwidget from './Creditwidget.js';

class InputList extends React.Component{
    render(){
    return (this.props.products.map((product,idx)=>
            <form key={idx} onChange={(e) => this.props.onChange(e,idx)} className='form-inline'>
                <label>Product Name</label>
                <input type="text" name='Name' defaultValue={product.Name}></input>
                
                <label>Qty</label>
                <input type='number' name='Qty' defaultValue={product.Qty} ></input>
                <label>Price</label>
                <input type='number' name='Price' defaultValue={product.Price} ></input>
            </form>
        
        ))
    }

}

class Order extends React.Component {

    constructor(props){
        super(props);
        this.state={products:[{Name:"",
                                Qty:"",
                                Price:""}],
                    total:0};
        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e,idx){
        var value = e.target.value;
        const targetName = e.target.name;


        var temp = this.state.products;
        temp[idx][targetName]=value;
        this.setState({
            products:temp
        });
        
        console.log(this.state.products);
    }

    handleAddProduct(e){
        this.setState(prevState=>({
            products:[...prevState.products,{Name:"",
            Qty:"",
            Price:""}]
        }));
    }

    handleSubmit(e){
        var newTotal = 0;
        this.state.products.map(product=>{
            newTotal+=Number(product['Qty']*product['Price'])
        });
        this.setState({total:newTotal});
    }

    render() {
      return (
        <div  className='divStyle'>
            <InputList products={this.state.products} total={this.state.total} onChange = {(e,idx)=>this.handleOnChange(e,idx)} ></InputList>
            <button onClick = {this.handleAddProduct} >add a product</button>
            <button onClick = {()=>this.handleSubmit()} >Calculate Price</button>
            <label>Total Price:{this.state.total}</label>
            <Creditwidget total={this.state.total}/>
        </div>
      );
    }
  }

export default Order;