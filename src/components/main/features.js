import React, { Component } from 'react'
import { CardGroup, Card, Row, Col,Badge } from 'react-bootstrap'
import { Lock } from 'styled-icons/material'
import { EyeSlash } from 'styled-icons/fa-solid/EyeSlash'
import { UserLock } from 'styled-icons/fa-solid/UserLock'
export class Features extends Component {
    render() {
        return (
            <div>
                <Row className="justify-content-center" >
                    <Col sm={0.9}>
                        <h2 style={{ color: 'black',fontFamily: 'DM Serif Display' }}>
                            Added<Badge variant="secondary">Features</Badge>
                        </h2>                            </Col>
                </Row>
                <CardGroup style={{ opacity: 0.8 }}>
                    <Card>
                        <Row className="justify-content-center">
                            <Col sm={0.9}>
                                <Lock size="80" color="black" style={{ alignContent: 'center' }} />
                            </Col>
                        </Row>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                           </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Row className="justify-content-center">
                            <Col sm={0.9}>
                                <EyeSlash size="80" color="black" style={{ alignContent: 'center' }} />
                            </Col>
                        </Row>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Row className="justify-content-center">
                            <Col sm={0.9}>
                                <UserLock size="80" color="black" style={{ alignContent: 'center' }} />
                            </Col>
                        </Row>                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                             </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        )
    }
}
export default Features
