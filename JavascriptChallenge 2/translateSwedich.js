// translate()

function translate (text) {
  var dictionary = {
    'merry': 'god',
    'christmas': 'jul',
    'and': 'och',
    'happy': 'gott',
    'new': 'nytt',
    'year': 'år'
  }
  var translatedText = text
  var regExpWorl

  for (word in dictionary) {
    regExpWorl = new RegExp(word, 'g')
    translatedText = translatedText.replace(regExpWorl, dictionary[word])
  }
  return translatedText
}

translate('Merry christmas and happy new year')
