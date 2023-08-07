# google-translate-demo

A (very minimal) demo of the capabilities of Google Translate's API.

## Setup

Copy your Google application credentials into `googleApplicationCredentials.json`.

Install the dependencies with `npm install`.

## Usage

Once you've done the [setup](#setup), you can run `npm start` to see the translator in action.

You can go into `index.ts` to edit the call to `trans.translate` or just take a look at the code.

## Notes

The `googleApplicationCredentials` file is in `.gitignore` so you don't push your Google application credentials to GitHub.
The `index.js` file is in `.gitignore` so you don't push the (possibly outdated) compiled output of your code to GitHub.
