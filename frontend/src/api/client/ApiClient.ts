/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from "./core/BaseHttpRequest";
import type { OpenAPIConfig } from "./core/OpenAPI";
import { AxiosHttpRequest } from "./core/AxiosHttpRequest";

import { LoginService } from "./services/LoginService";
import { ParticipantService } from "./services/ParticipantService";
import { PublicService } from "./services/PublicService";

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ApiClient {
  public readonly login: LoginService;
  public readonly participant: ParticipantService;
  public readonly public: PublicService;

  public readonly request: BaseHttpRequest;

  constructor(
    config?: Partial<OpenAPIConfig>,
    HttpRequest: HttpRequestConstructor = AxiosHttpRequest
  ) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? "",
      VERSION: config?.VERSION ?? "0.1.0",
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? "include",
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.login = new LoginService(this.request);
    this.participant = new ParticipantService(this.request);
    this.public = new PublicService(this.request);
  }
}
