// Типы разрабатываемых страниц
type WebsiteCategory = "landing" | "multi-page" | "store";

interface WebsiteInfo {
    name: string,
    term : string,
    purpose : string,
    time: string,
    advantages : {
        title: string,
        desc: string,
    }[],
    cost : number,
    taglineDesc : string,
    images : string[]
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