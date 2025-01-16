// 目标: 调用 doubao LLM, 'hello' 并完全返回给客户端.
import { OpenAI } from 'openai';


const TEST_DOUBAO_URL = "https://ark.cn-beijing.volces.com/api/v3";
// const TEST_DOUBAO_API_KEY  在 .env 中.
// const TEST_DOUBAO_MODEL

async function hello() {
  const openai = new OpenAI({
    apiKey: process.env.TEST_DOUBAO_API_KEY!,
    baseURL: process.env.TEST_DOUBAO_URL!,
  });
  
  const messages = [
    { role: "user", content: "hello" },
  ] as any[];

  return openai.chat.completions.create({
    messages,
    model: process.env.TEST_DOUBAO_MODEL!,
  });
}

export async function GET(_request: Request) {
  const doubaoResp = await hello();
  // console.info('doubaoResp:', doubaoResp);

  // 这里返回 json 结构数据:
  return new Response(JSON.stringify(doubaoResp), {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
}
