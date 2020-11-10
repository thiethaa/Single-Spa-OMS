import React from 'react';
import {Form,Button} from 'react-bootstrap';
import './SearchItem.css';

const SearchItem = () => {
    return (
        <div className="itemContainer">
            <div className= "searchTitle">Search Item</div>
            <Form>
                <Form.Group className="searchInput">
                    <Form.Control type="text" size="lg" placeholder="Search Item #" />
                </Form.Group>
                <Button className="searchBtn" variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SearchItem;