function gen_primes(n) {    
  // initialize the array first
  var numbers = [], primes = [], maxNumber = 100;

  for(var i = 2;i<=n;i++){
  numbers.push(i);   
  }

  while(numbers.length){
      primes.push(numbers.shift());
      numbers = numbers.filter(
          function(i){return i%primes[primes.length-1]!=0}
      );
  }
  return primes;
}

export async function POST({ request }) {
  const payload = await request.json()
  const { number: x } = payload
  let items = gen_primes(x)
  return {
    body: {
      items
    }
  }
}