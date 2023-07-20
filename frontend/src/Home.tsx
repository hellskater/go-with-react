import { motion } from "framer-motion";
import Confetti from "react-confetti";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center items-center h-screen bg-black"
    >
      <Confetti
        numberOfPieces={500}
        recycle={true}
        colors={["#ff3e4d", "#ffac41", "#34c749", "#6640ff", "#00c9a7"]}
      />

      <motion.img
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        src="https://media0.giphy.com/media/l41lUiz8IlkSj91m0/giphy.gif"
        alt="meme gif"
        className="w-64 h-64"
      />

      <motion.h1
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className="text-6xl text-white font-bold mb-4 mt-20 animate-bounce"
      >
        YESSSSS!!!!!!!!
      </motion.h1>
      <motion.h1
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
        className="text-6xl text-white font-bold mb-4"
      >
        We can bundle
      </motion.h1>
      <motion.h1
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
        className="text-6xl text-white font-bold mb-4"
      >
        the react files
      </motion.h1>
      <motion.h1
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
        className="text-6xl text-white font-bold mb-4"
      >
        with Go in one binary
      </motion.h1>
    </motion.div>
  );
};

export default Home;
