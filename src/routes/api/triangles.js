export async function POST({ request }) {
  const payload = await request.json()
  const { number: x } = payload
  const s = '' + x
  const items = s.split('').map((element, i) => element.padEnd(i + 2, '0'))
  return {
    body: {
      items
    }
  }
}