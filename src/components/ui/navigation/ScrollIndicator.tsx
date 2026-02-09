"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            aria-hidden="true"
        >
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
            >
                <motion.div
                    animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 h-1.5 rounded-full bg-accent-400"
                />
            </motion.div>
        </motion.div>
    );
}
