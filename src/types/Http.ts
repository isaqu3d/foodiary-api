export type HttpRequest = {
  body: Record<string, any>;
  queryParameters: Record<string, string>;
  params: Record<string, any>;
};

export type HttpResponse = {
  statusCode: number;
  body?: Record<string, any>;
};
