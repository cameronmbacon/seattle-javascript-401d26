export const create = ({ content, sectionId }) => {
  return {
    type: 'CARD_CREATE',
    payload: {
      content,
      sectionId,
      id: Math.random(),
      timestamp: new Date(),
    },
  };
};

export const update = (card) => {
  return {
    type: 'CARD_UPDATE',
    payload: card,
  };
};

export const remove = (card) => {
  return {
    type: 'CARD_REMOVE',
    payload: card,
  };
};
