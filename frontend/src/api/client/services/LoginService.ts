/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Message } from "../models/Message";
import type { TelegramAuthorization } from "../models/TelegramAuthorization";
import type { Token } from "../models/Token";
import type { WalletSignatureRequest } from "../models/WalletSignatureRequest";
import type { WalletSigninStart } from "../models/WalletSigninStart";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class LoginService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Start Ethereum Wallet Verification Process
   * Starts wallet authentication process by providing signature message.
   * @returns WalletSigninStart Successful Response
   * @throws ApiError
   */
  public postLoginStartEthereumWalletVerificationProcess(): CancelablePromise<WalletSigninStart> {
    return this.httpRequest.request({
      method: "POST",
      url: "/api/v1/login/eth-wallet/start",
    });
  }

  /**
   * Verify Ethereum Signature
   * Verify one of wallet addresses.
   * @param requestBody
   * @returns Message Successful Response
   * @throws ApiError
   */
  public postLoginVerifyEthereumSignature(
    requestBody: WalletSignatureRequest
  ): CancelablePromise<Message> {
    return this.httpRequest.request({
      method: "POST",
      url: "/api/v1/login/eth-wallet/verify",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Login Telegram
   * Authenticate using Telegram data and create access token to participate.
   * @param requestBody
   * @returns Token Successful Response
   * @throws ApiError
   */
  public postLoginLoginTelegram(
    requestBody: TelegramAuthorization
  ): CancelablePromise<Token> {
    return this.httpRequest.request({
      method: "POST",
      url: "/api/v1/login/telegram",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
