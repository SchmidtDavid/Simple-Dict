export async function API(baseUrl, term, headers, method = "GET") {
  console.log(`${baseUrl}${term}\n ${JSON.stringify(headers)}, ${method}`)
  const response = await fetch(`${baseUrl}${term}`, {
    method: method,
    headers: headers
  })
  const data = await response.json();
  return data;
}