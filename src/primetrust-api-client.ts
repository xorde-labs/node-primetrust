import axios, { AxiosRequestConfig } from 'axios';

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
  ICreateAccountInterface,
} from './interfaces';

const PRIMETRUST_SANDBOX_API_URL = 'https://sandbox.primetrust.com';
const PRIMETRUST_API_URL = 'https://api.primetrust.com';
const PRIMETRUST_API_VERSION = 'v2';

const USERS_API_ENDPOINT = '/users';
const ACCOUNTS_API_ENDPOINT = '/accounts';

const HTTP_GET_METHOD = 'get';
const HTTP_POST_METHOD = 'post';

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
  }

  private async request(
    url: string,
    method: string,
    data: { [key: string]: any } = {},
    headers: { [key: string]: string } = {},
  ): Promise<any> {
    const baseURL = `${this.rootURL}/${PRIMETRUST_API_VERSION}`;

    return axios({
      method,
      baseURL,
      url,
      data,
    } as AxiosRequestConfig);
  }

  public async CreateUser(data: {
    email: string;
    name: string;
    password: string;
  }): Promise<ICreateUserResponse> {
    const endpoint = USERS_API_ENDPOINT;

    return this.request(endpoint, HTTP_POST_METHOD, data);
  }

  public async GetUsers(): Promise<IGetUsersResponse> {
    const endpoint = USERS_API_ENDPOINT;

    return this.request(endpoint, HTTP_GET_METHOD);
  }

  public async GetCurrentUser(): Promise<IGetCurrentUserResponse> {
    const endpoint = `${USERS_API_ENDPOINT}/current`;

    return this.request(endpoint, HTTP_GET_METHOD);
  }

  public async CreateAccount(
    account: ICreateAccountInterface,
  ): Promise<ICreateAccountResponse> {
    const endpoint = ACCOUNTS_API_ENDPOINT;

    return this.request(endpoint, HTTP_POST_METHOD, account);
  }

  public async GetAccounts(): Promise<IGetAccountsResponse> {
    const endpoint = ACCOUNTS_API_ENDPOINT;

    return this.request(endpoint, HTTP_GET_METHOD);
  }

  public async GetAccountFiatBalance(data: {
    account: string;
  }): Promise<IGetAccountFiatBalanceResponse> {
    const endpoint = `/account-cash-totals?account.id=${data.account}`;

    return this.request(endpoint, HTTP_GET_METHOD);
  }

  public async GetAccountCryptoBalance(data: {
    account: string;
  }): Promise<IGetAccountCryptoBalanceResponse> {
    const endpoint = `/account-asset-totals?account.id=${data.account}`;

    return this.request(endpoint, HTTP_GET_METHOD);
  }

  public async UploadDocument(document: {
    contactId: string;
    label: string;
    description: string;
    fileData: string;
  }): Promise<IUploadDocumentResponse> {
    const endpoint = `/uploaded-documents`;

    return this.request(endpoint, HTTP_POST_METHOD, document);
  }
}
