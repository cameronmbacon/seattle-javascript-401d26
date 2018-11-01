import cardReducer from '../reducer/card-reducer';

describe('#SectionForm', () => {
  test('Initial State should be an empty object', () => {
    const initialState = cardReducer(undefined, { type: 'INITIAL', payload: null });
    expect(initialState).toEqual({});
  });
  test('Creating a section should result in a new property in the state', () => {
    const previousState = {};
    let state = cardReducer(previousState, { type: 'SECTION_CREATE', payload: { id: 0.28 } });

    state = cardReducer(state, { type: 'SECTION_CREATE', payload: { id: 0.29 } });
    expect(state).toEqual({ 0.28: [], 0.29: [] });
  });
});
