import Loader from './loader';
class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'd4726672232f4e6ab04ee17d743a48bb', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
