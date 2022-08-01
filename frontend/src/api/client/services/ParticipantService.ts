/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Message } from "../models/Message";
import type { ParticipantProtected } from "../models/ParticipantProtected";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class ParticipantService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Info
   * Get participant general info about accounts.
   * @returns ParticipantProtected Successful Response
   * @throws ApiError
   */
  public getParticipantInfo(): CancelablePromise<ParticipantProtected> {
    return this.httpRequest.request({
      method: "GET",
      url: "/api/v1/participant/info",
    });
  }

  /**
   * Authenticate Google Account
   * Set google account for participation.
   * @param token
   * @returns Message Successful Response
   * @throws ApiError
   */
  public postParticipantAuthenticateGoogleAccount(
    token: string
  ): CancelablePromise<Message> {
    return this.httpRequest.request({
      method: "POST",
      url: "/api/v1/participant/google",
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
