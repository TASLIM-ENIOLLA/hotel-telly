/** @type {import('next').NextConfig} */

const dev = process.env.NODE_ENV === "development";

module.exports = {
  env: {
    BASE_URL: dev ? "http://localhost:3000" : "",

    GMAIL_ADDRESS: "musaazeezd1st@gmail.com",
    GMAIL_APP_PASSWORD: "wnmdgbzjaqzvwldw",
  }
}
