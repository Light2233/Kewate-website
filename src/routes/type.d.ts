// Типы разрабатываемых страниц
type WebsiteCategory = "landing" | "multi-page" | "store";

interface WebsiteInfo {
    name : string,
    term : string,
    purpose : string,
    time: string,
    advantages : {
        title: string,
        desc: string,
    }[],
    cost : number,
    taglineDesc : string,
    images : string[],
    pageTitle : string
}

type Websites = Map<WebsiteCategory, WebsiteInfo>;

// Готовые проекты

interface Project {
    name: string,
    tags: ProjectTag[],
}

interface ProjectTag {
    name: string
}

// Команда
interface TeamMember {
    name: string,
    speciality: string,
    url: string
}

interface ClientProject {
    name : string,
    steps : string,
    url : string
}



interface Tab {
    number: number,
    component : ComponentType,
    loadData?: any,
}


// Кпшечка

type Services = WebsiteCategory

interface Task {
    problem : string,
    solution : string,
    scope: string,
    term: string,
    price: number
}

interface UserProblem {
    percent: string,
    name: string,
    desc: string,
    solution: string
}

interface Getting {
    name: string,
    desc : string
}

interface CommercialOffer {
    name: string,
    url: string,
    service: Services,
    clientName : string,
    task : Task,
    userProblems: UserProblem[],
    projects: string[],
    clientGetting : Getting[]
}