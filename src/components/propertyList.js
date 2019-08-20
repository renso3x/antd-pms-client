import React, { Component, Fragment } from 'react';
import { Button, Table, Row, Col, Divider, Popconfirm, Icon } from 'antd';
import PropertyTypeForm from '../components/propertyTypeForm';

class PropertyList extends Component {
  state = {
    showForm: false,
    formTitle: 'create',
    value: '',
    dataSource: this.props.types,
    tableColumns: [
      {
        title: 'Type',
        dataIndex: 'name',
        key: 'name'
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

  componentWillReceiveProps({ types }) {
    this.setState({ dataSource: types });
  }

  handleDelete = record => console.log(record);

  handleEdit = record => {
    this.setState(() => ({
      formTitle: 'edit',
      showForm: true,
      value: record.name
    }));
  };

  handleShowForm = () => {
    this.setState({ formTitle: 'create', showForm: true, value: '' });
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
      // form.resetFields();
      // this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <Fragment>
        <Row>
          <Col className="mb-16">
            <Button type="primary" onClick={this.handleShowForm}>
              <Icon type="plus" />
              Create
            </Button>
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
          formType={this.state.formType}
          wrappedComponentRef={this.saveFormRef}
          title={this.state.formTitle}
          visible={this.state.showForm}
          value={this.state.value}
          onSubmit={this.handleSubmit}
          onCancel={this.handleCancel}
        />
      </Fragment>
    );
  }
}

export default PropertyList;
