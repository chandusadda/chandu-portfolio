export interface WorkExpInterface {
  work: {
    company:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | React.PromiseLikeOfReactNode
      | null
      | undefined;
    role:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | React.PromiseLikeOfReactNode
      | null
      | undefined;
    duration:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | React.PromiseLikeOfReactNode
      | null
      | undefined;
    description: any[];
    link: string;
    achievements: string[];
  };
}
