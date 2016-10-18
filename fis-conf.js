// 设置项目属性
fis.set('project.name', '');
fis.set('project.host', '');
fis.set('project.static', '/static');
fis.set('project.files', ['*.html', 'map.json', '/test/*']);

fis.config.set('project.watch.usePolling', true);

//fis-parser-babel-5.x
fis.set('project.fileType.text', 'es');

fis.match('*.html', {
    useMap: true
});

fis.match('*.{js,css}', {
    // 开启 hash
    useHash: false
});


fis.set('project.ignore', [
    'node_modules/**',
    '_dist/',
    '.git/**',
    '.svn/**'
]);


// 引入模块化开发插件，设置规范为 commonJs 规范。
fis.hook('commonjs', {
    baseUrl: './modules',
    extList: ['.js', '.es']
        //,mod: 'amd'
});

// fis.unhook('commonjs');
// fis.hook('amd', {
//   baseUrl: './modules',
//   extList: ['.js', '.es']
// });


/*************************目录规范*****************************/


fis.match('/imgs/**', {
    release: '${project.static}/$&'
});


// 开启同名依赖
fis.match('/modules/**', {
    useSameNameRequire: true
});

// ------ 配置lib
fis.match('/lib/**.js', {
    release: '${project.static}/$&'
});


// ------ 配置components
fis.match('/components/**', {
    release: '${project.static}/$&'
});
fis.match('/components/**.css', {
    isMod: true,
    release: '${project.static}/$&'
});
fis.match('/components/**.js', {
    isMod: true,
    release: '${project.static}/$&'
});


// ------ 配置modules
//{!(/modules/widget/(**)), /modules/(**)}
fis.match("/modules/(**)", {
    release: '${project.static}/$1'
});


//  ------ 配置 favicon.ico
fis.match('/favicon.ico', {
    release: '${project.static}/$1'
});
 
//node-sass
//fis-parser-node-sass

// 配置css
fis.match(/^\/modules\/(.*\.scss)$/i, {
    rExt: '.css',
    isMod: true,
    release: '${project.static}/$1',
    parser: fis.plugin('node-sass', {
        include_paths: ['./modules/css', './components'] // 加入文件查找目录
    }),
    postprocessor: fis.plugin('autoprefixer', {
        browsers: ['> 1% in CN', 'last 2 versions', 'IE >= 8'] // pc
            // browsers: ['Android >= 4', 'iOS >= 6', 'and_uc > 9'] // wap
    })
});
fis.match(/^\/modules\/(.*\.css)$/i, {
    isMod: true,
    release: '${project.static}/$1',
    postprocessor: fis.plugin('autoprefixer', {
        browsers: ['> 1% in CN', "last 2 versions", "IE >= 8"] // pc
            // browsers: ["Android >= 4", "ChromeAndroid > 1%", "iOS >= 6"] // wap
    })
});

fis.match(/^\/modules\/(.*\.(?:png|jpg|gif))$/i, {
    release: '${project.static}/$1'
});

// 配置js
fis.match(/^\/modules\/(.*\.es)$/i, {
    parser: fis.plugin('babel-5.x'),
    rExt: 'js',
    isMod: true,
    release: '${project.static}/$1'
});
fis.match(/^\/modules\/(.*\.js)$/i, {
    isMod: true,
    release: '${project.static}/$1'
});


// ------ 配置前端模版 使用template.js
fis.match('**.tmpl', {
    parser: fis.plugin('template', {
        sTag: '<#',
        eTag: '#>',
        global: 'template'
    }),
    isJsLike: true,
    release: false
});


// ------ 配置模拟数据
fis.match('/test/**', {
    release: '$0'
});
fis.match('/test/server.conf', {
    release: '/config/server.conf'
});

fis.match('*.jsx', {
    rExt: '.js',
    parser: fis.plugin('react', {})
});

//test html map route
fis.match("/page/maproute.html", {
    release: 'index.html'
});


/*************************打包规范*****************************/

// 因为是纯前端项目，依赖不能自断被加载进来，所以这里需要借助一个 loader 来完成，
// 注意：与后端结合的项目不需要此插件!!!
fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        //include: ""
        allInOne: false, //js&css打包成一个文件
        sourceMap: true, //是否生成依赖map文件
        resourceType: 'commonJs', //[auto, amd, cmd, commonJs]
        useInlineMap: true // 资源映射表内嵌|是否将sourcemap作为内嵌脚本输出
    })
});

// 公用js
var map = {
    'prd-debug': {
        host: '',
        path: ''
    },
    'prd': {
        host: '${project.host}',
        path: '${project.name}'
    }
};

fis.config.merge({
    pack: {
        '/static/pkg/base.js': ['lib/mod.js', '/components/jquery/*.js', '/modules/lib/ysbbase.js']
    }
});


fis.util.map(map, function(k, v) {

    var domain = v.host + v.path;

    fis.media(k)
        .match('**.{es,js}', {
            useHash: false,
            domain: domain
        })
        .match('**.{scss,css}', {
            useSprite: true,
            useHash: false,
            domain: domain
        })
        .match('::image', {
            useHash: false,
            domain: domain
        })
        .match('**/(*_{x,y,z}.png)', {
            release: '/static/pkg/$1'
        })
        // 启用打包插件，必须匹配 ::package
        .match('::package', {
            spriter: fis.plugin('csssprites', {
                layout: 'matrix',
                // scale: 0.5, // 移动端二倍图用
                margin: '10',

            }),
            postpackager: fis.plugin('loader', {
                allInOne: false,
            })
        })
        .match('/lib/es5-{shim,sham}.js', {
            packTo: '/static/pkg/es5-shim.js'
        })
        .match('/components/**.css', {
            packTo: '/static/pkg/components.css'
        })
        .match('/components/**.js', {
            packTo: '/static/pkg/components.js'
        })
        .match('/modules/**.{scss,css}', {
            packTo: '/static/pkg/modules.css'
        })
        .match('/modules/css/**.{scss,css}', {
            packTo: ''
        })
        .match('/modules/css/common.scss', {
            packTo: '/static/pkg/common.css'
        })
        .match('/modules/**.{es,js}', {
            packTo: '/static/pkg/modules.js'
        })
        .match('/modules/app/**.{es,js}', {
            packTo: '/static/pkg/aio.js'
        })
});

// 发布产品库
// fis.media('prd')
//     .match('**.{es,js}', {
//         optimizer: fis.plugin('uglify-js')
//     })
//     .match('**.{scss,css}', {
//         optimizer: fis.plugin('clean-css', {
//             'keepBreaks': false //保持一个规则一个换行
//         })
//     });

//fis3 release prd -d E:\git_ysb\ysb-fe-personal
fis.media('pub')
    .match('*', {
        deploy: fis.plugin('local-deliver', {
            to: 'E:/git_ysb/ysb-fe-personal'
        })
    });
// .match('::package', {
//   packager: fis.plugin('deps-pack', {
//      'static/pkg/frame.css':[
//        '/static/scss/**.css',
//        '/static/scss/**.scss',
//        '/widget/**.scss'
//      ],
//      'static/pkg/boot.js': [
//         'static/js/require.js',
//         'components/jquery/jquery.js',
//         'modules/lib/ysbbase.js'
//      ]
//   })
// })
