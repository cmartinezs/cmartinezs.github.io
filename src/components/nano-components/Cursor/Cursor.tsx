"use client";

import { motion } from "framer-motion";
import { cursorBlink } from "@/lib/animations";
import styles from "./Cursor.module.css";

export function Cursor() {
  return (
    <motion.span
      className={`terminal-cursor ${styles.cursor}`}
      variants={cursorBlink}
      animate="visible"
      aria-hidden="true"
    />
  );
}
