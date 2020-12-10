import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


export default function MyModal(props) {
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{props.modalInfo.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Number: {props.modalInfo.phone_numbers}</p>
                    <p>Time: {props.modalInfo.timings}</p>
                    <p>Menu Link: <a href={props.modalInfo.menu_url}>Go to site</a></p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            {console.log(props.modalInfo.name)}
        </div>
    )
}

