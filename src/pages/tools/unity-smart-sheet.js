import React from 'react';
import tools from '@site/src/data/tools';
import ToolPageDispatcher from '@site/src/components/Tools/ToolPageDispatcher';

export default function UnitySmartSheetPage() {
  const tool = tools.find(t => t.id === 'unity-smart-sheet');
  return <ToolPageDispatcher tool={tool} />;
}
