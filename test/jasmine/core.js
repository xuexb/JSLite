describe('core ', function () {
    
    it('$.trim() - 去掉字符串起始和结尾的空格。', function () {
        expect($.trim('hello JSLite.  ')).toBe('hello JSLite.')
        expect($.trim('  hello JSLite.  ')).toBe('hello JSLite.')
    })

    it('$.noConflict() - 返回值', function () {
        expect(JSLite === $.noConflict()).toBe(true);
        expect(typeof JSLite.noConflict()).toBe('function');

        // 测完后就放回$
        window.$ = JSLite.noConflict();
    });

    it('$.noConflict() - 放弃 JSLite 控制的$ 变量。', function (done) {
        $.noConflict();

        JSLite(document).ready(function($) {
            expect($ === JSLite).toBe(true);
            done();
        });

        expect(window.$).toBeUndefined();

        // 测完后就放回$
        window.$ = JSLite.noConflict();
    });

    it('$.noConflict(true)', function () {
        var temp = $.noConflict(true);

        expect(window.$).toBeUndefined();
        expect(window.JSLite).toBeUndefined();

        // 测完后就放回$
        window.$  = window.JSLite = temp;
    });

    // JSON.parse忽略测试
    // it('$.parseJSON() - 与 JSON.parse 方法相同。', function () {
    //     var json = '{"name":"JSLite"}'
    //     json = $.parseJSON(json)
    //     assert.typeOf(json, 'object');
    //     assert.deepEqual(json,{"name":"JSLite"})
    //     expect(json.name,'JSLite')
    // })
    
    it('.length - 对象中元素的个数。', function () {
        var elem = document.createElement('div');
        elem.id = 'test';
        elem.innerHTML = '<div class="jslite">Goodbye</div>';
        document.body.appendChild(elem);
        expect($(document.body).length).toBe(1);
        expect($('.aaa').length).toBe(0);
        expect($('#test div').length).toBe(1);
        $(elem).remove();
        expect($('#test div').length).toBe(0);
    });
});