'use client';

import { useState, useCallback } from "react"

// 测试纯的 api 调用, 确定 route 可正常运转.
export function TestHelloApi() {
  const [resp, setResp] = useState('');
  const handleClick = useCallback(async () => {
    const response = await fetch('/api/hello');
    const text = await response.text();
    console.info(`test /api/hello`, { response, text });
    setResp(text);
  }, []);
  const handleClick2 = useCallback(async () => {
    const response = await fetch('/api/doubao/hello');
    const json = await response.json()
    console.info(`test /api/hello`, { response, json });
    setResp(JSON.stringify(json, undefined, 2));
  }, []);

  return (
    <div>
      <div>
        <button onClick={handleClick}>Call '/api/hello'</button>
        <button onClick={handleClick2}>Call '/api/doubao/hello'</button>
      </div>
      <div>Response: 
        <pre>{resp}</pre>
      </div>
    </div>
  )
}
