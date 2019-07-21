import React, { Component } from 'react'
import { Table, Container } from 'react-bootstrap'
import UserMenu from '../userProfile/UserMenu'
import axios from 'axios';

export class UserTable extends Component {
  state = {
    userdata: []
  }
  componentDidMount() {
    const url = 'http://localhost:5000/api/websites/';
    axios({
      url: url,
      method: 'get',
      headers: { 'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWQzM2Q0YjJmNTc5YjIxZDA4MzU0OWM3IiwibmFtZSI6IlRlc3RpbmciLCJtYXN0ZXJQYXNzd29yZCI6IiQyYSQxMCQ4Qm9KUmZaRVQ0enJFODAxU0UuUlIuSFMxLml3WVdDRGhDcnZJOGluNC5URWhGYjhHVGJmZSJ9LCJpYXQiOjE1NjM2Nzc4NzQsImV4cCI6MTU2NDAzNzg3NH0.8BCYd1Ujjz4-psBm7TsI1dGDStlwWULona5sW_Kgslo' },
    })
      .then(response => {
        this.setState({
          userdata: response.data
        })
        console.log(response)
      })
  }
  render() {
    return (
      <div>
        <UserMenu></UserMenu>
        <Container>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Sr#</th>
                <th>Website Name</th>
                <th>Username</th>
                <th>Password</th>
                <th>Email</th>
                <th>Created at</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userdata.map(data => (
                <tr key={data._id}>
                  <td>1</td>
                  <td>{data.title}</td>
                  <td>{data.userName}</td>
                  <td>{data.password}</td>
                  <td>{data.email}</td>
                  <td>{data.date}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    )
  }
}

export default UserTable
