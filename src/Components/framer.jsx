import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const MyComponent = () => {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#3cc3bc", "#3cc3bc", "rgb(230, 255, 0)"]
  );
  useEffect(() => {
    console.log(x.get());
  }, [x.get()]);

  return (
    <motion.div
      className="h-[40px] w-[200px] flex items-center p-2 rounded-[20px] "
      style={{ background }}
    >
      <motion.div
        className="h-[30px] w-[30px] bg-white rounded-full"
        drag="x"
        dragConstraints={{ left: 0, right: 150 }}
        style={{ x }}
      ></motion.div>
    </motion.div>
  );
};

export default MyComponent;
