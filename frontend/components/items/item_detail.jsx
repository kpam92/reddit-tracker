import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';


class ItemDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalOpen: false,
      title: this.props.item.title,
      qty: this.props.item.qty,
      price: this.props.item.price,
      total: this.props.item.total,
      id: this.props.item.id
      };
    this.startingTotal = this.state.total;
    this.onModalClose = this.onModalClose.bind(this)
    this.onModalOpen = this.onModalOpen.bind(this)

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


// ---------------------------
// functions for update modal
  onModalClose(){
  this.setState({modalOpen: false});
  ModalStyle.content.opacity = 0;
  }
  onModalOpen(){
    ModalStyle.content.opacity = 100;
    ModalStyle.content.background
  }

  _handleClick() {
    this.setState({ modalOpen: true});
  }


// ---------------------------
// functions to handle removing item and updating item
  handleDelete(e){
    e.preventDefault();
    const { removeItem, item, changeAmount} = this.props;
    changeAmount(item.total,0)
    removeItem(item.id);
  }

  handleSubmit(e){
    e.preventDefault();
    const newTotal = (parseFloat(this.state.price) * parseFloat(this.state.qty)).toFixed(2);
    const updatedItem = Object.assign({},this.state, { total: newTotal });
    this.props.updateItem(updatedItem);
    this.props.changeAmount(this.startingTotal,newTotal);
    this.startingTotal = newTotal;
    this.setState({modalOpen: false});
  }


// ---------------------------
// functions for updating state with change input
  update(property) {
    return e => this.setState({[property]: e.target.value})
  }
  update_money(property) {
    return e => this.setState({[property]: parseFloat(e.target.value).toFixed(2)})
  }

// ---------------------------

  render(){
    const { item, updateItem } = this.props;
    const fixedPrice = (parseInt(item.price)).toFixed(2);
    const fixedTotal = (parseInt(item.total)).toFixed(2);
    return(

      <tbody>
        <tr>
          <td>{item.title}</td>
          <td>{item.qty}</td>
          <td>${fixedPrice}</td>
          <td>${fixedTotal}</td>
          <td><button onClick={this._handleClick.bind(this)}>Edit</button></td>
          <td><img width="15"src='http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_41/v1472778565/x_alt-128_p7d2vo.png' onClick={this.handleDelete}/></td>
          <td>
            <Modal
              contentLabel="update-form"
              isOpen={this.state.modalOpen}
              onRequestClose={this.onModalClose}
              style={ModalStyle}
              onAfterOpen={this.onModalOpen}>
              <a className="modal-close" onClick={this.onModalClose}><img width="20" src="http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_41/v1472778565/x_alt-128_p7d2vo.png"/></a>

              <div className='modal-container'>
                <form className="update-form-form" onSubmit={this.handleSubmit}>
                  <label><span className="form-label">Item:</span>
                    <input
                      className="input"
                      ref="title"
                      value={this.state.title}
                      placeholder="Sushi"
                      onChange={this.update('title')}
                      required/>
                  </label>
                  <label><span className="form-label">Qty:</span>
                    <input
                      className="input"
                      ref="qty"
                      type="number"
                      min='0'
                      value={this.state.qty}
                      placeholder="1"
                      onChange={this.update('qty')}
                      required></input>
                  </label>
                  <label><span className="form-label">Price:$</span>
                    <input
                      className="input"
                      type="number"
                      step=".01"
                      min ='0'
                      ref="price"
                      value={this.state.price}
                      placeholder="(no commas)"
                      onChange={this.update_money('price')}
                      required></input>
                  </label>
                  <button className="create-button">Update item</button>
                </form>
              </div>

            </Modal>
          </td>
        </tr>
      </tbody>

    )
  }
};

export default ItemDetail;
