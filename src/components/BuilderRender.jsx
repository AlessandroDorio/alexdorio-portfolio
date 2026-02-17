jsx
import { BuilderComponent, builder } from '@builder.io/react';

builder.init(import.meta.env.BUILDER_API_PUBLIC_KEY);

export default function BuilderRender({ model }) {
  return <BuilderComponent model={model} />;
}
