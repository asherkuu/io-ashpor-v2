import auth0 from "lib/auth0";

const afterCallback = (req, res, session, state) => {
  session.user.customProperty = "foo";
  delete session.refreshToken;
  return session;
};

const callback = async (req, res) => {
  try {
    // await auth0.handleCallback(req, res, { redirectUri: "/" });
    // redirectTo >> 로그인 성공 또는 로그인 되었을때 리다이렉트 시켜준다.
    await auth0.handleCallback(req, res, { afterCallback });
  } catch (err) {
    console.error(err);
    res.status(err.status || 400).end(err.message);
  }
};

export default callback;
