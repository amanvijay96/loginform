import React from 'react'
// import { Table } from 'reactstrap';

// class DataTable extends Component {
//   render() {

//     const items = this.props.items.map(item => {
//       return (
//         <tr key={item.id}>
//           <td>{item.firstname}</td>
//           <td>{item.lastname}</td>
//           <td>{item.address}</td>
//           <td>{item.city}</td>  
//         </tr>
//         )
//       })

//     return (
//       <Table responsive hover>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Address</th>
//             <th>City</th>   
//           </tr>
//         </thead>
//         <tbody>
//           {items}
//         </tbody>
//       </Table>
//     )
//   }
// }

// export default DataTable


import { Table, Button } from 'antd';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstname',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastname',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'City',
    dataIndex: 'city',
  },
];

const data = [];
for (let i = 1; i <= 25; i++) {
  data.push({
    key: i,
    firstname: `Raj`,
    lastname: ` Verma ${i}`,
    address: `Btm 1st stage`,
    city: `Bangalore`
  });
}

class DataTable extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 2 }}>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
export default DataTable