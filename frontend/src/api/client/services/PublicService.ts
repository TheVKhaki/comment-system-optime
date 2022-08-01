/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Message } from "../models/Message";
import type { SocialGrowthResponse } from "../models/SocialGrowthResponse";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class PublicService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Greet
   * Greeting something.
   * @returns Message Successful Response
   * @throws ApiError
   */
  public getPublicGreet(): CancelablePromise<Message> {
    return this.httpRequest.request({
      method: "GET",
      url: "/api/v1/public/greet",
    });
  }

  /**
   * Social Growth
   * Shows social growth of the project.
   * @returns SocialGrowthResponse Successful Response
   * @throws ApiError
   */
  public getPublicSocialGrowth(): CancelablePromise<SocialGrowthResponse> {
    return this.httpRequest.request({
      method: "GET",
      url: "/api/v1/public/social-growth",
    });
  }
}
