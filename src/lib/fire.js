export async function fire(url, payload) {
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(payload),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  const responseBody = await response.json()
  return {
    data: responseBody,
    response
  }
}