/**
 * PostCSS plugin to prepend NEXT_PUBLIC_BASE_PATH to absolute CSS url() paths.
 * This is needed because Next.js basePath does NOT rewrite CSS url() references.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-basepath',
    Declaration(decl) {
      if (!basePath) return;
      if (!decl.value.includes('url(')) return;

      decl.value = decl.value.replace(/url\((['"]?)\//g, (match, quote) => {
        if (match.includes('//')) return match;
        return `url(${quote}${basePath}/`;
      });
    },
  };
};

module.exports.postcss = true;
