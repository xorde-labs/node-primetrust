# PrimeTrust API NodeJS Client 

## Installation

```shell
npm install node-primetrust
```

## Usage

### Client initialization
```typescript
import { PrimeTrustAPIClient } from "primetrust";

const username = "";
const password = "";
const sandbox = false;

const client = new PrimeTrustAPIClient(
    { username, password, sandbox }
);
```

### [Creating a User](https://documentation.primetrust.com/#section/Creating-a-User)
```typescript
const response = await client.CreateUser({
    email: "example@example.org",
    name: "Example Example",
    password: "Password-Password",
});

console.log("User created. PrimeTrust ID: %s", response.id);
```

### [Get All Users](https://documentation.primetrust.com/#tag/Users)
```typescript
// GET /v2/users
const response = await client.GetUsers();

console.log("All Users: %o", response);
```

### [Get Current User](https://documentation.primetrust.com/#operation/GET__v2_users_current)
```typescript
// GET /v2/users/current
const response = await client.GetCurrentUser();

console.log("Current User: %o", response);
```

### [Creating an Account](https://documentation.primetrust.com/#operation/POST__v2_accounts)
```typescript
// POST /v2/accounts
const contactPhoneNoSMS: PTContactPhone = {
    country: "US",
    number: "1231234567",
    sms: false
}

const contactPhoneWithSMS: PTContactPhone = {
    country: "US",
    number: "1231234567",
    sms: true
}

const contactAddressCorporate: PTContactAddress = {
    street1: "Example Street",
    street2: "Example Building",
    postalCode: "12345-1234",
    city: "Las Vegas",
    region: "Nevada",
    country: "US"
}

const contactAddressPersonal: PTContactAddress = {
    street1: "Example Street",
    street2: "Example Building, Suite 123",
    postalCode: "12345-1234",
    city: "Las Vegas",
    region: "Nevada",
    country: "US"
}

const contactPerson1: PTContactNaturalPerson = {
    name: "Example Person 1",
    email: "example@example.org",
    taxIdNumber: "123-123-123",
    taxCountry: "US",
    dateOfBirth: "1900-01-01",
    sex: "male",
    label: "CEO",
    primaryPhoneNumber: contactPhoneWithSMS,
    primaryAddress: contactAddressPersonal,
}

const acccountOwner: PTAccountOwner = {
    type: "company",
    name: "Example Company LTD",
    email: "info@example.org",
    taxIdNumber: "1234567890",
    taxCountry: "US", // ISO 3166-1 alpha-2 code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
    regionOfFormation: "Nevada",
    primaryPhoneNumber: contactPhoneNoSMS,
    primaryAddress: contactAddressCorporate,
    relatedContacts: [
        {...contactPerson1}
    ]
}

const response = await client.CreateAccount({
    type: "custodial",
    name: "Example Company Account",
    authorizedSignature: "Example Person",
    owner: acccountOwner,
    
});

console.log("Account created. PrimeTrust ID: %s", response.id);
```

### [Get All Accounts](https://documentation.primetrust.com/#tag/Accounts)
```typescript
// GET /v2/accounts
const response = await client.GetAccounts();

console.log("All Accounts: %o", response);
```

### [Get Account Fiat Balance](https://documentation.primetrust.com/#tag/Account-Cash-Totals)
```typescript
// GET v2/account-cash-totals?account.id=<accountId>
const account = "0f89212d-1578-4e3e-a865-dc77a6f2a505";
const response = await client.GetAccountFiatBalance({ account });

console.log("Account Balance: %o", response);
```

### [Get Account Crypto Balance](https://documentation.primetrust.com/#tag/Account-Asset-Totals)
```typescript
// GET /v2/account-asset-totals?account.id=<accountId>
const account = "0f89212d-1578-4e3e-a865-dc77a6f2a505";
const response = await client.GetAccountCryptoBalance({ account });

console.log("Account Balance: %o", response);
```

### [Uploading Document for a Contact](https://documentation.primetrust.com/#tag/Uploaded-Documents)

```typescript
// POST v2/uploaded-documents
import fs from "fs";

const response = await client.UploadDocument({
    contactId: "1234-123456-1234545656456456456",
    label: "Example Document",
    description: "Optional Description",
    fileData: fs.readFileSync('/path/to/file'),
});

console.log("User created. PrimeTrust ID: %s", response.id);
```
