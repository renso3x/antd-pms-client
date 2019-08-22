import React, { Component } from 'react';
import { Table, Button, Divider, Row, Col } from 'antd';
import { connect } from 'react-redux';

import MainLayout from '../../components/layout/main';
import AccomodationForm from '../../components/extranet/accomodationSetup';

const dataSource = [
  {
    key: '1',
    name: 'Apo View Hotel',
    destination: 'Manila'
  }
];

const columns = [
  {
    title: 'Accomdation Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
    key: 'destination'
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) =>
      dataSource.length >= 1 ? (
        <span>
          <Button icon="edit" />
          <Divider type="vertical" />
          <Button icon="chrome" />
        </span>
      ) : null
  }
];

class Accomodation extends Component {
  state = {
    showForm: false
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  render() {
    return (
      <MainLayout>
        {this.state.showForm ? (
          <Row>
            <Col className="mb-16">
              <AccomodationForm {...this.props} onCancel={this.toggleForm} />
            </Col>
          </Row>
        ) : (
          <>
            <h1>Accomodation Management</h1>
            <Row>
              <Col className="mb-16">
                <Button icon="plus" type="primary" onClick={this.toggleForm}>
                  Add New
                </Button>
              </Col>
            </Row>
            <Table dataSource={dataSource} columns={columns} />
          </>
        )}
      </MainLayout>
    );
  }
}

const mapStateToProps = ({ propertyType }) => {
  return { types: propertyType.types };
};

export default connect(mapStateToProps)(Accomodation);
