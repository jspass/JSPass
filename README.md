![Logo](https://i.imgur.com/pvhixis.png)

JSPass is a free & open-source node.js password generator that is secure and easy to use. JSPass is CLI-based and can generate up to 100 passwords being a max length of 1000 characters.

# Pre-Install Configuration
Before installing JSPass, you must have the following dependencies:

`nodejs`
`npm`

Optional dependencies:

`git` (to download the source code)

# Installation
### Releases
Go to this repository's releases and download a .zip file, then extract it. We cannot recommend enough that you download the latest version.

The node modules that came with the release may be outdated, type ``npm outdated`` to check for any outdated packages. If there are any, type ``npm update --save/--save-dev`` to update them.

### Source code
Download the source code as a .zip file, then extract it anywhere. Alternatively, if you have git, you can type `git clone https://github.com/jspass/JSPass.git` to download the source code of JSPass.

The source code should include a .zip file named "node_modules.zip". Extract this .zip file into it's own folder.

The node modules that came with the source code may be outdated, type ``npm outdated`` to check for any outdated packages. If there are any, type ``npm update --save/--save-dev`` to update them.

# Usage
cd into the folder you downloaded JSPass and type ``node jspass.js`` to launch JSPass. 

- First, it should prompt you to enter the amount of characters you want your password(s) to have. 
  - Enter any number from 1-1000.
- Second, it should prompt you to enter the amount of passwords you want to generate. 
  - Enter any number from 1-100.
- Third, it should prompt you to specify the characters you want in your password(s) with letters (L=Letters,N=Numbers,S=Special; LNS is the default). This step is optional.

