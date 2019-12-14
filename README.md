![Logo](https://i.imgur.com/J2zetqf.png)

JSPass is a free & open-source node.js password generator that is secure and easy to use. JSPass is CLI-based and and generate up to 100 passwords being a max length of 1000 characters.

# Pre-Install Configuration
Before installing JSPass, you must have the following dependencies:

`nodejs`
`npm`

Optional dependencies:

`git` (to download the source code, we never post releases)

# Installation
### Source code

Download the source code as a .zip file, then extract it anywhere. Alternatively, if you have git, you can type `git clone https://github.com/jspass/JSPass.git` to download the source code of JSPass.

Now you need to add the node modules, cd into JSPass and type the following commands:
```
$ npm install chalk
$ npm install winston
```

# Usage
cd into JSPass and type ``node jspass.js`` to launch JSPass. 

- First, it should prompt you to enter the amount of characters you want your password(s) to have. 
  - Enter any number from 1-1000.
- Second, it should prompt you to enter the amount of passwords you want to generate. 
  - Enter any number from 1-100.

