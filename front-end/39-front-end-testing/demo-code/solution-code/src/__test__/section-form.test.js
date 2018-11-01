import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure as configureEnzyme, mount } from 'enzyme';
import SectionForm from '../component/section-form/section-form';

configureEnzyme({ adapter: new Adapter() });

describe('#SectionForm', () => {
  test('the state should be changed as the values in the form change', () => {
    const testEvent = {
      target: {
        name: 'title',
        value: 'Gregor',
      },
    };
    const mountedForm = mount(<SectionForm/>);
    //! Vinicio - the simulate event will be used to send fake events to the component
    mountedForm.find('.section-form input').simulate('change', testEvent);
    console.log(mountedForm.find('.section-form input'));
    expect(mountedForm.state().title).toEqual('Gregor');
  });

  test('the onComplete function should be called', () => {
    const mountedForm = mount(<SectionForm/>);
    mountedForm.setProps({ onComplete: jest.fn() });
    mountedForm.simulate('submit', { preventDefault: () => {} }); //! you can remove the prevent-default
    expect(mountedForm.props().onComplete).toHaveBeenCalled();
  });
});
