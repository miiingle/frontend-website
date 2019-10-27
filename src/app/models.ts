
export interface Health {
    status: string;
}

export interface OAuthToken {
    access_token: string;
    tokenType: string;
    refreshToken: string;
    expiresIn: number;
    scope: string;
    organization: string;
    jti: string;
}