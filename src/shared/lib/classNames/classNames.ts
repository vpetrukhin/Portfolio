type Mode = Record<string, boolean | string | undefined>;

export const classNames = (cls: string, mode: Mode = {}, additional: Array<string | undefined> = []): string =>
    [
        cls,
        ...Object.entries(mode)
            .filter(([className, condition]) => Boolean(condition))
            .map(([className]) => className),
        ...additional,
    ].join(' ');