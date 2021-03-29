import React from 'react'
import { Col, Row, Container, Button } from "react-bootstrap"
import { motion } from "framer-motion"

const Home = () => {
    return (
        <Container id="home-container">
            <motion.div animate={{ scale: 1.25 }} transition={{ duration: .85 }} >
                <Row>
                    <Col className="text-center">
                        <h3>An app designed to help you keep track of the things you are grateful for</h3>
                        <Button variant="outline-primary" size="lg">Sign up now</Button>
                    </Col>
                </Row>
            </motion.div>
        </Container>
    )
}

export default Home
