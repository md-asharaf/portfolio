"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

function MediaPreviewModal({
  image,
  video,
  title,
  onClose,
}: {
  image?: string;
  video?: string;
  title: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full mx-4 rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex items-center justify-center size-8 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors duration-200"
          aria-label="Close preview"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full max-h-[80vh] object-contain bg-black"
          />
        ) : image ? (
          <img
            src={image}
            alt={title}
            className="w-full max-h-[80vh] object-contain bg-black"
          />
        ) : null}
      </div>
    </div>,
    document.body
  );
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const hasMedia = !!(video || image);

  return (
    <>
      {previewOpen && (
        <MediaPreviewModal
          image={image}
          video={video}
          title={title}
          onClose={() => setPreviewOpen(false)}
        />
      )}
      <Card
        className={
          "flex flex-col overflow-hidden border-2 border-[#727072]/20 dark:border-[#727072]/30 hover:border-[#ff6188]/40 dark:hover:border-[#ff6188]/40 hover:shadow-2xl hover:shadow-[#ff6188]/20 hover:-translate-y-2 transition-all duration-300 ease-out h-full bg-transparent dark:bg-white/5 backdrop-blur-md"
        }
      >
        {/* Media section */}
        <div className="relative group">
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("block cursor-pointer", className)}
          >
            {video && (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
              />
            )}
            {image ? (
              <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="h-40 w-full overflow-hidden object-cover object-top"
              />
            ) : (
              !video && <div className="h-40 w-full bg-gray-100 dark:bg-gray-800" />
            )}
          </Link>

          {/* Preview button — top-left, appears on hover */}
          {hasMedia && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setPreviewOpen(true);
              }}
              className="absolute top-2 left-2 z-10 flex items-center justify-center size-7 rounded-full bg-black/50 hover:bg-black/80 text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 hover:scale-110"
              aria-label="Preview media"
              title="Preview"
            >
              <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          )}
        </div>

        <CardHeader className="px-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-2">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px] bg-transparent text-black border-black/30 hover:bg-[#ff6188] hover:text-white hover:border-[#ff6188] dark:text-white dark:border-white/30 dark:hover:bg-[#ff6188] dark:hover:text-white dark:hover:border-[#ff6188] transition-colors duration-200"
                  variant="outline"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-2 pb-2">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1">
              {links?.map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank" rel="noopener noreferrer">
                  <Badge key={idx} className="flex gap-2 px-2 py-1 text-xs font-semibold bg-transparent text-black border-black/50 hover:text-green-600 hover:border-[#a9dc76] dark:text-white dark:border-white/50 dark:hover:text-green-400 dark:hover:border-[#a9dc76] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105" variant="outline">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </Card>
    </>
  );
}

