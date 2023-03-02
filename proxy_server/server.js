const express = require('express')
const app = express()
const cors = require('cors')
const google = require('googlethis')
const youtubesearchapi = require("youtube-search-api");
const fetch = require('node-fetch')
const PORT  = process.env.PORT || 5000
const environment = process.env.NODE_ENV || 'development'

if(environment === 'development'){
  app.use(cors())
}

const options = {
    page: 0,
    safe: false, // Safe Search
    parse_ads: false, // If set to true sponsored results will be parsed
    additional_params: {
      hl: 'en'
    }
  }



  app.get(`/vin/:id`, async (req, res) => {
    const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinextended/${req.params.id}?format=json`)
    const data = await response.json()
    if(data.Results[4].Value.includes('Manufacturer is not registered with NHTS')){
      res.send({err: 'err'})
    } else {
      res.send(data)
    }
  })

  app.get('/google', async (req, res) => {
    const response = await google.image(req.query.keyword, options);
    res.send(response)
  })


  app.get('/youtube', async (req, res) => {
    const response = await youtubesearchapi.GetListByKeyword
                      (req.query.keyword, [false],[1], [{type: "video"}])
    res.send(response)
  })

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
