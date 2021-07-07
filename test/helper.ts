import faker from 'faker';
import { IUser, IAccount } from '../src/interfaces';

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export function generateUser(): IUser {
  return {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(10, false, /^[a-zA-Z0-9]*$/, 'aA1'),
  };
}

export function generateAccount(): IAccount {
  const MIN_AGE = 18;
  const MAX_AGE = 99;
  const minDateBirth = new Date();
  minDateBirth.setFullYear(minDateBirth.getFullYear() - MIN_AGE);
  const maxDateBirth = new Date();
  maxDateBirth.setFullYear(maxDateBirth.getFullYear() - MAX_AGE);

  return {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    'account-type': 'custodial',
    'authorized-signature': `${faker.name.firstName()} ${faker.name.lastName()}`,
    owner: {
      'contact-type': 'natural_person',
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      'tax-id-number': faker.datatype.number().toString(),
      'tax-country': faker.address.countryCode(),
      'date-of-birth': faker.date
        .between(maxDateBirth, minDateBirth)
        .toString(),
      sex: pickRandom(['male', 'female']),
      'primary-phone-number': {
        country: faker.address.countryCode(),
        number: faker.phone.phoneNumberFormat(),
        sms: faker.datatype.boolean(),
      },
      'primary-address': {
        'street-1': faker.address.streetAddress(),
        'street-2': faker.address.secondaryAddress(),
        'postal-code': faker.address.zipCode(),
        city: faker.address.city(),
        region: faker.address.state(),
        country: faker.address.countryCode(),
      },
    },
  };
}
