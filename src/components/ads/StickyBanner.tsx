"use client";

import { useState } from "react";
import { AdBannerFrame } from "./AdBannerFrame";

/**
 * 320×50 Sticky 顶部粘性横幅（lesson_07 4.3/4.4——收入主力，实测 CPM $3.25 占全站约一半）。
 * sticky top-20 z-20 + mx-auto max-w-4xl 限宽居中（桌面两侧不出横贯空白框）；
 * ✕ 可关闭（dismissed state + return null，合规"可识别可关闭"）；全设备显示不加 md:hidden。
 */
export function StickyBanner() {
  const [dismissed, setDismissed] = useState(false);
  const KEY = process.env.NEXT_PUBLIC_AD_MOBILE_320X50 || "";
  if (!KEY || KEY === "0" || dismissed) return null;

  return (
    <div className="sticky top-20 z-20 py-2">
      <div className="relative mx-auto max-w-4xl pr-10">
        <AdBannerFrame envKey={KEY} w={320} h={50} />
        <button
          type="button"
          aria-label="Close ad"
          onClick={() => setDismissed(true)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border bg-background/95 p-1 text-muted-foreground hover:text-foreground"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
  );
}
