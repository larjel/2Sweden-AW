const express = require('express')
const router = express.Router()
const axios = require('axios')

const rome2RioKey = process.env.ROME_2_RIO_KEY
const rome2RioGeocodeBaseUrl = `http://free.rome2rio.com/api/1.4/json/Geocode?key=${rome2RioKey}`
const rome2RioSearchBaseUrl = `http://free.rome2rio.com/api/1.4/json/Search?key=${rome2RioKey}`
const rome2RioAutocompleteBaseUrl = `http://free.rome2rio.com/api/1.4/json/Autocomplete?key=${rome2RioKey}`

//----------------------------------------------------------------------------
// Make a HTTP GET-Request
function httpGetRequest(url, res) {
  axios
    .get(url)
    .then(response => {
      console.log('axios repsonse => ', response.data)
      res.json(response.data)
    })
    .catch(error => {
      console.log(error)
      res.status(500).send('Error from external API')
    })
}

//----------------------------------------------------------------------------
router.get('/test', (req, res) => {
  console.log('query params', req.query)

  // Send back the same query params
  // from the request as a response
  res.json(req.query)
})

//----------------------------------------------------------------------------
router.get('/newUser/:username', (req, res) => {
  const username = req.params.username
  console.log('req.params.username', username)
  /*
    Here should a new user be stored in the data base
    */
  res.send(`Welcome ${username}`)
})

//----------------------------------------------------------------------------
router.post('/getLocations', (req, res) => {
  const place = req.body.place

  const url = `${rome2RioGeocodeBaseUrl}&query=${place}`

  httpGetRequest(url, res);
})

//----------------------------------------------------------------------------
// Rome2Rio Search API Call
// See request info here: https://www.rome2rio.com/documentation/1-4/search/
//----------------------------------------------------------------------------
router.post('/getSearchResults', (req, res) => {
  const fromPlace = req.body.fromPlace
  const toPlace = req.body.toPlace
  const languageCode = req.body.languageCode // ISO 639-1
  const currencyCode = req.body.currencyCode // ISO 4217
  const extraParams = req.body.extraParams // Ex. '&noBikeshare&noRideshare'

  let url = `${rome2RioSearchBaseUrl}&oName=${fromPlace}&dName=${toPlace}&currencyCode=${currencyCode}&languageCode=${languageCode}`

  if (extraParams) {
    url += extraParams
  }

  console.log('Request: ' + url)

  httpGetRequest(url, res);
})

//----------------------------------------------------------------------------
// Rome2Rio Autocomplete API Call
// See request info here: https://www.rome2rio.com/documentation/1-4/autocomplete/
//----------------------------------------------------------------------------
router.post('/getAutocomplete', (req, res) => {
  const textToAutocomplete = req.body.textToAutocomplete

  const url = `${rome2RioAutocompleteBaseUrl}&query=${textToAutocomplete}`

  console.log('Request: ' + url)

  httpGetRequest(url, res);
})

module.exports = router
