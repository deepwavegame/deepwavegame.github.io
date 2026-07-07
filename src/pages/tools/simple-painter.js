import React from 'react';
import { getTool } from '@site/src/data/tools';
import ToolPage from '@site/src/components/product';

export default function SimplePainterPage() {
  return <ToolPage tool={getTool('simple-painter')} />;
}
