import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Portal from '../Portal/Portal'
import { ImCross } from 'react-icons/im'
import stylesOfModal from './Modal.module.scss'


class Modal extends Component {
     render() {
        return (
            <>
              {
                this.props.isOpen && 
                   <Portal>
                      <div className={stylesOfModal.modalOverlay} onClick={this.props.onCancel}>
                        <div className={stylesOfModal.modalContent} onClick={e => e.stopPropagation()}>
                          <div className={stylesOfModal.modalHeader}>
                            <div>{this.props.header}</div>
                            <ImCross 
                                style={{cursor: "pointer"}} 
                                onClick={this.props.closeBtn}
                            />
                          </div>
                          <div className={stylesOfModal.modalBody}>
                            {this.props.children}
                          </div>
                          <div className={stylesOfModal.modalFooter}>
                            <button 
                              style={{marginRight: '15px', cursor: 'pointer'}} 
                              onClick={this.props.onCancel} invert='true'>
                                {this.props.btnFirstText}
                            </button>
                            <button 
                              style={{cursor: 'pointer'}} 
                              onClick={this.props.onSubmit}>
                                {this.props.btnSecText}
                            </button>
                          </div>
                        </div>  
                     </div>
                 </Portal>
              }     
          </>
        )
    }
}


Modal.propTypes  = {
  closeBtn: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  header: PropTypes.string,
  btnFirstText: PropTypes.string,
  btnSecText: PropTypes.string
}

export default Modal;