export async function POST({ request }) {
  const payload = await request.json()
  const { number: x } = payload
  let items = [0]
  for (let i = 1; i <= x; i += 2) {
    items.push(i);
  }
  return {
    body: {
      items
    }
  }
}