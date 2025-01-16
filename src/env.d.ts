// types.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    // 这里添加你需要的环境变量及其类型
    TEST_DOUBAO_URL: string;
    TEST_DOUBAO_API_KEY: string;
    TEST_DOUBAO_MODEL: string;
  }
}
