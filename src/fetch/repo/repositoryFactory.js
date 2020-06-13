import WeatherRepository from './weatherRepository';
import ChatRepository from './chatRepository';

const repositories = {
    'weather': WeatherRepository,
    'chat': ChatRepository,
}
export default {
    get: name => repositories[name]
};