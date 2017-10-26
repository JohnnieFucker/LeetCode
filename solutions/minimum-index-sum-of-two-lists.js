/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = (list1, list2) => {
    const map = {};
    list1.forEach((l, index) => {
        map[l] = {
            i: index
        };
    });
    list2.forEach((l, index) => {
        if (map.hasOwnProperty(l)) {
            map[l].i += index;
            map[l].f = true;
        }
    });
    const ret = [];
    let minIndex = -1;
    for (const k in map) {
        if (map[k].f) {
            if (minIndex < 0) {
                minIndex = map[k].i;
            }
            minIndex = Math.min(minIndex, map[k].i);
        } else {
            delete map[k];
        }
    }
    for (const k in map) {
        if (minIndex === map[k].i) {
            ret.push(k);
        }
    }
    return ret;
};

console.log(findRestaurant(['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']));
