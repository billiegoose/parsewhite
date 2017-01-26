<!-- TITLE/ -->

<h1>parsewhite</h1>

<!-- /TITLE -->


<!-- BADGES/ -->



<!-- /BADGES -->


<!-- DESCRIPTION/ -->

A *streaming* whitespace parser for `cu`.

I'd like to start by making the perfect parser:

- parse in parallel (multiple cores)
- parse concurrently (async file I/O)
- parse on file save (watch a file directory)

FootNote: I originally wanted to piggy-back off Gulp, but neither Gulp v3 nor v4
had fast enough recompile times. (6s and 2.5s respectively)

Noooooowwww we're talking. I think we're in the 100ms response time. (Using the *sane* file watcher. Aptly named.)

<!-- /DESCRIPTION -->


## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

Then in the terminal, run:

```sh
npm install parsewhite --save
```

## Tests

First clone this repository to get the source code. Then in the topmost repo
directory run:

```sh
npm install
npm test
```

<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; William Hilton</li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/Unlicense.html">The Unlicense</a></li></ul>

<!-- /LICENSE -->


_Parts of this file are based on [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_

_README.md (and other files) are maintained using [mos](https://github.com/mosjs/mos) and [projectz](https://github.com/bevry/projectz)_
