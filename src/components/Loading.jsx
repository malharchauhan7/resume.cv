import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 backdrop-blur-sm bg-neutral-900/50 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-neutral-800 p-8 rounded-lg shadow-xl backdrop-blur-md"
      >
        <h2 className="text-2xl font-medium text-neutral-200 mb-2">Loading</h2>
        <div className="h-1 w-24 bg-neutral-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-neutral-400"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loading;
