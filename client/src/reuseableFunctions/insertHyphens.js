export const insertHyphens = (text) => {
    const firstPart = text.replaceAll("-", "").slice(0, -4).replace(/(.{4})/g, '$1-');
        const lastPart = text.slice(-4);
        return firstPart + lastPart;
};
