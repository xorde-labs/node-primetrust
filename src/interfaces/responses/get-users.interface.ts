export interface IGetUsersResponse {
  links: {
    self: 'string';
    first: 'string';
    last: 'string';
    next: 'string';
    prev: 'string';
  };
  meta: {
    'page-count': number;
    'resource-count': number;
  };
  data: [
    {
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
    },
  ];
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
