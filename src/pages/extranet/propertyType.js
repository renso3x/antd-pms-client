import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MainLayout } from '../../components/layout';
import PropertyTypes from '../../components/extranet/propertyTypes';

import {
  createTypes,
  deleteTypes,
  updateTypes
} from '../../actions/propertTypes';

class PropertyTypePage extends Component {
  state = {
    types: this.props.types.types
  };

  componentWillReceiveProps({ types }) {
    this.setState({
      types
    });
  }

  handleSave = record => this.props.createTypes(record);

  handleUpdate = record => this.props.updateTypes(record);

  handleDelete = record => this.props.deleteTypes(record);

  render() {
    return (
      <MainLayout>
        <PropertyTypes
          types={this.state.types}
          onSave={this.handleSave}
          onUpdate={this.handleUpdate}
          onDelete={this.handleDelete}
        />
      </MainLayout>
    );
  }
}

const mapStatetoProps = state => {
  return {
    types: state.propertyType
  };
};

export default connect(
  mapStatetoProps,
  {
    createTypes,
    deleteTypes,
    updateTypes
  }
)(PropertyTypePage);
