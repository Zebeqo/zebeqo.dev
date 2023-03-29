import { NewestPostCardList } from "@/app/posts/NewestPostCardList";
import Image from "next/image";

export function FeatureSection() {
  return (
    <section className="flex justify-between">
      <div>
        <h2 className="font-serif text-4xl font-bold text-primary-11">
          精选文章
        </h2>
        <div className="mt-6">
          <NewestPostCardList />
        </div>
      </div>
      <div>
        <Image
          src={
            "https://em-content.zobj.net/source/microsoft-teams/337/writing-hand_270d-fe0f.png"
          }
          alt={"writing-hand"}
          width={256}
          height={256}
        />
      </div>
    </section>
  );
}
