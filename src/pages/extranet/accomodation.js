import React, { Component } from 'react';
import { Table, Button, Divider, Row, Col } from 'antd';
import { connect } from 'react-redux';

import MainLayout from '../../components/layout/main';
import AccomodationForm from '../../components/extranet/accomodationSetup';

import * as accomodationTypes from '../../actions/accomodation';

class Accomodation extends Component {
  constructor(props) {
    super();

    this.state = {
      showForm: false,
      dataSource: this.formatDS(props.accomodation.listings),
      formTitle: 'create',
      record: {},
      columns: [
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
          render: (text, record, index) =>
            this.state.dataSource.length >= 1 ? (
              <span>
                <Button icon="edit" onClick={() => this.handleEdit(index)} />
              </span>
            ) : null
        }
      ]
    };
  }

  componentWillReceiveProps({ accomodation }) {
    this.setState({
      dataSource: this.formatDS(accomodation.listings)
    });
  }

  formatDS = listings => {
    return listings.map(listing => ({
      key: listing._id,
      name: listing.name,
      destination: listing.destination
    }));
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  handleSave = () => {
    const { form } = this.formRef.props;
    const { formTitle, record } = this.state;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      if (values.mainPhoneNumber) {
        values.mainPhoneNumber = `${values.prefix}${values.mainPhoneNumber}`;
        delete values.prefix;
      }
      if (!values.secondaryPhoneNumber) {
        delete values.secondaryPhoneNumber;
      }
      if (!values.website) {
        delete values.website;
      }

      if (formTitle === 'create') {
        this.props.createAccomodation(values);
      } else {
        this.props.updateAccomodation({
          id: record._id,
          data: values
        });
      }

      form.resetFields();
      this.setState({ showForm: false });
    });
  };

  handleEdit = index => {
    const getRecord = this.props.accomodation.listings[index];
    this.setState({
      record: getRecord,
      formTitle: 'update',
      showForm: true
    });
  };

  handleDelete = record => this.props.deleteAccomodation(record);

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <MainLayout>
        {this.state.showForm ? (
          <Row>
            <Col className="mb-16">
              <AccomodationForm
                {...this.props}
                formTitle={this.state.formTitle}
                wrappedComponentRef={this.saveFormRef}
                formType={this.state.formType}
                onCancel={this.toggleForm}
                onSave={this.handleSave}
                record={this.state.record}
              />
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
            <Table
              dataSource={this.state.dataSource}
              columns={this.state.columns}
            />
          </>
        )}
      </MainLayout>
    );
  }
}

const mapStateToProps = state => {
  return { accomodation: state.accomodation, types: state.propertyType.types };
};

export default connect(
  mapStateToProps,
  accomodationTypes
)(Accomodation);
