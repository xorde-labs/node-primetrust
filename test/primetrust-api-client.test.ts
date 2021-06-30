import chai from 'chai';
import dirtyChai from 'dirty-chai';
import dotenv from 'dotenv';
import chaiAsPromised from 'chai-as-promised';

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
      username: '',
      password: '',
      sandbox: true,
    };

    client = new PrimeTrustAPIClient(options);
  });

  it('should expose name and version', () => {
    client = new PrimeTrustAPIClient(options);
    expect(client.name).equal('PrimeTrustAPIClient');
    expect(client.version).equal(pkg.version);
  });

  describe('Create User', async () => {
    const response = await client.CreateUser();
    expect(response.id).be.a('string');
  });

  describe('Get Users', async () => {
    const response = await client.GetUsers();
    expect(response.id).be.a('string');
  });

  describe('Get Current User', async () => {
    const response = await client.GetCurrentUser();
    expect(response.id).be.a('string');
  });

  describe('Create Accounts', async () => {
    const response = await client.CreateAccount();
    expect(response.id).be.a('string');
  });

  describe('Get Accounts', async () => {
    const response = await client.GetAccounts();
    expect(response.id).be.a('string');
  });

  describe('Get GetAccountFiatBalance', async () => {
    const response = await client.GetAccountFiatBalance();
    expect(response.id).be.a('string');
  });

  describe('Get GetAccountCryptoBalance', async () => {
    const response = await client.GetAccountCryptoBalance();
    expect(response.id).be.a('string');
  });

  describe('UploadDocument', async () => {
    const response = await client.UploadDocument();
    expect(response.id).be.a('string');
  });
});
