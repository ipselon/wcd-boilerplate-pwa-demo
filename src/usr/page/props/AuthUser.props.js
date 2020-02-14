import PropTypes from 'prop-types';

export const AuthUserTypes = {
  displayName: PropTypes.string,
  email: PropTypes.string,
  emailVerified: PropTypes.bool,
  isAnonymous: PropTypes.bool,
  userMetadata: PropTypes.shape({
    creationTime: PropTypes.string,
    lastSignInTime: PropTypes.string,
  }),
  /**
   * The phone number normalized based on the E.164 standard (e.g. +16505550101) for the current user.
   * This is null if the user has no phone credential linked to the account.
   */
  phoneNumber: PropTypes.string,
  photoURL: PropTypes.string,
  // providerData: PropTypes.arrayOf(PropTypes.shape({
  //
  // })),

  providerId: PropTypes.string,
  refreshToken: PropTypes.string,
  /**
   * The user's unique ID.
   */
  uid: PropTypes.string,
};
