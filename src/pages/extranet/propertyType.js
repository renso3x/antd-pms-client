import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MainLayout } from '../../components/layout';
import PropertyList from '../../components/extranet/propertyTypes';

import {
  initFetchTypes,
  createTypes,
  deleteTypes,
  updateTypes
} from '../../actions/propertTypes';

class PropertyTypePage extends Component {
  state = {
    types: []
  };

  componentDidMount() {
    this.props.initFetchTypes();
  }

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
        <PropertyList
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
    initFetchTypes,
    createTypes,
    deleteTypes,
    updateTypes
  }
)(PropertyTypePage);
