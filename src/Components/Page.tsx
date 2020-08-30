import React from 'react';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import { Container, Row, Col } from 'react-bootstrap';


const Page = () => {
    return(
        <div>
            <Container fluid>
                {/* <Row>
                    <Col sm={0} md={2} lg={2}>
                        <LeftSideBar />
                    </Col>
                    <Col sm={12} md={8} lg={8}>
                    </Col>
                    <Col sm={0} md={2} lg={2}>
                        <RightSideBar />
                    </Col>
                </Row> */}
            </Container>
        </div>
    )

};

export default Page;