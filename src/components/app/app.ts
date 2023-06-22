import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { SourceObj } from '../../types/types';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourcesHtml = document.querySelector('.sources') as HTMLElement;
        sourcesHtml.addEventListener('click', (e: MouseEvent) =>
            this.controller.getNews(e, (data: SourceObj | undefined): void => {
                this.view.drawNews(data);
            })
        );
        this.controller.getSources((data: SourceObj | undefined): void => this.view.drawSources(data));
    }
}

export default App;
