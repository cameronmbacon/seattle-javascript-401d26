import React from 'react';
import Adapter from 'enzyme-adapter-react-16'; //! Vinicio - Mock Dom
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme'; //! Vinicio - interface to work with the mock dom
import configureStore from 'redux-mock-store'; //! Vinicio - Mock Store
import Landing from '../component/dashboard/dashboard';

configureEnzyme({ adapter: new Adapter() });

describe('#Landing', () => {
  const initialState = {
    sections: [{
      title: 'Gregor',
      id: '0.123',
      createdOn: new Date(),
    },
    {
      title: 'Hound',
      id: '0.222',
      createdOn: new Date(),
    }],
    cards: {
      0.123: [],
      0.222: [],
    },
  };

  test('', () => {
    const mockStore = configureStore([]);
    //! Vinicio - mount is using the mocked DOM
    const mountedLanding = mount(<Provider store={mockStore(initialState)}>
      <Landing /></Provider>);

    expect(mountedLanding.find('SectionForm')).toBeTruthy();
    expect(mountedLanding.find('Section').length).toEqual(2);
  });


});

