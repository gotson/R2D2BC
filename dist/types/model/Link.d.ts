import { Link as R2Link } from "r2-shared-js/dist/es6-es2015/src/models/publication-link";
export declare class D2Link {
    href: string;
    type?: string;
    title?: string;
}
export declare class Link extends R2Link {
    contentLength?: number;
    contentWeight?: number;
}
export declare function convertAndCamel(o: any): any;
