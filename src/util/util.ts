export const imgLoader = (data: any) => {
  return `${data.src}?w=${data.width}&q=${data.quality || 75}`;
};
