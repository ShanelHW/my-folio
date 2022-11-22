import {Container, Row, Col} from 'react-bootstrap'
const Banner = () => {
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Banner;