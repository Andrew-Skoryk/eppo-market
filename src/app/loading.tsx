import { Spinner } from "@nextui-org/spinner";

function Loading() {
  return (
    <Spinner
      classNames={{
        base: "h-52",
        wrapper: "mb-3",
      }}
      label="Завантаження..."
      size="lg"
    />
  );
}

export default Loading;
