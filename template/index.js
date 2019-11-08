const template = ({ tags, summary, name, path, method, customMethod }) => `
// ${tags.join(',')}
// ${summary}
const ${name}  = params => {
  return ${customMethod}(\`${path.replace(/\{/g, '${params.')}\`, params)
}
`;

module.exports = {
  all: template,
  get: template,
  post: template
};
