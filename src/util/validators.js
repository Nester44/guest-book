/* eslint-disable max-len */

const htmlRegEx = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
const linkRegEx = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;
const HTTPRegEx = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;

export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const notHTML = (value) => (htmlRegEx.test(value) ?
  'Prompt can\'t consist HTML tags' :
  undefined
);

export const notLink = (value) => (linkRegEx.test(value) || HTTPRegEx.test(value) ?
  'Name can\'t consist links' :
  undefined
);
export const required = (value) => (value ? undefined : 'Required');
