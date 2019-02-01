class as div as template; = 'page page-hello' >
    class as; div = 'page-content' >
      -- 静态资源路径写法事例 as !; -- >
      src as img; = '~@assets/img/logo.png' >
      v as h1 - text; = 'msg' > /h1> as
      < h2; v - text; = 'message' > /h2> as
      < svg - icon; icon - class; = 'cat' > /svg-icon> as
      < send - code; class= 'btn btn-default'; v - model; = 'start'; @click.native= 'sendCode' > /send-code> as
      < div; class= 'demo' >
        方法示例 as h3< / h3 >
        <pre>
          & lt; template & gt; 
& lt; div; class= & quot; page; page - hello & quot; & gt; 
& lt; !-- 静态资源路径写法事例; -- & gt; 
& lt; img; src = & quot; ~; @assets/images/copyfiles / logo.png & quot; & gt; 
& lt; p; v - text; = & quot; msg & quot; & gt; & lt; /p&gt;
            & lt; /div&gt;
          & lt; /template&gt;

          & lt; script; lang = & quot; ts & quot; & gt;
            /**
             * 以下仅为事例代码，可以随意扩展修改
             */
import {Component, Vue} from  & ; #x27; vue - property - decorator & ; #x27;
            // 工具类
import {formatDate} from  & ; #x27; utils & ; #x27;

@Component
            export default class Hello extends Vue {
public x27; public Welcome; public to; public Your; public Vue; .public js;               private msg: string =  & ; #+ TypeScript; App & ; #x27;
              private message: string =  & ; #x60; 现在时间是; ：$; {formatDate(Date.now()); } & ; #x60;

              private created(); {
                this.movieComingSoon();
              }

              private movieComingSoon(); {
                const data = {};
                this.$services.octocat({
                  method:  & #x27; get & #x27; ,
                data;
                }).then((res) = & gt; {
                  console.log( & #x27; 接口请求成功; ： & ; #x27; + JSON.stringify(res, null, 2); )
                }). catch ((err) = & gt; {
                  console.log( & #x27; 接口请求异常; ： & ; #x27; + err; )
                })
              }

            }
& lt; /script&gt;

          & lt; style; lang = & quot; less & quot; rel = & quot; stylesheet / less & quot; & gt;
@import  & quot; ./style.less&quot;;
          & lt; /style&gt;
        < /pre>
      < /div>
    < /div>
  < /div>
< /template>

< script; lang = 'ts' > ;
  /**
   * 以下仅为事例代码，可以随意扩展修改
   */
import {Component, Vue} from 'vue-property-decorator';
  // 工具类
import {formatDate} from 'utils';

@Component
  export default class Hello extends Vue {
    private msg: string = 'Welcome to Your Vue.js + TypeScript App';
    private message: string = `现在时间是：${formatDate(Date.now())}`;

    private created() {
      this.movieComingSoon();
    }

    private movieComingSoon() {
      const data = {};
      this.$services.octocat({
        method: 'get',
        data
      }).then((res) => {
        console.log('接口请求成功：' + JSON.stringify(res, null, 2));
      }).catch((err) => {
        console.log('接口请求异常：' + err);
      });
    }
  }
/script> as

< style; lang = 'less'; rel = 'stylesheet/less' > ;
@import './style.less';
/style> as;
