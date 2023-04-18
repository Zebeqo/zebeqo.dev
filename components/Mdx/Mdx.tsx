/* eslint-disable jsx-a11y/alt-text */
import { useMDXComponent } from "next-contentlayer/hooks";
import MdxImage from "@/components/Mdx/MdxImage";
import Link from "@/components/Mdx/MdxLink";
import Image from "next/image";
import { Tweet, type TweetProps, type TweetComponents } from "react-tweet";

const tweetComponents: TweetComponents = {
  AvatarImg: (props) => <Image {...props} />,
  MediaImg: (props) => <Image {...props} fill unoptimized />,
};

const components = {
  Image: MdxImage,
  a: Link,
  Tweet: (props: TweetProps) => (
    <div className="not-prose flex flex-col items-center">
      <Tweet {...props} components={tweetComponents} />
    </div>
  ),
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return (
    <article className="prose prose-olive min-w-0 font-serif md:prose-lg lg:max-w-3xl">
      <Component components={components} />
    </article>
  );
}
