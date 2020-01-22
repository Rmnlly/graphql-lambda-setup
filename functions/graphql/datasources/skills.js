class SkillsAPI {
  constructor() {
    super();
  }

  getSkills() {
    return {
      frontEnd: [
        "Javascript ES7+",
        "React",
        "Redux",
        "PostCSS",
        "Sass",
        "Apollo Client"
      ],
      backEnd: [
        "Node.js",
        "Express",
        "Apollo Graphql Server",
        "Lambda Services"
      ],
      toolchain: ["npm", "Babel", "Git", "Webpack", "Docker"],
      other: ["Jira", "Confluence", "Bitbucket", "Gitlab", "Agile"]
    };
  }
}

module.exports = SkillsAPI;
