export const errorSelector = (state) => state.auth.error;
export const getIsAuthSelector = (state) => state.auth.token?.idToken;
export const displayNameSelector = (state) => state.auth.token.displayName;
