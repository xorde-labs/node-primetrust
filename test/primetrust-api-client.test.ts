import chai from 'chai';
import dirtyChai from 'dirty-chai';
import dotenv from 'dotenv';
import chaiAsPromised from 'chai-as-promised';
import faker from 'faker';

import { PrimeTrustAPIClient } from '../src/primetrust-api-client';
import pkg from '../package.json';

const expect = chai.expect;
chai.should();
chai.use(chaiAsPromised);
chai.use(dirtyChai);

dotenv.config();

describe('PrimeTrustAPIClient', () => {
  let client;
  let options;

  beforeEach(() => {
    options = {
      username: 'asd@asd.com',
      password: 'Password123',
      sandbox: true,
    };

    client = new PrimeTrustAPIClient(options);
  });

  it('should expose name and version', () => {
    client = new PrimeTrustAPIClient(options);
    expect(client.name).equal('PrimeTrustAPIClient');
    expect(client.version).equal(pkg.version);
  });

  it('Create User', async () => {
    const email = faker.internet.email();
    const response = await client.CreateUser(
      email,
      faker.name.firstName(),
      'Asdaasd123',
    );
    expect(response.data.id).be.a('string');
    expect(response.data.attributes.email).equal(email);
  }).timeout(5000);

  xdescribe('Get Users', async () => {
    const response = await client.GetUsers();
    expect(response.id).be.a('string');
  });

  xdescribe('Get Current User', async () => {
    const response = await client.GetCurrentUser();
    expect(response.id).be.a('string');
  });

  xdescribe('Create Accounts', async () => {
    const response = await client.CreateAccount();
    expect(response.id).be.a('string');
  });

  xdescribe('Get Accounts', async () => {
    const response = await client.GetAccounts();
    expect(response.id).be.a('string');
  });

  xdescribe('Get GetAccountFiatBalance', async () => {
    const response = await client.GetAccountFiatBalance();
    expect(response.id).be.a('string');
  });

  xdescribe('Get GetAccountCryptoBalance', async () => {
    const response = await client.GetAccountCryptoBalance();
    expect(response.id).be.a('string');
  });

  xdescribe('UploadDocument', async () => {
    const response = await client.UploadDocument();
    expect(response.id).be.a('string');
  });
});
