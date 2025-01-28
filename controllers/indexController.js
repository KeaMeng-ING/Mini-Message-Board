const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const generateId = () => {
  return messages.length > 0 ? messages[messages.length - 1].id + 1 : 1;
};

module.exports = {
  home: function (req, res) {
    res.render("index", {
      title: "Mini Message Board",
      messages: messages,
    });
  },
  getForm: function (req, res) {
    res.render("form", {
      title: "Add a new message",
      message: "This is the new page!",
    });
  },
  postForm: function (req, res) {
    const { user, text } = req.body;
    messages.push({
      id: generateId(),
      user: user,
      text: text,
      added: new Date(),
    });
    res.redirect("/");
  },

  getMessage: function (req, res) {
    const messageId = req.params.id;
    const message = messages.find((message) => message.id == messageId);

    if (message) {
      res.render("message", {
        title: `Message #${messageId}`,
        message: message,
      });
    } else {
      res.status(404).send("Message not found");
    }
  },
};
