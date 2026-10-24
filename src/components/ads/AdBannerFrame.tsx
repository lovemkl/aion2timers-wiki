"use client";

/**
 * Adsterra Banner iframe（lesson_07 4.2 隔离方案的组件化实现）。
 * 每个 banner 一个独立 iframe（独立 window）——atOptions 天然不串号、可并行。
 * key 从 env 读（每尺寸独立变量）；key 空时 return null 不渲染（lesson_07 5.3）。
 */
type Props = {
  envKey: string;
  w: number;
  h: number;
  className?: string;
};

export function AdBannerFrame({ envKey, w, h, className = "" }: Props) {
  if (!envKey || envKey === "0") return null;
  const srcDoc = `<!DOCTYPE html><html><body style="margin:0"><script type="text/javascript">atOptions = {'key':'${envKey}','format':'iframe','height':${h},'width':${w},'params':{}};</script><script type="text/javascript" src="//bauval.org/22/${envKey}"></script></body></html>`;
  return (
    <div className={`flex justify-center ${className}`} aria-label="Advertisement">
      <iframe
        srcDoc={srcDoc}
        width={w}
        height={h}
        scrolling="no"
        style={{ border: "none" }}
        title={`ad-${w}x${h}`}
      />
    </div>
  );
}
