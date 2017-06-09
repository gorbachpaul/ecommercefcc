import React, {Component} from 'react';
import {Jumbotron, Button } from 'reactstrap';


const JumbotronContainer = () => {
    return (
        <div>
            <Jumbotron>
                <h1>Welcome to FCC E-commerce project</h1>
                <p className="lead">This is the first project from FCC campers.</p>
                <hr className="my-2" />
                <p>Join us in building our first full scale web app</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default JumbotronContainer