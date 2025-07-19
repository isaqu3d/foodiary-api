export function handler(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: "Hello, World!",
    }),
  };
}
