const nHentai = require('./utils/nHentaiService');
const utils = new nHentai;

const fetch = require('node-fetch')
const baseUrl = 'http://nhentai.net/'
const baseRandom = 'http://nhentai.net/random'
const baseDoujin = 'https://nhentai.net/g/'
const baseAuthor = 'https://nhentai.net/artist/'
const baseSearch = 'https://nhentai.net/search/?q='
const searchService = require('./utils/searchService')

const createURI = (name, value) => value ? request[name] + value : request[name]

const request = {
    random: baseRandom,
    popular: baseUrl,
    new: baseUrl,
    id: baseDoujin,
    methods: {
        popular: 'parsePopular',
        random: 'parse',
        new: 'parseNew',
        id: 'parse',
    }
}

/**
 * Simple nHentai Parser Library
 * @author Mikun Hatsune
 * @returns {object} Promise methods 
 */

class sHentai {
    async #returner(resolve, options) {
        try {
            if (options.type == 'id') if (typeof options.value == 'string' && !options.value.length) return resolve({ status: 400, message: 'You entered an invalid request'})

            const html = await fetch(createURI(options.type, options.value)).then(res => res.text())
            const answer = utils[request.methods[options.type]](html, options.type == 'id' ? false : true)

            if (answer?.status == 302) return this.getRandom()
            return resolve(answer)
        } catch (error) {
            resolve({ status: 500, message: 'It looks like something went wrong. Contact the developer on the official Discord Server!\nhttps://discord.gg/vJs36ES' })
        }
    }

    /**
     * @returns {Promise<Array<{ id: string, titles: { english: string }, cover: string}>>} All popular Doujin today(5 usually)
     */
    getPopular() {
        return new Promise(async resolve => this.#returner(resolve, { type: 'popular' }))
    }

    /**
     * @returns {Promise<Array<{ id: string, titles: { english: string }, cover: string}>>} All new Doujins today
     */
    getNew() {
        return new Promise(async resolve => this.#returner(resolve, { type: 'new' }))
    }

    /**
     * @returns {Promise<{ id: string, titles: { english: string, original?: string }, pages: Array<string>, tags: Array<string>, cover: string}>} Random doujin
     */

    getRandom() {
        return new Promise(async resolve => this.#returner(resolve, { type: 'random' }))
    }

    /**
     * **If you don't enter ID, send random Doujin**
     * @param {number | string} [id] ID of Doujin for get 
     * @returns {Promise<{ id: string, title: { english: string, original?: string }, pages: Array<string>, tags: Array<string>, cover: string}>} Doujin
     */

    getDoujin(id = false) {
        if (!id || !+id) return this.getRandom()
        return new Promise(async resolve => this.#returner(resolve, { type: 'id', value: String(id) }))
    }

    /**
     * @param {string} text Query params for searching 
     * 
     * **Details of return:**
     * * Class with methods for Continue Searching
     * * Objects in array with Doujins
     * @returns {Promise<searchService>} Class with Methods and Results 
     */

    byAuthor(name) {
        return new Promise(async resolve => {
            try {
                if (!name || typeof name !== 'string' || !name.length) return resolve({ status: 400, message: 'You not entered query params for searching', results: 'Check message property.'})
                if (/[??-????]+/gi.test(name)) return resolve({ status: 400, message: 'Cyrillic is not allowed', results: 'Check message property.'})

                let query = name.split(/ +/).join('-')
                const html = await fetch(baseAuthor + query).then(res => res.text())
                const { doujins, allPages, allCount, status, message } = utils.parseSearch(html, true)
                if (status) return resolve({ status: 500, message: message, results: 'Something wrong. Check message property.'})
                else if (!doujins.length) return resolve({ results: [] })
                
                const searchResult = new searchService(baseAuthor + query, doujins, allPages, allCount, true)
                return resolve(searchResult)
            } catch (error) {
                resolve({ status: 500, message: 'It looks like something went wrong. Contact the developer on the official Discord Server!\nhttps://discord.gg/vJs36ES', results: 'Something wrong. Check message property.'})
            }
        })
    }

    /**
     * @param {string} text Query params for searching 
     * 
     * **Details of return:**
     * * Class with methods for Continue Searching
     * * Objects in array with Doujins
     * @returns {Promise<searchService>} Class with Methods and Results 
     */

    search(text) {
        return new Promise(async resolve => {
            try {
                if (!text || typeof text !== 'string' || !text.length) return resolve({ status: 400, message: 'You not entered query params for searching', results: 'Check message property.'})
                if (/[??-????]+/gi.test(text)) return resolve({ status: 400, message: 'Cyrillic is not allowed', results: 'Check message property.'})
                if (require('./utils/blacklist').includes(text.toLowerCase())) return resolve({ status: 403, message: 'We cannot display this material. And you better not look for it.', results: 'Forbidden. Check message property.'})

                const query = text.split(/ +/).join('+')
                const html = await fetch(baseSearch + query).then(res => res.text())

                const { doujins, allPages, allCount, status, message } = utils.parseSearch(html, false)
                if (status) return resolve({ status: 400, message: message, results: 'Check message property.'})
                else if (!doujins.length) return resolve({ results: [] })

                const searchResult = new searchService(baseSearch + query, doujins, allPages, allCount, false)
                return resolve(searchResult)
            } catch (error) {
                resolve({ status: 500, message: 'It looks like something went wrong. Contact the developer on the official Discord Server!\nhttps://discord.gg/vJs36ES', results: 'Something wrong. Check message property.'})
            }
        })
    }
}

module.exports = sHentai