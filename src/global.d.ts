// Для поддержки CSS-модулей
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Для поддержки изображений формата WebP
declare module '*.webp' {
  const value: string;
  export default value;
}

// При необходимости добавьте поддержку других форматов изображений
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}
