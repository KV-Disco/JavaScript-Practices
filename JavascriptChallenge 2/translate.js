// translate()

function translate (str) {
  var arr = str.split('')
  for (var i = 0; i < str.length; i++) {
    if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', ' '].includes(arr[i]) === false) {
      arr[i] = arr[i] + 'o' + arr[i]
    }
  }
  str = arr.join('')
  return str
}

translate('Me salio Awesome')

function translate (str) {
  return str.replace(/[b-df-hj-mp-tx-z]/gi, '$&o$&')
}

translate('Me salio Awesome')
