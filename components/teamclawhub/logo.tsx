import { cn } from "@/lib/utils";
import { TeamClawMark } from "@/components/teamclawhub/teamclaw-mark";

export function TeamClawHubLogo({
  className,
  iconClassName,
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
      <TeamClawMark className={cn("h-9 w-9", iconClassName)} />
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
