import React from 'react';
import './home.css';
import { Button } from 'antd';
import DataTable from './DataTable'

class Home extends React.Component {
  state = {
    apiResponse: '',
    query: '',
    items: [],
    click: false
  };

  handleOnChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }
handleClick = () => {
  console.log(this.state.query.toLowerCase().trim())
  if(this.state.query.trim() !== '' && this.state.query.toLowerCase().trim() === 'select * from employee'){
    // fetch('http://localhost:9000/testAPI')
    // .then(res => res.text())
    // .then(res => this.setState({ apiResponse: res }));
    this.setState({
      click: true
    })
    let tablename = this.state.query.slice(13)
    console.log(tablename)
    fetch(`http://localhost:9000/tablename`)
     .then(res => res.text())
     .then(res => this.setState({ apiResponse: res }))
    //  fetch('http://localhost:9000/tablename')
    //  .then(response => response.json())
    //  .then(items => this.setState({items}))
    //  .catch(err => console.log(err))
  }
}
  
  render() {
    return (
      <div className="home">
        <textarea
          className="query-div"
          type="text"
          placeholder="Write your query"
          value={this.state.query}
          onChange={this.handleOnChange}
        />
        <Button onClick={this.handleClick} type="primary" htmlType="submit" className="login-form-button">
          Send
        </Button>
        <hr />
        <p className="App-intro">{this.state.apiResponse}</p>
        {this.state.click && <DataTable items={this.state.items}/>}
      </div>
    );
  }
}

export default Home;
