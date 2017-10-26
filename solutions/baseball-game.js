/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = (ops) => {
    const pointList = [];
    const sumList = [];
    ops.forEach((o) => {
        let point = 0;
        switch (o) {
        case 'C':
            pointList.shift();
            sumList.shift();
            break;
        case 'D':
            point = pointList[0] * 2;
            pointList.unshift(point);
            sumList.unshift(point + ((sumList.length > 0) ? sumList[0] : 0));
            break;
        case '+':
            point = pointList[0] + pointList[1];
            pointList.unshift(point);
            sumList.unshift(point + ((sumList.length > 0) ? sumList[0] : 0));
            break;
        default:
            point = parseInt(o, 10);
            pointList.unshift(point);
            sumList.unshift(point + ((sumList.length > 0) ? sumList[0] : 0));
        }
    });
    return sumList[0];
};
calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']);
