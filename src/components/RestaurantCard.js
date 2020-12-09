import React, {useContext, useState} from 'react'
import {Context} from '../App'

import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

export default function RestaurantCard(props) {

    const restaurants = useContext(Context)
    console.log('restaurants from Res Card', restaurants)

    let allRestaurants

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    

    restaurants !== null ? allRestaurants = restaurants.map((res, index) => {
        return(
            <div>
                <Card 
                    key={res.restaurant.R.res_id}
                    id = {index}
                >
                    <Card.Img variant="top" src={`${res.restaurant.featured_image}`} onClick={handleShow} />
                    <Card.Body>
                    <Card.Title>{res.restaurant.name}</Card.Title>
                    <Card.Text>
                        <p>Cuisine Type: {res.restaurant.cuisines}</p>
                        <p>Rating: {res.restaurant.user_rating.aggregate_rating} / 5</p>
                        <p>Address: {res.restaurant.location.address}</p>
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{res.restaurant.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Number: {res.restaurant.phone_numbers}</p>
                        <p>Time: {res.restaurant.timings}</p>
                        <p>Menu Link: {res.restaurant.menu_url}</p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }) : console.log('Loading...')


    return (
        <div>
            <CardColumns>
                {allRestaurants}
            </CardColumns>
        </div>
    )
}
