import React from 'react';
import { getTool } from '@site/src/data/tools';
import ToolPageDispatcher from '@site/src/components/Tools/ToolPageDispatcher';

export default function SimplePainterPage() {
  return <ToolPageDispatcher tool={getTool('simple-painter')} />;
}
