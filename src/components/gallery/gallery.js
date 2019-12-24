import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import './gallery.css';

class Gallery extends Component {
    render() {
        return (
            <Modal open={this.props.open}>
            <div className="gallery_container">
                <h2 onClick={this.props.close} className="gallery_back_button">back</h2>
                <div className="gallery_wrapper">
                {
                    this.props.images.map((img)=>{
                        return <img src={img}/>
                    })
                }
                {
                     this.props.images.map((img)=>{
                        return <img src={img}/>
                    })
                }
                </div>
            </div>
        </Modal>
        )
    }
}

export default Gallery;