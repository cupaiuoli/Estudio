import shuffle from 'lodash.shuffle';
import Icons from './icons'
const CARDS_QTY = 20; 

export default () => {
    const icons = Icons();
    let cards = [];

    while (cards.length < CARDS_QTY) {
        const index = Math.floor(Math.random() * icons.length);
        const card = {
            icon: icons.splice(index, 1)[0],
            found: false
        }
        cards.push(card);
        cards.push({...card});
    }

    return shuffle(cards);
}