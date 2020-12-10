import React, {useContext, useState} from 'react'
import {Context} from '../App'

import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import MyModal from './MyModal';
import Spinner from 'react-bootstrap/Spinner'


export default function RestaurantCard(props) {

    const restaurants = useContext(Context) || [];

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({});


    const handleClose = () => {
        setShow(false);
        setModalData({})
    }

    const handleShow = (data) => {
        setShow(true)
        setModalData(data)
        console.log("data => ", data)
    };

    console.log('restaurants from Res Card', restaurants)

    let allRestaurants = restaurants.map((res, index) => {
        return(
            <div>
                <Card 
                    key={res.restaurant.R.res_id}
                    id = {index}
                >
                    <Card.Img variant="top" src={`${res.restaurant.featured_image}`} onClick={(e) => handleShow(res.restaurant)} />
                    <Card.Body>
                    <Card.Title>{res.restaurant.name}</Card.Title>
                    <Card.Text>
                        <p>Cuisine Type: {res.restaurant.cuisines}</p>
                        <p>Rating: {res.restaurant.user_rating.aggregate_rating} / 5</p>
                        <p>Address: {res.restaurant.location.address}</p>
                    </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        )
    }) 


   


    return (
        <div>

            {
                restaurants.length ? (
                    <div>
                        <CardColumns>
                            {allRestaurants}
                        </CardColumns> 

                        <MyModal modalInfo={modalData} show={show} handleShow={handleShow} handleClose={handleClose}  />
                    </div>
                 ) : (
                    <Spinner animation="border" role="status"  style={{
                        margin: '20% 45%'
                    }}>
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                 )
            }
                        
        </div>
    )
}
