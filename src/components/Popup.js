import React from "react";

import { Modal, Form, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import changePopupShow from '../actions/changePopupShow';

const Popup = () => {
    const choosedDate = useSelector(state => state.choosedDate);
    const showPopup = useSelector(state => state.showPopup);
    const dispatch = useDispatch();

	return (
        <Modal 
            show={showPopup} 
            onHide={ () => dispatch( changePopupShow(false) ) } 
            centered
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <Form>
                    <Row>
                        <Col>
                            <label htmlFor="month">Month</label>
                            <Form.Control id="month" defaultValue={choosedDate.month} />
                        </Col>
                        <Col>
                            <label htmlFor="day">Day</label>
                            <Form.Control id="day" defaultValue={choosedDate.day} />
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
	);
}

export default Popup;
