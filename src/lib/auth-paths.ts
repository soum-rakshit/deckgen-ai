export const AUTH_LOGIN_PATH = '/login'
export const AUTH_API_PREFIX = '/api/auth'
export const INNGEST_APP_PATH = '/api/inngest'

const PUBLIC_PREFIXES = [AUTH_API_PREFIX, INNGEST_APP_PATH]

export function isPublicPath(pathname: string) {
    return PUBLIC_PREFIXES.some((p) => pathname.startsWith(p))
}

export function isLoginPath(pathname: string) {
    return pathname === "/login"
}