const express = require('express');
const ImageRouter = express.Router();
const FB = require('fb');
const config = require('../config/index');

const fb = new FB.Facebook({});
fb.options({version: 'v6.0'});
fb.setAccessToken(config.mToken);

/**
 * Route serving access form.
 * @name get/access
 * @function
 * @inner
 * @returns {Express Json}
 */
ImageRouter.get('/access', (req, res) => {
  fb.api(
    `/oauth/access_token?grant_type=fb_exchange_token&client_id=${config.clientId}&client_secret=${config.appSecret}&fb_exchange_token=${config.mToken}`,
    'GET',
    function(response) {
      if(response.error) {
        return res.send(response.error);
      }
      return res.send(response);
    }
  );
})

/**
 * Route serving access form.
 * @name get/access
 * @function
 * @inner
 * @param {ArrayBuffer image}
 * @returns {Express Json}
 */
ImageRouter.post('/', (req, res) => {
  const { data, name, mimetype } = req.files.image;
  fb.api(
    `/${config.adAccount}/adimages`,
    'POST',
    {source: { value: data, options: { filename: name, contentType: mimetype } }},
    function(response) {
      if(response.error) {
        return res.send(err);
      }
      return res.send(response);
    }
  );
});

/**
 * Route serving access form.
 * @name get/
 * @function
 * @inner
 * @returns {Express Json}
 */
ImageRouter.get('/', (req, res) => {
  fb.api(
    `/${config.adAccount}/adimages`,
    'GET',
    function(response) {
      if(response.error) {
        return res.send(response.error);
      }
      return res.send(response);
    }
  );
});

/**
 * Route serving access form.
 * @name get/access
 * @function
 * @inner
 * @param {String hash}
 * @returns {Express Json}
 */
ImageRouter.delete('/', (req, res) => {
  const { hash } = req.body;
  fb.api(
    `/${config.adAccount}/adimages`,
    'DELETE',
    { hash: hash },
    function(response) {
      if(response.error) {
        return res.send(response.error);
      }
      return res.send(response);
    }
  );
})

module.exports = ImageRouter;