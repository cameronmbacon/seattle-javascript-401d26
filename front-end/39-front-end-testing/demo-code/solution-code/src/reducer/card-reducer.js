const defaultState = {};

export default (state = defaultState, { type, payload }) => {
  let updatedState = null;
  let sectionId = null;
  let sectionCards = null;
  let updatedCards = null;

  switch (type) {
    case 'SECTION_CREATE':
      //! Vinicio -  My goal right now is to add a new element in the object
      //! Vinicio, here, payload represents a NEW Section
      return { ...state, [payload.id]: [] };
    case 'SECTION_REMOVE':
      //! Vinicio -  My goal right now is to remove the payload element from the object
      //! Vinicio, here, payload represents a Section
      updatedState = { ...state };
      delete updatedState[payload.id];
      return updatedState;
    case 'CARD_CREATE':
    //! Vinicio, here, payload represents a new CARD
      sectionId = payload.sectionId; // eslint-disable-line
      sectionCards = state[sectionId];
      updatedCards = [...sectionCards, payload];
      return { ...state, [sectionId]: updatedCards };
    case 'CARD_REMOVE':
      //! Vinicio, here, payload represents a CARD (that we want to remove)
      // {sectionId: 5 }
      sectionId = payload.sectionId; // eslint-disable-line
      sectionCards = state[sectionId]; // 5: [.....]
      updatedCards = sectionCards.filter(currentCard => currentCard.id !== payload.id);
      return { ...state, [sectionId]: updatedCards }; // {...state, 5: [...]}
    case 'CARD_UPDATE':
    //! Vinicio, here, payload represents a CARD (that we want to update)
      sectionId = payload.sectionId; // eslint-disable-line
      sectionCards = state[sectionId];
      updatedCards = sectionCards.map((currentCard) => {
        return currentCard.id === payload.id ? payload : currentCard;
      });
      return { ...state, [sectionId]: updatedCards };
    default:
      return state;
  }
};
