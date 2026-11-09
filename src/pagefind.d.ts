declare module '@pagefind/default-ui' {
  export class PagefindUI {
    constructor(options: {
      element: string | HTMLElement;
      [key: string]: unknown;
    });
  }
}
