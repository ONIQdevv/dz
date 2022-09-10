import React, { Component } from 'react';
import CardComponent from './components/CardComponent';
import Modal from './components/Modal';
import mainStyles from './App.scss'
import Header from './components/Header';


class App extends Component {
    state = {
      orders: [],
      isOpen: false,
      cartOpen: false,
      text: ''
    }
  
    toggleBtn = (newText) => {
      document.body.style.overflow = "hidden" 
      this.setState({isOpen: !this.state.isOpen, textForModal: newText})
    }

    clickedOnCross = () => {
      document.body.style.overflow = "scroll"
      this.setState({ isOpen: false, textForModal: '' })
    }

    handleSubmit = () => {
      document.body.style.overflow = "scroll"
      console.log('Submited!');
      this.setState({ isOpen: false, textForModal: '' });
    }
  
    handleCancel = () => {
      document.body.style.overflow = "scroll"
      console.log('Canceled!');
      this.setState({ isOpen: false, textForModal: '' });
    }

    handleBuy = (phone) => {
      let  isInArray = false;
      this.state.orders.forEach(el => {
          if(el.id === phone.id) {
            isInArray = true
          }
      })
      if (!isInArray) {
          this.setState({orders: [...this.state.orders, phone]}, () => {
            console.log(this.state.orders)
        })  
      }  
    }

    
   render() {
    return (
      <div className={mainStyles.main}>
         <Header 
            orders={this.state.orders} 
            cartOpen={this.state.cartOpen}
          />
          <Modal
            closeBtn={this.clickedOnCross}  
            isOpen={this.state.isOpen}
            onCancel={this.handleCancel}
            onSubmit={this.handleSubmit}
            btnFirstText='Cancel'
            btnSecText='Submit'
            header='Modal made with React'>
                {this.state.textForModal}
          </Modal>


          <CardComponent
            openOrClose={this.toggleBtn}
            closeBtn={this.clickedOnCross}  
            isOpen={this.state.isOpen}
            onCancel={this.handleCancel}
            onSubmit={this.handleSubmit}
            header='Do you really wanna buy it?'
            btnFirstText='Cancel'
            btnSecText='Buy it'
            onAdd={this.handleBuy}
          />
      </div>
    )
  }
}

export default App