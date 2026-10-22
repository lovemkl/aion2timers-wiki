"use client";

import { AdBannerFrame } from "./AdBannerFrame";

/**
 * 桌面端 Fixed 侧边栏（lesson_07 4.3——第二大收入块，实测 160×300 $1.85 / 160×600 $1.50）。
 * 左 160×600 全高 + 右 160×300 半高；fixed 定位贴内容区两侧空白；hidden xl:block 只大屏。
 */
export function SidebarAds() {
  const KEY_LEFT = process.env.NEXT_PUBLIC_AD_SIDEBAR_160X600 || "";
  const KEY_RIGHT = process.env.NEXT_PUBLIC_AD_SIDEBAR_160X300 || "";

  return (
    <>
      {(KEY_LEFT && KEY_LEFT !== "0") && (
        <aside
          className="hidden xl:block fixed top-20 w-40 z-10"
          style={{ left: "calc((100vw - 896px) / 2 - 180px)" }}
          aria-label="Advertisement"
        >
          <AdBannerFrame envKey={KEY_LEFT} w={160} h={600} />
        </aside>
      )}
      {(KEY_RIGHT && KEY_RIGHT !== "0") && (
        <aside
          className="hidden xl:block fixed top-20 w-40 z-10"
          style={{ right: "calc((100vw - 896px) / 2 - 180px)" }}
          aria-label="Advertisement"
        >
          <AdBannerFrame envKey={KEY_RIGHT} w={160} h={300} />
        </aside>
      )}
    </>
  );
}
