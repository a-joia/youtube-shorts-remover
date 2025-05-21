console.log("[EXTENSION] Running Remove YouTube Shorts and Playables...");

function removeUnwantedSections() {
  const sections = document.querySelectorAll("ytd-rich-section-renderer");

  sections.forEach((section) => {
    const titleSpan = section.querySelector("h2 span#title");
    const link = section.querySelector("a");

    const title = titleSpan?.textContent?.trim().toLowerCase() || "";
    const href = link?.getAttribute("href") || "";

    if (
      title === "shorts" ||
      title.includes("sala de jogos") ||
      href.startsWith("/playables")
    ) {
      console.log(`[EXTENSION] Removed section: "${title}"`);
      section.remove();
    }
  });
}

removeUnwantedSections();

new MutationObserver(removeUnwantedSections).observe(document.body, {
  childList: true,
  subtree: true,
});
