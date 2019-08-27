import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'antd';
import location from 'countrycitystatejson';
const { Option } = Select;

class AccomodationForm extends Component {
  state = {
    types: this.props.types
  };

  componentDidMount() {
    // const countries = location
    //   .getCountries()
    //   .map(({ shortName, name, capital }) => ({ shortName, name, capital }))
    //   .sort();
    // const cities = location.getCountryByShort('PH');
    // console.log(countries);
    // console.log(cities);
  }

  onSelectType = value => {
    console.log(`selected ${value}`);
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onSave(e);
  };

  render() {
    const { types } = this.state;
    const { form, onCancel, record } = this.props;
    const { getFieldDecorator } = form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '63'
    })(
      <Select style={{ width: 70 }}>
        <Option value="63">+63</Option>
      </Select>
    );

    return (
      <>
        <h1>Accomodation Setup</h1>
        <Form {...formItemLayout} onSubmit={this.onHandleSubmit}>
          <Form.Item label="Accommodation Name">
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Please input a name'
                }
              ],
              initialValue: record.name
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Address">
            {getFieldDecorator('address', {
              rules: [
                {
                  required: true,
                  message: 'Please input a address'
                }
              ],
              initialValue: record.address
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Country">
            {getFieldDecorator('country', {
              rules: [
                { required: true, message: 'Please select your country!' }
              ],
              initialValue: record.country
            })(
              <Select placeholder="Please select a country">
                <Option value="ph">Philippines</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Destination">
            {getFieldDecorator('destination', {
              rules: [
                {
                  required: true,
                  message: 'Please select your destination!'
                }
              ],
              initialValue: record.destination
            })(
              <Select placeholder="Please select a destination">
                <Option value="mnl">Manila</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Contact Person">
            {getFieldDecorator('contactPerson', {
              rules: [
                {
                  required: true,
                  message: 'Please input a name'
                }
              ],
              initialValue: record.contactPerson
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Business Email Address">
            {getFieldDecorator('businessEmail', {
              rules: [
                {
                  required: true,
                  message: 'Please input a email address'
                }
              ],
              initialValue: record.businessEmail
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Main Phone Number">
            {getFieldDecorator('mainPhoneNumber', {
              rules: [
                {
                  required: true,
                  message: 'Please input your phone number!'
                }
              ],
              initialValue: record.mainPhoneNumber
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
          </Form.Item>
          <Form.Item label="Secondary Phone Number">
            {getFieldDecorator('secondaryPhoneNumber', {
              rules: [],
              initialValue: record.secondaryPhoneNumber
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
          </Form.Item>
          <Form.Item label="Accomodation Type">
            {getFieldDecorator('accomodationTypeId', {
              rules: [{ required: true, message: 'Please select a type!' }],
              initialValue: record.type
            })(
              <Select
                showSearch
                placeholder="Please select a type"
                optionFilterProp="children"
                onChange={this.onSelectType}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {types.map(type => (
                  <Option key={type._id} value={type._id}>
                    {type.name}
                  </Option>
                ))}
              </Select>
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              {record.formTitle ? 'Save' : 'Update'}
            </Button>
            <Button style={{ marginLeft: '8px' }} onClick={onCancel}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

const WrappedAccodomationForm = Form.create({ name: 'accomodation_setup' })(
  AccomodationForm
);

export default WrappedAccodomationForm;
