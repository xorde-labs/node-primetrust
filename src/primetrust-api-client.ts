import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

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

const USER_ENTITY_TYPE = 'user';

const HTTP_POST_METHOD = 'post';

export class PrimeTrustAPIClient {
  public name: string;
  public version: string;
  public rootURL: string;
  private token: string;
  private options: {
    username: string;
    password: string;
    sandbox: boolean;
  };

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
    this.options = options;
  }

  private async request(config: AxiosRequestConfig): Promise<any> {
    try {
      this.token = this.token
        ? this.token
        : await this.getJWT(this.options.username, this.options.password);
      config.headers = { Authorization: `Bearer ${this.token}` };
      config.baseURL = `${this.rootURL}/${PRIMETRUST_API_VERSION}`;
      const response = await axios(config);

      return response.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(JSON.stringify(error.response.data));
    }
  }

  private async getJWT(username: string, password: string) {
    const url = `/auth/jwts`;
    const method = HTTP_POST_METHOD;
    const auth = {
      username,
      password,
    };
    const baseURL = `${this.rootURL}`;
    const response = await axios({ url, method, auth, baseURL });

    return response.data.token;
  }

  public async CreateUser(
    email: string,
    name: string,
    password: string,
  ): Promise<ICreateUserResponse> {
    const url = USERS_API_ENDPOINT;
    const method = HTTP_POST_METHOD;
    const data = {
      data: {
        type: USER_ENTITY_TYPE,
        attributes: { email, name, password },
      },
    };

    return this.request({ url, method, data });
  }

  public async GetUsers(): Promise<IGetUsersResponse> {
    const url = USERS_API_ENDPOINT;

    return this.request({ url });
  }

  public async GetCurrentUser(): Promise<IGetCurrentUserResponse> {
    const url = `${USERS_API_ENDPOINT}/current`;

    return this.request({ url });
  }

  public async CreateAccount(
    account: ICreateAccountInterface,
  ): Promise<ICreateAccountResponse> {
    const url = ACCOUNTS_API_ENDPOINT;
    const method = HTTP_POST_METHOD;
    const data = account;

    return this.request({ url, method, data });
  }

  public async GetAccounts(): Promise<IGetAccountsResponse> {
    const url = ACCOUNTS_API_ENDPOINT;

    return this.request({ url });
  }

  public async GetAccountFiatBalance(data: {
    account: string;
  }): Promise<IGetAccountFiatBalanceResponse> {
    const url = `/account-cash-totals?account.id=${data.account}`;

    return this.request({ url });
  }

  public async GetAccountCryptoBalance(data: {
    account: string;
  }): Promise<IGetAccountCryptoBalanceResponse> {
    const url = `/account-asset-totals?account.id=${data.account}`;

    return this.request({ url });
  }

  public async UploadDocument(document: {
    contactId: string;
    label: string;
    description: string;
    fileData: string;
  }): Promise<IUploadDocumentResponse> {
    const url = `/uploaded-documents`;
    const method = HTTP_POST_METHOD;
    const data = document;

    return this.request({ url, method, data });
  }
}
