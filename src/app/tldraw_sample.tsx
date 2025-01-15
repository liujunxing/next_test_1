'use client';

import dynamic from 'next/dynamic';
import { useCallback } from 'react';
import { TLComponents } from 'tldraw';
import 'tldraw/tldraw.css';

const Tldraw = dynamic(async () => (await import('tldraw')).Tldraw, { ssr: false });

/*
.tldraw__editor {
    position: absolute;
    inset: 0;
    overflow: hidden;
    overscroll-behavior: none;
    touch-action: none;
}
 */

export function TldrawSample() {
  return (
    <div className="tldraw__editor" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <Tldraw persistenceKey='tldraw-make-real'
      />
    </div>
  );
}
