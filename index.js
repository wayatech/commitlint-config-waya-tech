module.exports = {
  extends: [],
  plugins: [
    {
      rules: {
        "type-contains-gitmoji": ({ header }) => {
          const emojis = header.trim()?.split(" ")[0];
          const encodedEmojis = encodeURI(emojis);
          return [
            encodedEmojis?.match(/(%[a-zA-Z0-9]{2})+/),
            "Type must contains only gitmojis https://gitmoji.dev",
          ];
        },
        "subject-begin-with-redmine-issue": ({ header }) => {
          const subject = header?.split(" ")[1];
          return [
            subject?.match(/^#\d+/),
            "Subject must begin by a Redmine issue ex : #1234",
          ];
        },
      },
    },
  ],
  rules: {
    "type-contains-gitmoji": [2, "always"],
    "subject-begin-with-redmine-issue": [2, "always"],
  },
};
