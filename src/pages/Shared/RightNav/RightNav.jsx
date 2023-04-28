import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2' variant="primary" > <FaGoogle /> Login With Google</Button>
            <Button variant="secondary"> <FaGithub /> Login With Github</Button>
            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> FaceBook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <img src={bg} alt="" />
        </div>
    );
};

export default RightNav;