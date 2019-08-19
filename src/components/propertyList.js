import React, { Component, Fragment } from 'react';
import { Button, Table, Row, Col, Divider, Popconfirm } from 'antd';
import PropertyTypeForm from '../components/propertyTypeForm';

class PropertyList extends Component {
  state = {
    showForm: false,
    formTitle: 'Create Type',
    dataSource: [
      {
        id: 0,
        type: 'standard'
      }
    ],
    tableColumns: [
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type'
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <span>
              <a onClick={() => this.handleEdit(record)}>Edit</a>
              <Divider type="vertical" />
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => this.handleDelete(record)}
              >
                <a>Delete</a>
              </Popconfirm>
            </span>
          ) : null
      }
    ]
  };
  handleDelete = record => console.log(record);

  handleEdit = record => {
    this.setState(() => ({ formTitle: 'Edit Type', showForm: true }));
  };

  handleShowForm = () => {
    this.setState({ showForm: true });
  };

  handleCancel = () => {
    this.setState({ showForm: false });
  };

  handleSubmit = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <Fragment>
        <Row type="flex" justify="end">
          <Col className="mb-16">
            <Button onClick={this.handleShowForm}>Create</Button>
          </Col>
        </Row>
        <Row>
          <Table
            bordered
            dataSource={this.state.dataSource}
            columns={this.state.tableColumns}
          />
        </Row>
        <PropertyTypeForm
          wrappedComponentRef={this.saveFormRef}
          title={this.state.formTitle}
          visible={this.state.showForm}
          onSubmit={this.handleSubmit}
          onCancel={this.handleCancel}
        />
      </Fragment>
    );
  }
}

export default PropertyList;
