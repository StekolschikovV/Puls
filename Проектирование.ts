interface BaseParametersInterface {
    region: string
    developerId: number
    cascadeNumber: number
    type: string
    status: string
}

interface MapSearchParametersInterface extends BaseParametersInterface {

}

interface DiagramSearchParametersInterface extends BaseParametersInterface {
    diagramId: number
}

interface BaseDataInterface {
    region: string
    developer: {
        id: number
        title: string
    }
    projects: {
        id: number
        title: string
    }[]
}


interface MapDataInterface extends BaseDataInterface {
    locations: {
        lat: number
        lon: number
    }
}

interface DiagramDataInterface extends BaseDataInterface {
    selectedDiagramId: number
    selectedDiagramFieldId: number
}

interface ExportDataInterface extends BaseDataInterface {
    tables: {
        id: number
        title: string
    }[]
    exportTableId: number
}

interface BaseClassInterface {
    fetchData(): void

    render(): void
}

class Map implements BaseClassInterface {

    data: MapDataInterface = null
    searchParameters: MapSearchParametersInterface = {
        cascadeNumber: null,
        status: null,
        type: null,
        region: null,
        developerId: null
    }

    constructor() {
        this.fetchData()
    }

    fetchData(): void {
        // Получить данные с сервера используя this.searchParameters
        // Записать данные в this.data
        this.render()
    }

    search(dataIn: MapSearchParametersInterface): void {
        this.searchParameters = dataIn
        this.fetchData()
    }

    render(): void {
        // Вывести данные в шаблоне
    }
}

class Diagram implements BaseClassInterface {

    data: DiagramDataInterface = {
        developer: {id: null, title: null},
        projects: null,
        region: null,
        selectedDiagramFieldId: null,
        selectedDiagramId: null
    }

    searchParameters: DiagramSearchParametersInterface = {
        diagramId: null,
        cascadeNumber: null,
        status: null,
        type: null,
        region: null,
        developerId: null
    }

    constructor() {
        this.fetchData()
    }

    fetchData(): void {
        // Получить данные с сервера используя this.searchParameters
        // Записать данные в this.data
        this.render()
    }

    search(dataIn: DiagramSearchParametersInterface): void {
        this.searchParameters = dataIn
        this.fetchData()
    }

    render(): void {
        // Вывести данные в шаблоне
    }

}

class Export implements BaseClassInterface {

    data: ExportDataInterface = {
        developer: {
            id: null,
            title: null
        },
        exportTableId: null,
        projects: null,
        region: null,
        tables: null
    }

    searchParameters: BaseParametersInterface = {
        cascadeNumber: null,
        developerId: null,
        status: null,
        type: null,
        region: null
    }

    constructor() {
        this.fetchData()
    }

    fetchData(): void {
        // Получить данные с сервера используя this.searchParameters
        // Записать данные в this.data
        this.render()
    }

    search(dataIn: BaseParametersInterface): void {
        this.searchParameters = dataIn
        this.fetchData()
    }

    render(): void {
        // Вывести данные в шаблоне
    }

    export(id: number): void {
        // Экспортировать данные
    }

}
