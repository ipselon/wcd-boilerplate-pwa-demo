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

export const ListenToAuthStateChangedTypes = {
  dispatch: PropTypes.shape({
    user: PropTypes.shape(AuthUserTypes),
    userIsSignedIn: PropTypes.bool,
    userIsSignedOut: PropTypes.bool,
    authStateError: PropTypes.object,
  }),
};

export const GetCurrentUserTypes = {
  dispatch: PropTypes.shape({
    user: PropTypes.shape(AuthUserTypes),
    userIsSignedOut: PropTypes.bool,
  }),
};

export const CreateUserWithEmailAndPasswordTypes = {
  argument: PropTypes.shape({
    /**
     * The user's email address.
     */
    email: PropTypes.string.isRequired,
    /**
     * The user's chosen password.
     */
    password: PropTypes.string.isRequired,
  }),
  dispatch: PropTypes.shape({
    /**
     * A status value of the async process: "processing", "finished", "error"
     */
    status: PropTypes.oneOf(['processing', 'finished', 'error']),
    emptyEmail: PropTypes.bool,
    emptyPassword: PropTypes.bool,
    user: PropTypes.shape(AuthUserTypes),
    userIsSignedIn: PropTypes.bool,
    /**
     * Thrown if the password is not strong enough.
     */
    weakPassword: PropTypes.bool,
    /**
     * Thrown if there already exists an account with the given email address.
     */
    emailAlreadyInUse: PropTypes.bool,
    /**
     * Thrown if the email address is not valid.
     */
    invalidEmail: PropTypes.bool,
    /**
     * Thrown if email/password accounts are not enabled.
     * Enable email/password accounts in the Firebase Console, under the Auth tab.
     */
    operationIsNotAllowed: PropTypes.bool,
    /**
     * Error message
     */
    errorMessage: PropTypes.string,
  }),
};