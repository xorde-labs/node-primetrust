export interface IAccount {
  name: string;
  'authorized-signature': string;
  'account-type': string;
  owner: {
    'contact-type': string;
    name: string;
    email: string;
    'tax-id-number': string;
    'tax-country': string;
    'date-of-birth': string;
    sex: string;
    'primary-phone-number': {
      country: string;
      number: string;
      sms: boolean;
    };
    'primary-address': {
      'street-1': string;
      'street-2': string;
      'postal-code': string;
      city: string;
      region: string;
      country: string;
    };
  };
}
