import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ab delectus a atque exercitationem saepe ipsa quasi molestias at provident esse, officiis distinctio facere asperiores. Soluta fuga earum accusantium?</p>
            <p>Go Back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;