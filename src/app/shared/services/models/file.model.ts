export interface FileResponse {
    timestamp: number
    success: boolean
    result: Result
}

export interface Result {
    code: number
    message: any
    audit: string
    data: File
}

export interface File {
    file: string
    contentType: string
}