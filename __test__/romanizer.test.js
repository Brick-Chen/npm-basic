import {transform} from  "../src/romanizer";

describe('romanizer', () => {
    it('should X given 10', () => {
        const formatted = transform(10);

        expect(formatted).toEqual('X');
    });
});