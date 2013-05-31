const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // Package info
  "package": {
    "name": "connect-fonts-ubuntu",
    "homepage": "https://github.com/shane-tomlinson/connect-fonts-ubuntu",
    "repourl": "https://github.com/shane-tomlinson/connect-fonts-ubuntu",
    "bugsurl": false
  },
  
  // Package author info
  "author": {
    "name": "Shane Tomlinson",
    "emails": "shane@shanetomlinson.com,stomlinson@mozilla.com,set117@yahoo.com",
    "urls": "https://shanetomlinson.com",
    "githubs": "https://github.com/shane-tomlinson,https://github.com/stomlinson",
    "twitter": "@shane_tomlinson"
  },
  
  // package license info
  "license": {
    "name": "Ubuntu Font License",
    "version": "1.0",
    "abbreviation": "UFL-1.0",
    "url": "http://font.ubuntu.com/ufl/ubuntu-font-licence-1.0.txt",
    "text": "-------------------------------\nUBUNTU FONT LICENCE Version 1.0\n-------------------------------\n\nPREAMBLE\nThis licence allows the licensed fonts to be used, studied, modified and\nredistributed freely. The fonts, including any derivative works, can be\nbundled, embedded, and redistributed provided the terms of this licence\nare met. The fonts and derivatives, however, cannot be released under\nany other licence. The requirement for fonts to remain under this\nlicence does not require any document created using the fonts or their\nderivatives to be published under this licence, as long as the primary\npurpose of the document is not to be a vehicle for the distribution of\nthe fonts.\n\nDEFINITIONS\n\"Font Software\" refers to the set of files released by the Copyright\nHolder(s) under this licence and clearly marked as such. This may\ninclude source files, build scripts and documentation.\n\n\"Original Version\" refers to the collection of Font Software components\nas received under this licence.\n\n\"Modified Version\" refers to any derivative made by adding to, deleting,\nor substituting -- in part or in whole -- any of the components of the\nOriginal Version, by changing formats or by porting the Font Software to\na new environment.\n\n\"Copyright Holder(s)\" refers to all individuals and companies who have a\ncopyright ownership of the Font Software.\n\n\"Substantially Changed\" refers to Modified Versions which can be easily\nidentified as dissimilar to the Font Software by users of the Font\nSoftware comparing the Original Version with the Modified Version.\n\nTo \"Propagate\" a work means to do anything with it that, without\npermission, would make you directly or secondarily liable for\ninfringement under applicable copyright law, except executing it on a\ncomputer or modifying a private copy. Propagation includes copying,\ndistribution (with or without modification and with or without charging\na redistribution fee), making available to the public, and in some\ncountries other activities as well.\n\nPERMISSION & CONDITIONS\nThis licence does not grant any rights under trademark law and all such\nrights are reserved.\n\nPermission is hereby granted, free of charge, to any person obtaining a\ncopy of the Font Software, to propagate the Font Software, subject to\nthe below conditions:\n\n1) Each copy of the Font Software must contain the above copyright\nnotice and this licence. These can be included either as stand-alone\ntext files, human-readable headers or in the appropriate machine-\nreadable metadata fields within text or binary files as long as those\nfields can be easily viewed by the user.\n\n2) The font name complies with the following:\n(a) The Original Version must retain its name, unmodified.\n(b) Modified Versions which are Substantially Changed must be renamed to\navoid use of the name of the Original Version or similar names entirely.\n(c) Modified Versions which are not Substantially Changed must be\nrenamed to both (i) retain the name of the Original Version and (ii) add\nadditional naming elements to distinguish the Modified Version from the\nOriginal Version. The name of such Modified Versions must be the name of\nthe Original Version, with \"derivative X\" where X represents the name of\nthe new work, appended to that name.\n\n3) The name(s) of the Copyright Holder(s) and any contributor to the\nFont Software shall not be used to promote, endorse or advertise any\nModified Version, except (i) as required by this licence, (ii) to\nacknowledge the contribution(s) of the Copyright Holder(s) or (iii) with\ntheir explicit written permission.\n\n4) The Font Software, modified or unmodified, in part or in whole, must\nbe distributed entirely under this licence, and must not be distributed\nunder any other licence. The requirement for fonts to remain under this\nlicence does not affect any document created using the Font Software,\nexcept any version of the Font Software extracted from a document\ncreated using the Font Software may only be distributed under this\nlicence.\n\nTERMINATION\nThis licence becomes null and void if any of the above conditions are\nnot met.\n\nDISCLAIMER\nTHE FONT SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF\nCOPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE\nCOPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\nINCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL\nDAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\nFROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER\nDEALINGS IN THE FONT SOFTWARE.\n"
  },

  // Common font information
  "font_common": {
    "names": "ubuntu-bold,ubuntu-bolditalic,ubuntu-italic,ubuntu-light,ubuntu-lightitalic,ubuntu-medium,ubuntu-mediumitalic,ubuntu-regular",
    "description": "The Ubuntu Font Family are libre fonts funded by Canonical Ltd on behalf of the Ubuntu project. The font design work and technical implementation is being undertaken by Dalton Maag. The typeface is sans-serif, uses OpenType features and is manually hinted for clarity on desktop and mobile computing screens.\r\n\r\nThe scope of the Ubuntu Font Family includes all the languages used by the various Ubuntu users around the world in tune with Ubuntu's philosophy which states that every user should be able to use their software in the language of their choice. The project is ongoing, and we expect the family will be extended to cover many written languages in the coming years.",
    "family": "Ubuntu",
    "copyright": "Copyright 2011 Canonical Ltd.  Licensed under the Ubuntu Font Licence 1.0",
    "trademark": "Ubuntu and Canonical are registered trademarks of Canonical Ltd.",
    "manufacturer": "Dalton Maag Ltd",
    "url_vendor": "http://www.daltonmaag.com/",
    "designer": "Dalton Maag Ltd",
    "url_designer": "http://www.daltonmaag.com/"
  },


  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": { 
  },

  // what font types are enabled and what are the extensions of
  // the font files.
  //
  // valid types are embedded-opentype, woff, truetype, svg
  "enabled-types": [ "eot", "woff", "ttf", "svg" ],

  // The fonts. The name of the font must be the same as the font
  // in the fonts directory.
  "fonts": {
      "ubuntu-bold": {
        "fontFamily": "Ubuntu",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Ubuntu Bold", "Ubuntu-Bold" ]
      },
      "ubuntu-bolditalic": {
        "fontFamily": "Ubuntu",
        "fontStyle": "italic",
        "fontWeight": "700",
        "local": [ "Ubuntu Bold Italic", "Ubuntu-BoldItalic" ]
      },
      "ubuntu-italic": {
        "fontFamily": "Ubuntu",
        "fontStyle": "italic",
        "fontWeight": "400",
        "local": [ "Ubuntu Italic", "Ubuntu-Italic" ]
      },
      "ubuntu-light": {
        "fontFamily": "Ubuntu",
        "fontStyle": "normal",
        "fontWeight": "300",
        "local": [ "Ubuntu Light", "Ubuntu-Light" ]
      },
      "ubuntu-lightitalic": {
        "fontFamily": "Ubuntu",
        "fontStyle": "italic",
        "fontWeight": "300",
        "local": [ "Ubuntu Light Italic", "Ubuntu-LightItalic" ]
      },
      "ubuntu-medium": {
        "fontFamily": "Ubuntu",
        "fontStyle": "normal",
        "fontWeight": "500",
        "local": [ "Ubuntu Medium", "Ubuntu-Medium" ]
      },
      "ubuntu-mediumitalic": {
        "fontFamily": "Ubuntu",
        "fontStyle": "italic",
        "fontWeight": "500",
        "local": [ "Ubuntu Medium Italic", "Ubuntu-MediumItalic" ]
      },
      "ubuntu-regular": {
        "fontFamily": "Ubuntu",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Ubuntu", "Ubuntu" ]
      }
  }
};
