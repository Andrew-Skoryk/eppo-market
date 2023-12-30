import { Image as NextUIImage } from "@nextui-org/react";

type Props = {
  url: string;
};

function AnnouncementBlock({ url }: Props) {
  return (
    <NextUIImage
      title="Анонс"
      src={url}
      alt="Анонс"
      width={800}
      loading="lazy"
      className="z-0"
    />
  );
}

export default AnnouncementBlock;
