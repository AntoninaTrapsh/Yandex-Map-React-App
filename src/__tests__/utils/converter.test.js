import {coordinateConverter} from "../../utils/converter";

const fixtures = "55.37 37.87"

describe('coordinateConverter', () => {
    it('should return converted value', () => {
        const result = coordinateConverter(fixtures);
        expect(result).toEqual([37.87, 55.37]);
    });
});
