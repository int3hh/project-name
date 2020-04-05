import Substantives from './utils/substantives.json'
import Adjectives from './utils/adjectives.json'

export default class NameGenerator {
    generate() {
        return Adjectives.data[Math.floor(Math.random() * Adjectives.data.length)] + "-" + Substantives.data[Math.floor(Math.random() * Substantives.data.length) ];
    }
}