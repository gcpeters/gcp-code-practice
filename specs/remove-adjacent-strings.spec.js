const removeAdjacentDupes = (value) => {
    for (let i = 0; i<value.length - 1; i++) {

        if (value[i] === value[i+1]) {

            
           return removeAdjacentDupes(value.slice(0, i) + value.slice(i+2));
        }
    }

    return value;
}

test('Remove Adjacement Duplicates in String', () => {
    expect('hello'.slice(0, 2)).toBe('he');
    expect(removeAdjacentDupes('acddca')).toBe('');
    expect(removeAdjacentDupes('acddce')).toBe('ae');
});