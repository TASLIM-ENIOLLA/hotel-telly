import { NextConfig } from "next";

export default {
  reactCompiler: true,
  env: {
    CMS_BASEURL: "http://localhost:1337/api",
  }
} satisfies NextConfig;
