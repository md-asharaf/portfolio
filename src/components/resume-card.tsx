"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  location?: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  location
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Card className="flex bg-transparent transition-all duration-300 backdrop-blur-sm hover:shadow-sm" >
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage
            src={logoUrl}
            alt={altText}
            className="object-contain"
          />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-4 items-center flex-col group cursor-pointer" onClick={handleClick}>
        <CardHeader>
          <div className="flex items-start justify-between gap-x-2 text-base">
            <div className="flex items-start">
              <div className="flex flex-col items-start space-y-1">
                {subtitle && <div className="font-sans text-xs sm:text-sm font-semibold">{subtitle}</div>}
                <h3 className="inline-flex items-start leading-none text-xs">
                  <span className="mr-1 text-muted-foreground dark:text-muted-foreground/70"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-threads" viewBox="0 0 16 16">
                    <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />
                  </svg></span> <Link href={href} className="hover:underline" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">
                    {title}
                  </Link>
                </h3>
              </div>
              {badges && (
                <span className="ml-2 inline-flex gap-x-1">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="outline"
                      className="px-2 py-0.5 align-middle text-xs bg-transparent text-black border-black/30 hover:text-[#ff6188] hover:border-[#ff6188] dark:text-white dark:border-white/30 dark:hover:text-[#ff6188] dark:hover:border-[#ff6188] transition-colors duration-200"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
              <ChevronRightIcon
                className={cn(
                  "ml-1 size-4 shrink-0 transition-all duration-300 ease-out",
                  isExpanded ? "rotate-90" : "rotate-0"
                )}
              />
            </div>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              <div>{period}</div>
              <div className="text-muted-foreground text-xs">{location}</div>
            </div>
          </div>
        </CardHeader>
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,

              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 text-xs sm:text-sm"
          >
            {description}
          </motion.div>
        )}
      </div>
    </Card>
  );
};
