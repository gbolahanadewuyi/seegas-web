"use client";

import { useState } from "react";

export function CopyNumber({ value, display }: { value: string; display: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="t-num inline-flex items-center gap-2 text-left font-semibold text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        } catch {
          setCopied(false);
        }
      }}
    >
      {display}
      <span className="text-sm font-normal text-muted no-underline" aria-live="polite">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
