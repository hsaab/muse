export function debounce(fn, delay, context, ...args) {
  return () => {
    clearTimeout(context.timer);
    context.timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}
