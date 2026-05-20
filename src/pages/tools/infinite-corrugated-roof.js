import React from 'react';
import { getTool } from '@site/src/data/tools';
import ToolPageDispatcher from '@site/src/components/Tools/ToolPageDispatcher';

export default function InfiniteCorrugatedRoofPage() {
  return <ToolPageDispatcher tool={getTool('infinite-corrugated-roof')} />;
}
