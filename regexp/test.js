const phoneParser = require( './index' )

test( '+380995213409', () => {
    expect( phoneParser( '+380995213409' ) ).toEqual( expect.objectContaining( {
        tel: '380995213409',
        country: '380',
        area: '99',
        local: '5213409'
    } ) );
} );

test( '380975213408', () => {
    expect( phoneParser( '380975213408' ) ).toEqual( expect.objectContaining( {
        tel: '380975213408',
        country: '380',
        area: '97',
        local: '5213408'
    } ) );
} );

test( '+38(099)5215408', () => {
    expect( phoneParser( '+38(099)5215408' ) ).toEqual( expect.objectContaining( {
        tel: '380995215408',
        country: '380',
        area: '99',
        local: '5215408'
    } ) );
} );

test( '+380 (99) 52 - 13 - 408', () => {
    expect( phoneParser( '+380 (63) 52 - 13 - 408' ) ).toEqual( expect.objectContaining( {
        tel: '380635213408',
        country: '380',
        area: '63',
        local: '5213408'
    } ) );
} );

test( '380 (99) 521-408', () => {
    expect( phoneParser( '380 (99) 521-3408' ) ).toEqual( expect.objectContaining( {
        tel: '380995213408',
        country: '380',
        area: '99',
        local: '5213408'
    } ) );
} );

test( '3 8 0 9 9 5 5 1 3 4 0 8', () => {
    expect( phoneParser( '3 8 0 9 9 5 5 1 3 4 0 8' ) ).toEqual( expect.objectContaining( {
        tel: '380995513408',
        country: '380',
        area: '99',
        local: '5513408'
    } ) );
} );