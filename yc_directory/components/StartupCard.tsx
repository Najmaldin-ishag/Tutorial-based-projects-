import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author: Author };

function StartupCard({ post }: { post: StartupTypeCard }) {
  const { views, _id, author, description, category } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(post._createdAt)}</p>

        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <h3 className="text-16-medium line-clamp-1">{author?.name}</h3>
          </Link>
        </div>

        <Link href={`/user/${author?._id}`}>
          <Image
            src="https://placehold.co/40x40"
            alt="author"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>

        <img
          src={post.image}
          alt="startup image"
          className="startup-card_img"
        />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLocaleLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>

        <Button className="startup-card-btn" asChild>
          <Link href={`/startup/${_id}`}>View Pitch</Link>
        </Button>
      </div>
    </li>
  );
}

export default StartupCard;
