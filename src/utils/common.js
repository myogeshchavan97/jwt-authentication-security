import store from '../store/store';
import { initiateGetProfile } from '../actions/profile';

export const validateFields = (fieldsToValidate) => {
  return fieldsToValidate.every((field) => Object.values(field)[0] !== '');
};

export const maintainSession = () => {
  const currentPath = window.location.pathname;
  if (currentPath === '/profile') {
    store.dispatch(initiateGetProfile());
  }
};
