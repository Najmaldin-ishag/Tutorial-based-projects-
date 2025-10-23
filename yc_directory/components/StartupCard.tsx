import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function StartupCard({ post }: { post: StartupTypeCard }) {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(post._createdAt)}</p>

        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{post.views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/startup/${post.postId}`}>
            <h3 className="text-16-medium line-clamp-1">{post.author.name}</h3>
          </Link>
        </div>

        <Link href={`/user/${post.author._id}`}>
          <Image
            src="https://placehold.co/40x40"
            alt="author"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        </Link>
      </div>

      <Link href={`/startup/${post.author?._id}`}>
        <p className="startup-card_desc">{post.description}</p>

        <img
          src={post.image}
          alt="startup image"
          className="startup-card_img"
        />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${post.category}`}>
          <p className="text-16-medium">{post.category}</p>
        </Link>

        <Button className="startup-card-btn" asChild>
          <Link href={`/startup/${post.postId}`}>View Pitch</Link>
        </Button>
      </div>
    </li>
  );
}

export default StartupCard;
