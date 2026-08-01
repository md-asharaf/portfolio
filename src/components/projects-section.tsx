"use client";

import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/project-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

interface ProjectsSectionProps {
    delay: number;
}

export function Projects({ delay }: ProjectsSectionProps) {
    const [activeTab, setActiveTab] = useState("works");

    useEffect(() => {
        const savedTab = localStorage.getItem("projects-tab");
        if (savedTab === "works" || savedTab === "clients") {
            setActiveTab(savedTab);
        }
    }, []);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        localStorage.setItem("projects-tab", tab);
    };

    const personalTitles = ["TubeX", "Mystery Message", "Restaurant Table Booking System"];
    const personalProjects = DATA.projects.filter(p => personalTitles.includes(p.title));
    const clientProjects = DATA.projects.filter(p => !personalTitles.includes(p.title));

    const currentProjects = activeTab === "works" ? personalProjects : clientProjects;

    return (
        <div className="space-y-8">
            {/* Tab Navigation */}
            <BlurFade delay={delay}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                            Featured Projects
                        </div>
                        {/* Tab Buttons */}
                        <div className="flex justify-center space-x-2 bg-transparent dark:bg-white/5 border border-black/10 dark:border-white/10 p-1.5 rounded-xl max-w-md mx-auto shadow-md backdrop-blur-md">
                            <button
                                onClick={() => handleTabChange("works")}
                                className={cn(
                                    "px-4 py-1.5 text-sm font-semibold rounded-lg transition-all duration-300",
                                    activeTab === "works"
                                        ? "bg-[#ff6188] text-white shadow-[0_0_15px_rgba(255,97,136,0.4)]"
                                        : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10"
                                )}
                            >
                                My Works ({personalProjects.length})
                            </button>
                            <button
                                onClick={() => handleTabChange("clients")}
                                className={cn(
                                    "px-4 py-1.5 text-sm font-semibold rounded-lg transition-all duration-300",
                                    activeTab === "clients"
                                        ? "bg-[#a9dc76] text-black shadow-[0_0_15px_rgba(169,220,118,0.4)]"
                                        : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10"
                                )}
                            >
                                Client Works ({clientProjects.length})
                            </button>
                        </div>
                        <div className="mt-20"><h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Check out my latest work
                        </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                I&apos;ve worked on a variety of projects, from simple
                                websites to complex web applications. Here are a few of my
                                favorites.
                            </p></div>
                    </div>
                </div>
            </BlurFade>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                {currentProjects.length > 0 ? (
                    currentProjects.map((project, id) => (
                        <BlurFade
                            key={`${activeTab}-${project.title}`}
                            delay={delay + 0.1 + id * 0.05}
                        >
                            <ProjectCard
                                href={project.href}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))
                ) : (
                    <BlurFade delay={delay + 0.1}>
                        <div className="col-span-full text-center py-12">
                            <p className="text-muted-foreground">
                                {activeTab === "clients"
                                    ? "Client projects coming soon!"
                                    : "No projects available"}
                            </p>
                        </div>
                    </BlurFade>
                )}
            </div>
        </div>
    );
}
