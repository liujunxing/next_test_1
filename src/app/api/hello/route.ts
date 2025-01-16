// 目标1: 测试 'route.ts' 是否能正常运转.
// 目标2: .env 中的配置能正确加载. 当使用 nextjs 时, 其已经加载了...

let showed = false;
function _show_env() {
  if (showed) return; showed = true;
  console.info(`env TEST_DOUBAO_URL:`, process.env.TEST_DOUBAO_URL);
}

export async function GET(_request: Request) {
  _show_env();
  return new Response("Hello, next.js~!")
}
