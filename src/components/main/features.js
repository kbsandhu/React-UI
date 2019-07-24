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
                        <Card.Body >
                            <Card.Title style={{textAlign:'center'}}>Encrypted Passwords</Card.Title>
                            <Card.Text>
                              We are very concerned regarding your personal credentials thus we store your passwords in Encrypted form of data.
                              Accessible only by you with Master Key
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
                            <Card.Title  style={{textAlign:'center'}}>Two-Step Authentication </Card.Title>
                            <Card.Text>
                               We provide you the feature to protect your Credentials from a unwanted account access ,which you can view in read-able format by entering Master Password
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Row className="justify-content-center">
                            <Col sm={0.9}>
                                <UserLock size="80" color="black" style={{ alignContent: 'center' }} />
                            </Col>
                        </Row>                        <Card.Body>
                            <Card.Title  style={{textAlign:'center'}}>Accessible Anywhere</Card.Title>
                            <Card.Text>
                                In case you find it hard to remeber your credentials !,
                                Just Create an account with us and start using our vault right now which can be accessed any where with logging In.
                             </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        )
    }
}
export default Features
