// ------------------------------------------------------------
// Vinicio - the next step involves creating custom error types
// ------------------------------------------------------------
// class ProfileError extends Error {
//   constructor(missingValues){
//     //! Vinicio - here, you can have as much information
//     // as you want to be able to react to the error
//
//     this.missingValues = missingValues;
//   }
// }
// ------------------------------------------------------------

const validateProfile = (profile) => {
  if (!profile) {
    throw new Error('Profile is required');
  }
  const {
    username, email, bio, owner,
  } = profile;

  if (!username || !email || !bio || !owner) {
    throw new Error('Invalid Profile');
  }
  //! Vinicio - if the profile is correct, do nothing
};

export default (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CLIENT_PROFILE_SET':
      validateProfile(payload);
      //! Vinicio - this line will never run if the have an error
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default:
      return state;
  }
};
