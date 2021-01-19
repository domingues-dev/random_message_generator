message = {
    _subjects: ['I', 'You', 'He', 'Her', 'It', 'We', 'They'],

    _verbs: ['go', 'remember', 'be', 'eat', 'have', 'run', 'see', 
        'do', 'can', 'read', 'play', 'write', 'think', 'get', 'say', 
        'buy', 'take', 'speak', 'come', 'work', 'know', 'lie', 'ride', 
        'sing', 'sleep', 'study', 'talk', 'make', 'teach', 'want'],

    _adjectives: ['breezy', 'panoramic', 'humorous', 'deep', 'true',
        'military', 'merciful', 'secret', 'savory', 'noisy', 'obsequious',
        'overjoyed', 'mighty', 'earthy', 'alluring', 'medical', 'united',
        'acoustic', 'handsome', 'fanatical'],

    _nouns: ['hall', 'music', 'reaction', 'presentation', 'temperature',
        'description', 'appointment', 'audience', 'feedback', 'director',
        'cheek', 'cousin', 'session', 'investment', 'appearance', 'environment',
        'drawer', 'classroom'],

    get subjects(){
        return this._subjects
    },
    get verbs(){
        return this._verbs
    },
    get adjectives(){
        return this._adjectives
    },
    get nouns(){
        return this._nouns
    },
    getRandomMessageComponent(array){
        let index = Math.floor(Math.random() * (array.length - 1))
        return array[index]
    },
    randomMessage(){
        const s = message.getRandomMessageComponent(message.subjects)
        const v = message.getRandomMessageComponent(message.verbs)
        const a = message.getRandomMessageComponent(message.adjectives)
        const n = message.getRandomMessageComponent(message.nouns)
        console.log(`${s} ${v} ${a} ${n}.`)
    }
}

message.randomMessage()




