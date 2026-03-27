import { cn } from "@/lib/utils";

export function TeamClawHubLogo({
  className,
  showText = true,
  textClassName
}: {
  className?: string;
  iconClassName?: string;
  showText?: boolean;
  textClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-2xl font-bold", className)}>
      <span className="text-3xl">🌊</span>
      {showText ? (
        <span
          className={cn(
            "teamclawhub-logo-text",
            textClassName
          )}
        >
          TeamClawHub
        </span>
      ) : null}
    </span>
  );
}
