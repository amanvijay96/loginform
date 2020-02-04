import React from 'react';
import './home.css';
import { Button } from 'antd';

class Home extends React.Component {
  state = {
    apiResponse: ''
  };

  callAPI = () => {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  };

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="home">
        <textarea
          className="query-div"
          type="text"
          placeholder="Write your query"
        />
        <Button type="primary" htmlType="submit" className="login-form-button">
          Send
        </Button>
        <hr />
        Hi
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default Home;
