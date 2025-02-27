const initializeAPI = async (app) => {
  app.post("/api/login", login);
};

const login = async (req, res) => {
  const { username, password } = req.body;

  req.log.info("Login request received");

  const answer = `
    <h1>Answer</h1>
    <p>Username: ${username}</p>
    <p>Password: ${password}</p>
  `;

  req.log.debug({ username }, "Answer sent");

  res.send(answer);
};

module.exports = { initializeAPI };