import React from 'react';
import { getTool } from '@site/src/data/tools';
import ToolPage from '@site/src/components/product';

export default function BlenderHorrorExporterPage() {
  return <ToolPage tool={getTool('blender-horror-exporter')} />;
}
