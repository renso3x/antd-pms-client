import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MainLayout } from '../components/layout';
import PropertyList from '../components/propertyList';

import { initFetchTypes } from '../actions/propertTypes';

class Property extends Component {
  state = {
    types: []
  };

  componentDidMount() {
    this.props.initFetchTypes();
    console.log(this.props);
  }

  componentWillReceiveProps({ types }) {
    this.setState({
      types
    });
  }

  render() {
    console.log(this.state);
    return (
      <MainLayout>
        <PropertyList types={this.state.types} />
      </MainLayout>
    );
  }
}

const mapStatetoProps = state => {
  return {
    types: state.propertyType.types
  };
};

export default connect(
  mapStatetoProps,
  {
    initFetchTypes
  }
)(Property);
