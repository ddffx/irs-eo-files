# irs-eo-files [![Build Status](https://travis-ci.org/ddffx/irs-eo-files.svg?branch=master)](https://travis-ci.org/ddffx/irs-eo-files)

> IRS EO file API

## Develop
  - Install Docker & Docker Compose
  - Clone the repo
  ```
  git clone
  ```
  - Get inside the directory `cd irs-eo-files`
  
  - Install required components `docker-compose run --rm app yarn install`
  - Run tests `docker-compose run --rm app npm test`

## Usage

```js
const irsEoFiles = require('irs-eo-files');

```


## API

### irsEoFiles(region, callback)

#### region

Type: `string` optional

CA
#### callback
Type: `function` 



## License

MIT © [ddffx](http://twitter.com/ddffx)
