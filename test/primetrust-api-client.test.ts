import chai from 'chai';
import dirtyChai from 'dirty-chai';
import dotenv from 'dotenv';
import chaiAsPromised from 'chai-as-promised';

import { PrimeTrustAPIClient } from '../src/primetrust-api-client';
import pkg from '../package.json';

import { IUser, IAccount } from '../src/interfaces';
import { generateUser, generateAccount } from './helper';

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

  describe('Create User', () => {
    let user: IUser;
    beforeEach(() => {
      user = generateUser();
    });

    it('Should create user with valid data', async () => {
      const response = await client.CreateUser(
        user.email,
        user.name,
        user.password,
      );
      expect(response.data.id).be.a('string');
      expect(response.data.attributes.email).equal(user.email);
    });

    it('Should return error with invalid password', async () => {
      const response = await client.CreateUser(user.email, user.name, '123');
      expect(response.errors).be.a('array');
      expect(response.errors[0].status).equal(422);
      expect(response.errors[0].title).equal('Invalid Attribute');
    });
  });

  describe('Get Users', () => {
    it('Should return list of users', async () => {
      const response = await client.GetUsers();
      expect(response.data[0].id).be.a('string');
      expect(response.data[0].attributes.email).be.a('string');
    });
  });

  describe('Get Current User', () => {
    it('Should return current user info', async () => {
      const response = await client.GetCurrentUser();
      expect(response.data.id).be.a('string');
      expect(response.data.attributes.email).be.a('string');
      expect(response.data.attributes.email).equal(options.username);
    });
  });

  describe('Create Accounts', () => {
    let account: IAccount;
    beforeEach(() => {
      account = generateAccount();
    });

    it('Should create account', async () => {
      const response = await client.CreateAccount(account);
      expect(response.data.id).be.a('string');
      expect(response.data.attributes.name).be.a('string');
      expect(response.data.attributes.number).be.a('string');
    });

    it('Should return error with invalid password', async () => {
      account.name = '';
      const response = await client.CreateAccount(account);
      expect(response.errors).be.a('array');
      expect(response.errors[0].status).equal(422);
      expect(response.errors[0].title).equal('Invalid Attribute');
    });
  });

  xdescribe('Get Accounts', async () => {
    const response = await client.GetAccounts();
    expect(response.data.id).be.a('string');
  });

  xdescribe('Get GetAccountFiatBalance', async () => {
    const response = await client.GetAccountFiatBalance();
    expect(response.data.id).be.a('string');
  });

  xdescribe('Get GetAccountCryptoBalance', async () => {
    const response = await client.GetAccountCryptoBalance();
    expect(response.data.id).be.a('string');
  });

  xdescribe('UploadDocument', async () => {
    const response = await client.UploadDocument();
    expect(response.data.id).be.a('string');
  });
});
