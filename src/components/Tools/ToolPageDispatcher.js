import React from 'react';
import { TOOL_TYPES } from '@site/src/data/tools';
import UnityPackageView from './UnityPackageView';
import BlenderAddonView from './BlenderAddonView';

export default function ToolPageDispatcher({ tool }) {
  if (!tool) return <div>Tool not found.</div>;

  switch (tool.type) {
    case TOOL_TYPES.UNITY_PACKAGE:
      return <UnityPackageView tool={tool} />;
    case TOOL_TYPES.BLENDER_ADDON:
      return <BlenderAddonView tool={tool} />;
    default:
      return (
        <div style={{ padding: '4rem', textAlign: 'center' }}>
          <h1>Unknown Tool Type</h1>
          <p>The type "{tool.type}" is not supported yet.</p>
        </div>
      );
  }
}
