"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export interface TerminalLine {
  role: "command" | "output";
  segments: Array<{ text: string; muted?: boolean }>;
}

interface TypedLine {
  role: "command" | "output";
  segments: Array<{ text: string; muted?: boolean }>;
  typed: string;
  done: boolean;
}

const CHAR_DELAY_CMD = 34;
const CHAR_DELAY_OUT = 14;
const LINE_PAUSE = 200;

export function useTerminalTyping(lines: TerminalLine[], active: boolean) {
  const [typedLines, setTypedLines] = useState<TypedLine[]>(() =>
    lines.map((l) => ({ ...l, typed: "", done: false }))
  );
  const activeRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stateRef = useRef({ currentLine: 0, currentChar: 0, running: false });

  const fullText = useCallback(
    (lineIndex: number): string =>
      lines[lineIndex]?.segments.map((s) => s.text).join("") ?? "",
    [lines]
  );

  useEffect(() => {
    if (!active || activeRef.current) return;
    activeRef.current = true;

    function tick() {
      const { currentLine, currentChar } = stateRef.current;
      if (currentLine >= lines.length) return;

      const line = lines[currentLine]!;
      const full = fullText(currentLine);
      const delay = line.role === "command" ? CHAR_DELAY_CMD : CHAR_DELAY_OUT;

      if (currentChar < full.length) {
        timerRef.current = setTimeout(() => {
          const nextChar = stateRef.current.currentChar + 1;
          stateRef.current.currentChar = nextChar;
          const typed = full.slice(0, nextChar);
          setTypedLines((prev) =>
            prev.map((l, i) =>
              i === stateRef.current.currentLine ? { ...l, typed } : l
            )
          );
          tick();
        }, delay);
      } else {
        timerRef.current = setTimeout(() => {
          const idx = stateRef.current.currentLine;
          setTypedLines((prev) =>
            prev.map((l, i) => (i === idx ? { ...l, done: true } : l))
          );
          stateRef.current.currentLine += 1;
          stateRef.current.currentChar = 0;
          tick();
        }, LINE_PAUSE);
      }
    }

    tick();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, lines, fullText]);

  const isComplete = typedLines.every((l) => l.done);

  return { typedLines, isComplete };
}
