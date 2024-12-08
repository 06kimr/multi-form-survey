export type CN<T = NonNullable<unknown>> = T & {
  className?: string;
};
