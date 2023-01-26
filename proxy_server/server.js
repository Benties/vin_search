const express = require('express')
const app = express()
const cors = require('cors')
const google = require('googlethis')
const youtubesearchapi = require("youtube-search-api");

const PORT  = process.env.PORT || 5000

app.use(cors())

const options = {
    page: 0,
    safe: false, // Safe Search
    parse_ads: false, // If set to true sponsored results will be parsed
    additional_params: {
      // add additional parameters here, see https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters and https://www.seoquake.com/blog/google-search-param/
      hl: 'en'
    }
  }



  app.get('/google', async (req, res) => {
    // console.log(req.query.keyword)
    const response = await google.search(req.query.keyword, options);
    res.send(response)
  })


  app.get('/youtube', async (req, res) => {
    const response = await youtubesearchapi.GetListByKeyword
                      (req.query.keyword, [false],[1], [{type: "video"}])
    res.send(response)
  })

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
