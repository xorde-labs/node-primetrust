# PrimeTrust API NodeJS Client 

Node.js REST API wrapper library for [PrimeTrust Financial Platform](https://documentation.primetrust.com/).

## Quick Start

For full reference please see [REFERENCE.md](docs/REFERENCE.md)

### Installation

```shell
npm install node-primetrust
```

### Usage

#### Client initialization
```typescript
import { PrimeTrustAPIClient } from "node-primetrust";

const username = "";
const password = "";
const sandbox = false;

const client = new PrimeTrustAPIClient(
    { username, password, sandbox }
);
```

#### [Creating a User](https://documentation.primetrust.com/#section/Creating-a-User)
```typescript
const response = await client.CreateUser({
    email: "example@example.org",
    name: "Example Example",
    password: "Password-Password",
});

console.log("User created. PrimeTrust ID: %s", response.id);
```

