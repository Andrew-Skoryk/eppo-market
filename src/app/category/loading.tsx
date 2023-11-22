import { Spinner } from "@nextui-org/spinner";

function Loading() {
  return (
    <div className="flex justify-center w-full">
      <Spinner
        classNames={{
          base: "h-52",
          wrapper: "mb-3",
        }}
        label="Завантаження..."
        size="lg"
      />
    </div>
  );
}

export default Loading;
