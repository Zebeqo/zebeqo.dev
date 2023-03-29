import { TwitterIcon } from "@/ui/icon/24/TwitterIcon";
import { GithubIcon } from "@/ui/icon/24/GithubIcon";

export const IntroSection = () => (
  <section className="pt-4">
    <h1 className="mb-6 font-serif text-5xl font-bold">你好, 我是 Zebeqo 👋</h1>
    <div className="leading-7">
      <p>
        欢迎来到我的个人网站。我是一个前端工程师，主要使用 figma, react, next.js
        开发网页应用。
      </p>
      <p>我对 web 开发和视觉设计有着浓厚的兴趣，喜欢探索新的技术和工具。</p>
      <p>我目前对工作开放，如果想要合作或交流，请随时联系我。</p>
    </div>
    <div className="mt-4 flex space-x-4">
      <a href="https://twitter.com/zebeqo" target="_blank">
        <TwitterIcon className="h-6 w-6 text-neutral-9 hover:text-neutral-11" />
      </a>
      <a href="https://github.com/Zebeqo" target="_blank">
        <GithubIcon className="h-6 w-6 text-neutral-9 hover:text-neutral-11" />
      </a>
    </div>
  </section>
);
