import { useSpring, animated } from "react-spring";

type Props = {
  isAdded: boolean;
};

function AnimatedAddedBlock({ isAdded }: Props) {
  const fade = useSpring({
    opacity: isAdded ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <animated.div
      style={{
        ...fade,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(0, 255, 0, 0.9)",
        transitionDuration: "150ms",
        transitionProperty: "all",
        borderRadius: "8px",
        padding: "20px",
        zIndex: 1,
        visibility: isAdded ? "visible" : "hidden",
      }}
    >
      Додано до кошика!
    </animated.div>
  );
}

export default AnimatedAddedBlock;
