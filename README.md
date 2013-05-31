# connect-fonts-ubuntu

Ubuntu fontpack for [connect-fonts](https://github.com/shane-tomlinson/connect-fonts).

## Usage

1. Include [connect-fonts](https://github.com/shane-tomlinson/connect-fonts) in a node module.
```js
const font_middleware = require("connect-fonts");
```

2. Include the font packs that you want to serve.
```js
const font_pack  = require("connect-fonts-ubuntu");
```

3. Add a middleware by calling the `setup` function.
```js
    app.use(font_middleware.setup({
      fonts: [ font_pack ],
      allow_origin: "https://exampledomain.com"
    }));
```

4. Add a link tag to include the font CSS.
```html
<link href="/ubuntu-bold/fonts.css" type="text/css" rel="stylesheet"/ >
```

Multiple fonts from the family can be included by using a comma separated list of fonts:
```html
<link href="/ubuntu-bold,ubuntu-bolditalic,ubuntu-italic,ubuntu-light,ubuntu-lightitalic,ubuntu-medium,ubuntu-mediumitalic,ubuntu-regular/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available fonts:
* ubuntu-bold
* ubuntu-bolditalic
* ubuntu-italic
* ubuntu-light
* ubuntu-lightitalic
* ubuntu-medium
* ubuntu-mediumitalic
* ubuntu-regular

Locale-optimised font sets can be served by specifying the locale in the fonts.css URL.
```html
<link href="/latin/ubuntu-bold/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available subsets:
* latin
* en

5. Set your CSS up to use the new font by using the "Ubuntu" font-family.
```
    body {
      font-family: 'Ubuntu', 'sans-serif', 'serif';
    }
```

## Font Info
Ubuntu

* Description: The Ubuntu Font Family are libre fonts funded by Canonical Ltd on behalf of the Ubuntu project. The font design work and technical implementation is being undertaken by Dalton Maag. The typeface is sans-serif, uses OpenType features and is manually hinted for clarity on desktop and mobile computing screens.

The scope of the Ubuntu Font Family includes all the languages used by the various Ubuntu users around the world in tune with Ubuntu's philosophy which states that every user should be able to use their software in the language of their choice. The project is ongoing, and we expect the family will be extended to cover many written languages in the coming years.
* Copyright: Copyright 2011 Canonical Ltd.  Licensed under the Ubuntu Font Licence 1.0
* Trademark: Ubuntu and Canonical are registered trademarks of Canonical Ltd.
* Designer: Dalton Maag Ltd
* Designer URL: http://www.daltonmaag.com/ 
* Vendor: Dalton Maag Ltd
* Vendor URL: http://www.daltonmaag.com/

## Development Info
* Homepage: https://github.com/shane-tomlinson/connect-fonts-ubuntu
* Repo: https://github.com/shane-tomlinson/connect-fonts-ubuntu

## Author
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* https://github.com/shane-tomlinson
* https://github.com/stomlinson
* @shane_tomlinson


## License

Software: Licenced under version 2.0 of the MPL

  https://www.mozilla.org/MPL/

Fonts: Licensed under version 1.0 of the Ubuntu Font License

  http://font.ubuntu.com/ufl/ubuntu-font-licence-1.0.txt

