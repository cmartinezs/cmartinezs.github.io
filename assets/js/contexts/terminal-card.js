export const initTerminalCardContext = () => {
  document.querySelectorAll(".terminal-card").forEach((terminal) => {
    const terminalAnimate = window.anime?.animate;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const body = terminal.querySelector(".terminal-body");

    if (!body) {
      return;
    }

    const lines = Array.from(body.querySelectorAll("p"));

    if (!lines.length) {
      return;
    }

    const source = lines.map((line) => {
      const segments = [];

      const collectSegments = (node, className = "") => {
        if (node.nodeType === Node.TEXT_NODE) {
          segments.push({ text: node.textContent || "", className });
          return;
        }

        if (!(node instanceof HTMLElement)) {
          return;
        }

        const nextClassName = [className, node.className].filter(Boolean).join(" ").trim();

        node.childNodes.forEach((child) => {
          collectSegments(child, nextClassName);
        });
      };

      line.childNodes.forEach((child) => {
        collectSegments(child);
      });

      return { line, segments };
    });

    body.setAttribute("aria-label", source.map(({ segments }) => segments.map((segment) => segment.text).join("")).join("\n"));

    const cursor = document.createElement("span");
    cursor.className = "terminal-cursor";
    cursor.setAttribute("aria-hidden", "true");

    const restoreContent = () => {
      source.forEach(({ line, segments }) => {
        line.replaceChildren();

        segments.forEach(({ text, className }) => {
          if (!className) {
            line.append(document.createTextNode(text));
            return;
          }

          const span = document.createElement("span");
          span.className = className;
          span.textContent = text;
          line.append(span);
        });
      });
    };

    const typeLine = (lineIndex = 0) => {
      const item = source[lineIndex];

      if (!item) {
        cursor.remove();
        return;
      }

      const { line, segments } = item;
      let segmentIndex = 0;
      let characterIndex = 0;
      let activeSpan;

      line.append(cursor);

      const typeNextCharacter = () => {
        const segment = segments[segmentIndex];

        if (!segment) {
          window.setTimeout(() => {
            typeLine(lineIndex + 1);
          }, 120);
          return;
        }

        if (characterIndex === 0 && segment.className) {
          activeSpan = document.createElement("span");
          activeSpan.className = segment.className;
          line.insertBefore(activeSpan, cursor);
        }

        const character = segment.text[characterIndex];

        if (character) {
          if (segment.className && activeSpan) {
            activeSpan.append(document.createTextNode(character));
          } else {
            line.insertBefore(document.createTextNode(character), cursor);
          }
        }

        characterIndex += 1;

        if (characterIndex >= segment.text.length) {
          segmentIndex += 1;
          characterIndex = 0;
          activeSpan = undefined;
        }

        if (segmentIndex < segments.length) {
          window.setTimeout(typeNextCharacter, character === " " ? 18 : 34);
          return;
        }

        window.setTimeout(() => {
          typeLine(lineIndex + 1);
        }, 120);
      };

      typeNextCharacter();
    };

    const startTyping = () => {
      if (terminal.dataset.typed === "true") {
        return;
      }

      terminal.dataset.typed = "true";

      if (reduceMotion) {
        restoreContent();
        return;
      }

      lines.forEach((line) => {
        line.replaceChildren();
      });

      if (terminalAnimate) {
        terminalAnimate(cursor, {
          opacity: [1, 0.15, 1],
          duration: 760,
          loop: true,
          ease: "linear",
        });

        terminalAnimate(terminal, {
          boxShadow: [
            "0 2rem 5rem rgba(0, 0, 0, 0.35)",
            "0 2rem 5rem rgba(0, 0, 0, 0.35), 0 0 2rem rgba(73, 210, 255, 0.16)",
            "0 2rem 5rem rgba(0, 0, 0, 0.35)",
          ],
          duration: 1200,
          ease: "outCubic",
        });
      }

      typeLine();
    };

    if (!reduceMotion) {
      lines.forEach((line) => {
        line.replaceChildren();
      });
    }

    if (!("IntersectionObserver" in window)) {
      startTyping();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        startTyping();
        observer.disconnect();
      });
    }, { threshold: 0.45 });

    observer.observe(terminal);
  });
};
