import { HttpResponse } from "../types/Http";

export function ok(body?: Record<string, any>): HttpResponse {
  return {
    statusCode: 201,
  };
}

export function created(body?: Record<string, any>): HttpResponse {
  return {
    statusCode: 201,
  };
}

export function badRequest(body?: Record<string, any>): HttpResponse {
  return {
    statusCode: 400,
  };
}
