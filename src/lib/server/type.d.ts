interface ApplicationForm {
    page: string,
    source: string,
    utm?: {[name:string] : string},
    name: string,
    company?: string,
    phone: string,
    email?: string,
    budget?: string,
}