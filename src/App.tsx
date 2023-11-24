import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from 'antd/es/table/Table';

function App() {

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <div className="container">
      <div className="App">
        <main className="main">
          <Table dataSource={dataSource} columns={columns} />;
        </main>
      </div>
    </div>
  );
}

export default App;
