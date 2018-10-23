//! Vinicio - this is a function THAT RETURNS AN ACTION
export const create = ({ title }) => {
  return {
    type: 'SECTION_CREATE',
    payload: {
      id: Math.random(),
      title,
      createdOn: new Date(),
    },
  };
};
export const update = (section) => {
  return {
    type: 'SECTION_UPDATE',
    payload: section,
  };
};

export const remove = (section) => {
  return {
    type: 'SECTION_REMOVE',
    payload: section,
  };
};
