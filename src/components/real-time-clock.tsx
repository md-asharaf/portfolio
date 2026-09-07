"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Icons } from "./icons";

export function RealTimeClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setTime(timeString);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Badge variant="outline" className="flex items-center gap-1 hover:border-[#d79921] transition-colors group cursor-pointer border-[#928374] dark:border-[#665c54]">
      <Icons.clock className="size-3 transition-colors group-hover:text-[#d79921]" />
      <span className="tabular-nums transition-colors group-hover:text-[#d79921]">
        {time} IST
      </span>
    </Badge>
  );
}
