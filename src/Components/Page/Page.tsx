import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderNavBar from './Navbar/HeaderNavBar';
import LeftSideBar from './SideBars/LeftSideBar';
import RightSideBar from './SideBars/RightSideBar';
import ContentContainer from './ContentContainer/ContentContainer';


                // {/* <Row>
                //     <Col sm={0} md={3} lg={1}>
                //         <LeftSideBar />
                //     </Col>
                //     <Col sm={12} md={8} lg={8}>
                //     </Col>
                //     <Col sm={0} md={1} lg={1}>
                //         <RightSideBar />
                //     </Col>
                // </Row> */}

const Page = () => {
    return(
        <div>
            <HeaderNavBar /> 
            <Container fluid>    
                <Row>
                    <Col>
                        <LeftSideBar />
                    </Col>
                    <Col lg={8}>
                        <ContentContainer />
                    </Col>
                    <Col>
                        <RightSideBar />
                    </Col>
                </Row>        
            </Container>
        </div>
    )

};

export default Page;