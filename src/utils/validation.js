import _ from 'lodash';

export const GLOBAL_ERROR = 'GLOBAL_ERROR';

function getErrorMessage(response) {
  console.log(response);
  let msg = '';
  if (response.data) {
    if (_.isString(response.data)) {
      msg = response.data;
    } else if (_.isObject(response.data) && response.data.message) {
      msg = response.data.message;
    }
  } else {
    msg = response.statusText || 'Unknown Error';
  }

  return msg;
}

export function handleErrors(error, errorTypeName) {
  if (!error.response && error instanceof Error && error.message === 'Network Error') {
    return {
      type: GLOBAL_ERROR,
      payload: 'Network Error: The main API can\'t be reached, please contact support.'
    };
  } else if (error.response) {
    const response = error.response;
    const status = response.status;

    if (status === 422) {
      const errors = response.data.errors.map(item => item.msg );
      return {
        type: errorTypeName,
        payload: errors.join('; ')
      }
    } else {
      return {
        type: errorTypeName,
        payload: getErrorMessage(response)
      };
    }
  }

  return {
    type: GLOBAL_ERROR,
    payload: 'Unknown Error: Please contact support.'
  };
}
