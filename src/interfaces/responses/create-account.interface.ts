export interface ICreateAccountResponse {
  data: {
    type: 'accounts';
    id: 'string';
    attributes: {
      name: 'string';
      number: 'string';
      'contributions-frozen': true;
      'disbursements-frozen': true;
      'organization-label': 'string';
      statements: true;
      status: 'closed';
      'solid-freeze': true;
    };
    relationships: {
      'account-asset-totals': {
        links: {
          related: 'string';
        };
      };
      'account-cash-totals': {
        links: {
          related: 'string';
        };
      };
      'account-transfer-authorizations': {
        links: {
          related: 'string';
        };
      };
      'asset-transactions': {
        links: {
          related: 'string';
        };
      };
      'asset-transfers': {
        links: {
          related: 'string';
        };
      };
      'asset-transfer-methods': {
        links: {
          related: 'string';
        };
      };
      'authorized-transfer-accounts': {
        links: {
          related: 'string';
        };
      };
      beneficiaries: {
        links: {
          related: 'string';
        };
      };
      'cash-transactions': {
        links: {
          related: 'string';
        };
      };
      'contact-funds-transfer-references': {
        links: {
          related: 'string';
        };
      };
      contacts: {
        links: {
          related: 'string';
        };
      };
      'funds-transfers': {
        links: {
          related: 'string';
        };
      };
      grantors: {
        links: {
          related: 'string';
        };
      };
      owners: {
        links: {
          related: 'string';
        };
      };
      'owners-and-grantors': {
        links: {
          related: 'string';
        };
      };
      'account-histories': {
        links: {
          related: 'string';
        };
      };
      'uploaded-documents': {
        links: {
          related: 'string';
        };
      };
      'account-aggregate-policy': {
        links: {
          related: 'string';
        };
      };
      'account-policy': {
        links: {
          related: 'string';
        };
      };
      'account-questionnaire': {
        links: {
          related: 'string';
        };
      };
      'account-type': {
        links: {
          related: 'string';
        };
      };
      'account-sub-type': {
        links: {
          related: 'string';
        };
      };
      'latest-agreement': {
        links: {
          related: 'string';
        };
      };
      organization: {
        links: {
          related: 'string';
        };
      };
      'rule-group': {
        links: {
          related: 'string';
        };
      };
      'webhook-config': {
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
      type: 'account-asset-totals';
      id: 'string';
      attributes: {
        name: 'string';
        settled: 'string';
        'contingent-hold': 'string';
        'non-contingent-hold': 'string';
        'pending-transfer': 'string';
        disbursable: 'string';
        'settled-cold': 'string';
        'pending-transfer-cold': 'string';
        'non-contingent-hold-cold': 'string';
        'disbursable-cold': 'string';
        'settled-hot': 'string';
        'pending-transfer-hot': 'string';
        'non-contingent-hold-hot': 'string';
        'disbursable-hot': 'string';
      };
      relationships: {
        account: {
          links: {
            related: 'string';
          };
        };
        asset: {
          links: {
            related: 'string';
          };
        };
        'asset-transactions': {
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
