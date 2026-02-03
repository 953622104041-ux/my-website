export const parseBulletItems = (items: string | string[] | undefined): string[] => {
    if (!items) return [];
    if (Array.isArray(items)) return items;
    return items.split('\n').filter(Boolean);
};
