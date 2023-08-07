import { v2 } from "@google-cloud/translate";

process.env.GOOGLE_APPLICATION_CREDENTIALS =
  "./googleApplicationCredentials.json";

const { Translate } = v2;
const trans = new Translate();

trans
  .translate(
    `Your use of the word <span translate="no">'because'</span> in that sentence is incorrect.`,
    { format: "html", from: "en", to: "he" }
  )
  .then(([translations]) => {
    console.log(translations);
  });
