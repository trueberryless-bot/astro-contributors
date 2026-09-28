const CONTRIBUTION_EMOJIS = new Map(
  Object.entries({
    a11y: "♿️",
    audio: "🔊",
    blog: "📝",
    bug: "🐛",
    business: "💼",
    code: "💻",
    content: "🖋",
    data: "🔣",
    design: "🎨",
    doc: "📖",
    eventOrganizing: "📋",
    example: "💡",
    financial: "💵",
    fundingFinding: "🔍",
    ideas: "🤔",
    infra: "🚇",
    maintenance: "🚧",
    mentoring: "🧑‍🏫",
    platform: "📦",
    plugin: "🔌",
    projectManagement: "📆",
    question: "💬",
    research: "🔬",
    review: "👀",
    security: "🛡️",
    talk: "📢",
    test: "⚠️",
    tool: "🔧",
    translation: "🌍",
    tutorial: "✅",
    userTesting: "📓",
    video: "📹",
  })
);

export function getContributionEmoji(type: string) {
  return CONTRIBUTION_EMOJIS.get(type) ?? "✨";
}
