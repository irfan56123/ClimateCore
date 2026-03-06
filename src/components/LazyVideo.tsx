"use client";

import { useEffect, useRef, useState } from "react";

export default function LazyVideo() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" } // loads slightly before visible
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gray-900">

            {!visible && (
                <img
                    src="/hero1.jpeg"
                    alt="HVAC technician"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}

            {visible && (
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
            )}
        </div>
    );
}