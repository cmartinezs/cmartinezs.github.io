"use client";

import { Cursor } from "@/components/nano-components/Cursor";
import { useTerminalTyping, type TerminalLine } from "@/hooks/useTerminalTyping";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const TERMINAL_LINES: TerminalLine[] = [
  {
    role: "command",
    segments: [{ text: "$ ", muted: true }, { text: "./mvnw test" }],
  },
  {
    role: "output",
    segments: [{ text: "[INFO] Java 21 / Spring Boot: 54 tests, 0 failures" }],
  },
  {
    role: "command",
    segments: [{ text: "$ ", muted: true }, { text: "curl -i -X POST http://localhost:8080/api/orders" }],
  },
  {
    role: "output",
    segments: [{ text: "HTTP/1.1 201 Created" }],
  },
  {
    role: "command",
    segments: [{ text: "$ ", muted: true }, { text: "docker compose up -d && git push origin feat/order-flow" }],
  },
  {
    role: "output",
    segments: [{ text: "[+] api healthy on :8080 · GitHub Actions CI started" }],
  },
];

export function TerminalCard() {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.45,
    once: true,
  });
  const { typedLines, isComplete } = useTerminalTyping(TERMINAL_LINES, isIntersecting);

  return (
    <div ref={ref} className="terminal-card">
      <div className="terminal-top">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
      </div>
      <div className="terminal-body">
        {typedLines.map((line, i) => (
          <p key={i} className={i === typedLines.length - 1 ? "mb-0" : undefined}>
            {line.role === "command" ? (
              <>
                <span className="muted">$ </span>
                {line.typed.replace(/^\$ /, "")}
              </>
            ) : (
              line.typed
            )}
            {i === typedLines.findIndex((l) => !l.done) && !isComplete && <Cursor />}
          </p>
        ))}
      </div>
    </div>
  );
}
