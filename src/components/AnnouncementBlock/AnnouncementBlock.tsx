import { Image as NextUIImage } from "@nextui-org/react";

type Props = {
  url: string;
};

function AnnouncementBlock({ url }: Props) {
  return (
    <div>
      <NextUIImage
        title="Анонс"
        src={url}
        alt="Анонс"
        width={700}
        loading="lazy"
        className="z-0"
      />
    </div>
  );
}

export default AnnouncementBlock;
