"use client";

import { useEffect } from "react";

export default function ChatWidgetLoader() {
  useEffect(() => {
    let loaded = false;

    const loadChat = () => {
      if (loaded) return;
      loaded = true;

      const script = document.createElement("script");
      script.id = "xbot-chat";
      script.src =
        "https://chat-xbot.Irfan.in/js/widget/omf5pwsilxzzkba1/float.js";
      script.async = true;
      script.defer = true;

      document.body.appendChild(script);

      // Clean listeners after load
      window.removeEventListener("scroll", loadChat);
      window.removeEventListener("mousemove", loadChat);
      window.removeEventListener("touchstart", loadChat);
    };

    // User intent triggers
    window.addEventListener("scroll", loadChat, { once: true });
    window.addEventListener("mousemove", loadChat, { once: true });
    window.addEventListener("touchstart", loadChat, { once: true });

    return () => {
      window.removeEventListener("scroll", loadChat);
      window.removeEventListener("mousemove", loadChat);
      window.removeEventListener("touchstart", loadChat);
    };
  }, []);

  return null;
}
