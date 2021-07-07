export interface ICreateUserResponse {
  data: {
    type: 'users';
    id: 'string';
    attributes: {
      claims: 'string';
      disabled: true;
      email: 'string';
      'mfa-types': ['string'];
      name: 'string';
    };
    relationships: {
      'user-groups': {
        links: {
          related: 'string';
        };
      };
    };
    links: {
      self: 'string';
    };
  };
  included: [
    {
      type: 'user-groups';
      id: 'string';
      attributes: {
        description: 'string';
        label: 'string';
        name: 'string';
      };
      relationships: {
        users: {
          links: {
            related: 'string';
          };
        };
      };
      links: {
        self: 'string';
      };
    },
  ];
}
