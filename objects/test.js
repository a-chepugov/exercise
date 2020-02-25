const index = require( './index' )

describe( 'user', () => {
    const user = index.user;

    test( 'name', () => {
        expect( user.name ).toBe( 'John' );
    } );

    test( 'surname', () => {
        expect( user.surname ).toBe( 'Doe' );
    } );

    test( 'age', () => {
        expect( Number( user.age ) ).toBe( 20 );
    } );
} )

describe( 'talkativeUser', () => {
    const user = index.talkativeUser;

    test( 'original getFullName', () => {
        expect( user.getFullName() ).toBe( 'John Doe' );
    } );

    test( 'for other object', () => {
        expect( user.getFullName.call( { name: 'A', surname: 'B' } ) ).toBe( 'A B' );
    } );
} )

describe( 'putInto', () => {
    const putInto = index.putInto;

    test( 'set field with numeric ', () => {
        const result = putInto( {}, 3, 4 )
        expect( result[3] )
            .toBe( 4 );
    } );

    test( 'set undefined', () => {
        const result = putInto( {}, 'a' )

        expect( result['a'] )
            .toBe( undefined );
    } );

} )

describe( 'multiplyFields', () => {
    const multiplyFields = index.multiplyFields;

    test( 'check fields', () => {
        expect( multiplyFields( { a: 1, b: 2, c: 3 }, 3 ) )
            .toEqual( expect.objectContaining( { a: 3, b: 6, c: 9 } ) );
    } );

} )

describe( 'Cell', () => {
    const Cell = index.Cell;

    test( 'check on static', () => {
        const cell = new Cell();
        cell.set( Math.PI )

        expect( cell.get() ).toBe( Math.PI );
    } );

    test( 'check on random', () => {
        const cell = new Cell();
        const value = Math.random();
        cell.set( value )

        expect( cell.get() ).toBe( value );
    } );

} )

