type APIParmas = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: object;
  baseUrl?: string;
};
export default function callAPI<Response>(
  path: string,
  { method = "GET", baseUrl = "/api", body }: APIParmas = {}
): Promise<Response> {
  return fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  }).then((res) => res.json());
}
