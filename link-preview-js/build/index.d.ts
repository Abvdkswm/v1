interface ILinkPreviewOptions {
    headers?: Record<string, string>;
    imagesPropertyType?: string;
    proxyUrl?: string;
    timeout?: number;
    followRedirects?: boolean;
}
interface IPreFetchedResource {
    headers: Record<string, string>;
    status?: number;
    imagesPropertyType?: string;
    proxyUrl?: string;
    url: string;
    data: string;
}
/**
 * Parses the text, extracts the first link it finds and does a HTTP request
 * to fetch the website content, afterwards it tries to parse the internal HTML
 * and extract the information via meta tags
 * @param text string, text to be parsed
 * @param options ILinkPreviewOptions
 */
export declare function getLinkPreview(text: string, options?: ILinkPreviewOptions): Promise<{
    url: string;
    mediaType: string;
    contentType: string;
    favicons: string[];
} | {
    url: string;
    title: string;
    siteName: string | undefined;
    description: string | undefined;
    mediaType: string;
    contentType: string | undefined;
    images: string[];
    videos: {
        url: string | undefined;
        secureUrl: string | null | undefined;
        type: string | null | undefined;
        width: string | undefined;
        height: string | undefined;
    }[];
    favicons: string[];
}>;
/**
 * Skip the library fetching the website for you, instead pass a response object
 * from whatever source you get and use the internal parsing of the HTML to return
 * the necessary information
 * @param response Preview Response
 * @param options IPreviewLinkOptions
 */
export declare function getPreviewFromContent(response: IPreFetchedResource, options?: ILinkPreviewOptions): Promise<{
    url: string;
    mediaType: string;
    contentType: string;
    favicons: string[];
} | {
    url: string;
    title: string;
    siteName: string | undefined;
    description: string | undefined;
    mediaType: string;
    contentType: string | undefined;
    images: string[];
    videos: {
        url: string | undefined;
        secureUrl: string | null | undefined;
        type: string | null | undefined;
        width: string | undefined;
        height: string | undefined;
    }[];
    favicons: string[];
}>;
export {};
