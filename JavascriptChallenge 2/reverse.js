// reverse()
// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".

function reverse (str) {
  return str.split('').reverse().join('')
}

reverse('The KV-2 its a force of nature.')
