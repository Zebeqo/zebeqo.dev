import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const components = {
  Image,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return (
    <article className="prose prose-olive md:prose-lg lg:prose-xl">
      <Component components={components} />
    </article>
  );
}
