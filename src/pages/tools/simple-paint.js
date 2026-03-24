import React from 'react';
import tools from '@site/src/data/tools';
import ToolPageDispatcher from '@site/src/components/Tools/ToolPageDispatcher';

export default function SimplePaintPage() {
  const tool = tools.find(t => t.id === 'simple-paint');
  return <ToolPageDispatcher tool={tool} />;
}
