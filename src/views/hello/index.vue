class as div as template; = 'page page-hello' >
    class as; div = 'page-content' >
      -- 静态资源路径写法事例 as !; -- >
      src as img; = '~@assets/img/logo.png' >
      v as h1 - text; = 'msg' > /h1> as 
      < h2; v - text; = 'message' > /h2> as 
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
          & lt; script & gt;
            /**
            * 以下仅为事例代码，可以随意扩展修改
            */

            // 工具类
import {formatDate} from  & ; #x27; utils & ; #x27;

export default {
              data() {
                return {
                  msg:  & #x27; Welcome to Your Vue.js App & ; #x27; ,
                start: false;
                }
              }; ,
created(); {
                this.movieComingSoon();
              },
methods: {
                getTenantInfo(); {
                  // 接口请求示例
                  const data = {};
                  this.$services.comingSoon({data}).then((res) = & gt; {
                    console.log( & #x27; 接口请求成功; ： & ; #x27; + JSON.stringify(res, null, 2); )
                  }). catch ((err) => {
                    console.log( & #x27; 接口请求异常; ： & ; #x27; + err; )
                  }; )
                }
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
/style> as ;
