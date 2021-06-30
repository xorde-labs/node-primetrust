import axios from 'axios';

import packageData from '../package.json';
import {
  ICreateUserResponse,
  IGetUsersResponse,
  IGetCurrentUserResponse,
  ICreateAccountResponse,
  IGetAccountCryptoBalanceResponse,
  IGetAccountFiatBalanceResponse,
  IUploadDocumentResponse,
  IGetAccountsResponse,
} from './interfaces';

export const PRIMETRUST_SANDBOX_API_URL = 'https://sandbox.primetrust.com';
export const PRIMETRUST_API_URL = 'https://api.primetrust.com';
export const PRIMETRUST_API_VERSION = 'v2';

export class PrimeTrustAPIClient {
  public name: string;
  public version: string;
  public rootURL: string;

  constructor(options: {
    username: string;
    password: string;
    sandbox: boolean;
  }) {
    this.name = 'PrimeTrustAPIClient';
    this.version = packageData.version;
    this.rootURL = options.sandbox
      ? PRIMETRUST_SANDBOX_API_URL
      : PRIMETRUST_API_URL;
    //this.client = connect(username, password, sandbox);
  }

  public async CreateUser(data: {
    email: string;
    name: string;
    password: string;
  }): Promise<ICreateUserResponse> {
    const url = new URL(`/${this.version}/users`, this.rootURL);

    return axios({
      method: 'post',
      url: url.toString(),
      data,
    });
  }

  public async GetUsers(): Promise<IGetUsersResponse> {
    const url = new URL(`/${this.version}/users`, this.rootURL);

    return axios({
      method: 'get',
      url: url.toString(),
    });
  }

  public async GetCurrentUser(): Promise<IGetCurrentUserResponse> {
    const url = new URL(`/${this.version}/users/current`, this.rootURL);

    return axios({
      method: 'get',
      url: url.toString(),
    });
  }

  public async CreateAccount(account: any): Promise<ICreateAccountResponse> {
    const url = new URL(`/${this.version}/accounts`, this.rootURL);

    return axios({
      method: 'post',
      url: url.toString(),
      data: account,
    });
  }

  public async GetAccounts(): Promise<IGetAccountsResponse> {
    const url = new URL(`/${this.version}/accounts`, this.rootURL);

    return axios({
      method: 'get',
      url: url.toString(),
    });
  }

  public async GetAccountFiatBalance(data: {
    account: string;
  }): Promise<IGetAccountFiatBalanceResponse> {
    // GET v2/account-cash-totals?account.id=<accountId>
    const url = new URL(`/${this.version}/accounts`, this.rootURL);

    return axios({
      method: 'get',
      url: url.toString(),
    });
  }

  public async GetAccountCryptoBalance(data: {
    account: string;
  }): Promise<IGetAccountCryptoBalanceResponse> {
    // GET /v2/account-asset-totals?account.id=<accountId>
    const url = new URL(`/${this.version}/accounts`, this.rootURL);

    return axios({
      method: 'get',
      url: url.toString(),
    });
  }

  public async UploadDocument(document: {
    // POST v2/uploaded-documents
    contactId: string;
    label: string;
    description: string;
    fileData: string;
  }): Promise<IUploadDocumentResponse> {
    const url = new URL(`/${this.version}/accounts`, this.rootURL);

    return axios({
      method: 'post',
      url: url.toString(),
    });
  }
}
