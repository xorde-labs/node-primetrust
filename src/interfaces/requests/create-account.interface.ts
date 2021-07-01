export interface ICreateAccountInterface {
  type: 'account';
  attributes: {
    'account-type': 'custodial';
    name: "Rohan'''s Account";
    'authorized-signature': 'Rohan Sushil Patel';
    owner: {
      'contact-type': 'natural_person';
      name: 'Rohan Patel';
      email: 'rohan@email.in';
      'tax-id-number': '123123123456';
      'tax-country': 'IN';
      'date-of-birth': '1993-03-16';
      sex: 'male';
      'primary-phone-number': {
        country: 'IN';
        number: '99209145545';
        sms: true;
      };
      'primary-address': {
        'street-1': '123 MK Road';
        'street-2': 'Flat 3';
        'postal-code': '400020';
        city: 'Mumbai';
        region: 'Maharashtra';
        country: 'IN';
      };
    };
  };
}
