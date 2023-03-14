import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const components = {
  Image,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return (
    <article className="prose prose-olive min-w-0 md:prose-lg lg:prose-xl lg:max-w-3xl 2xl:max-w-4xl">
      <Component components={components} />
    </article>
  );
}
