import WeatherRepository from './weatherRepository';

const repositories = {
    'weather': WeatherRepository,
}
export default {
    get: name => repositories[name]
};