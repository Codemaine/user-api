import { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        this.setState({ users: users })
        console.log(this.state.users)
      })
  }

  render() {
    return (
      <div>
        <div class="d-flex justify-content-center"><h1>Users</h1></div>
        <hr />
        <Container fluid>
          {this.state.users.map((user) => <Row>
            <Col>
              <Card style={{ width: '97vw' }}>
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
                  <Card.Text>
                    Email: {user.email}<br />
                   Address: {user.address.suite}, {user.address.street}, {user.address.city}
                  </Card.Text>
                  <Card.Link href={`https://${user.website}`} target="_blank" >{user.website}</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>)}
        </Container>
      </div>
    );
  }
}

export default App;
