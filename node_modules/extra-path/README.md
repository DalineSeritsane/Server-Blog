Useful additions to inbuilt [path] module.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-path),
🌐 [Web](https://www.npmjs.com/package/extra-path.web),
📜 [Files](https://unpkg.com/extra-path/),
📰 [Docs](https://nodef.github.io/extra-path/),
📘 [Wiki](https://github.com/nodef/extra-bit/wiki/).

This package is available in *Node.js* and *Web* formats. To use it on the web,
simply use the `extra_path` global variable after loading with a `<script>`
tag from the [jsDelivr CDN].

[path]: https://nodejs.org/api/path.html
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-path.web/index.js

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

<br>

```javascript
const xpath = require('extra-path');

function main() {
  xpath.filename('/home/user/file+name.txt');
  // → 'file+name'

  xpath.symbolname('/home/user/file+name.txt');
  // → 'file_name'

  xpath.keywordname('/home/user/file+name.txt');
  // → 'file-name'
}
main();
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [filename] | Get file name without extension. |
| [symbolname] | Get symbol name for file. |
| [keywordname] | Get keyword name for file. |

<br>
<br>


[![](https://img.youtube.com/vi/8oXhShuIjrQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=8oXhShuIjrQ)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
[![DOI](https://zenodo.org/badge/179137165.svg)](https://zenodo.org/badge/latestdoi/179137165)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-path/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-path?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9fd9e76b2bcd8ebf83bc/test_coverage)](https://codeclimate.com/github/nodef/extra-path/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/9fd9e76b2bcd8ebf83bc/maintainability)](https://codeclimate.com/github/nodef/extra-path/maintainability)


[filename]: https://github.com/nodef/extra-path/wiki/filename
[symbolname]: https://github.com/nodef/extra-path/wiki/symbolname
[keywordname]: https://github.com/nodef/extra-path/wiki/keywordname
