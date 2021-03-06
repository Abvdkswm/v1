import { MemberList, Message } from "./types";
export declare class Members {
    private _credentials;
    private _apiUrl;
    constructor(_credentials: string, _apiUrl: string);
    private apiPath;
    /**
     * Retrieves account objects for all of the accounts in the specified project.
     * @param projectId Unique identifier of the project
     */
    listMembers(projectId: string): Promise<MemberList>;
    /**
     * Retrieves account objects for all of the accounts in the specified project.
     * @param projectId Unique identifier of the project
     * @param memberId Unique identifier of the member
     */
    removeMember(projectId: string, memberId: string): Promise<Message>;
}
