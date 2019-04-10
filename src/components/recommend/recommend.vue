<!--<template>
  <div class="hello" >
  </div>
</template>-->
<template>
  <div class="video_container">
    <!--视频信息-->
    <video id="myVideo" class="video_box video-js" width="auto" height="100% !important" >
      <source src="static/video/video3.mp4" type="video/mp4">
    </video>
    <!--底部信息描述start-->
    <div class="production_box">
      <div class="head">
        <div class="heads">
          <img src="static/img/sky.jpg" alt=""/>
        </div>
        <p class="username">user</p>
        <span  class="iconfont-my focus" v-bind:class="{ cancelfocus: isCancel}" v-on:click="cancelfoucus()">{{state}}</span>
        <div style="clear:both"></div>
      </div>
      <div class="position">
        <div style="font-size:13px ;color:#c9c9c9"><span class="iconfont-my like" style="font-size:18px !important;color:#c9c9c9"  >&#xe650;</span>浙江省杭州市江干区</div>
      </div>
      <div class="production_des">
        <span class="production_sign" >#景点</span>
        年轻的时候要注意‘养生’，少玩手机多睡觉！少玩手机多睡觉！少玩手机多睡觉！切记少玩手机多睡觉！少玩手机多睡觉！少玩手机多睡觉！
      </div>
      <!--点赞，评论，分享-->
      <div class="tools_bttom">

          <div class="tools_b_li" >

            <span class="iconfont-my like icon_right icon-mylike " v-bind:class="{ mylikefill: islike}" v-on:click="like()"></span>

            <div class="tools_r_num">{{likecount}}</div>

          </div>
        <div class="tools_b_li" >

          <span class="iconfont-my relay icon_right" @click="relay()">&#xe6eb;</span>

         <div class="tools_r_num">5.5w</div>
         <div class="tools_b_li" @click="message()">

            <span class="iconfont-my message icon_right">&#xe6bc;</span>

            <div class="tools_r_num">5.5w</div>
          </div>

        </div>

      </div>
    </div>
    <!--底部信息描述end-->
    <!--分享弹框start-->
    <div class="share_hover" ></div>
    <div class="share_box" :class="showShareBox?'share_active':''">

      <div class="share_tips">分享到</div>

      <ul class="share_ul">

        <li class="share_li">

          <i class="iconfont-my icon-mywang pengyouquan"></i>

        </li>

        <li class="share_li">

          <i class="iconfont-my icon-mywang pengyouquan"></i>

        </li>

        <li class="share_li" @click="copyUrl">

          <i class="iconfont-my icon-myweibo lianjie"></i>

        </li>

        <div class="clear"></div>

      </ul>

      <div class="share_cancel" @click="cancelrelay">取消</div>

    </div>
    <!--分享弹框end-->
    <!--评论弹框start-->
    <div class="message_hover" ></div>
    <div class="message_box " :class="showMessageBox?'message_active':''">
      <div>
        <p style="text-align:center;font-weight: bold;margin-top:10px; font-size:15px;">728条评论<span class="iconfont-my cancelrate icon-mymove " v-on:click="cancelrate()"></span></p>
      </div>
      <div class="rating-wrapper">
        <ul v-show="ratingcount">
          <li v-for="rating in ratings " :key='rating.key' class="rating-item">
            <div class="user">
              <img class="avatar" width="20" height="20" :src="rating.avatar">
              <span class="name">{{rating.username}}</span>
            </div>
            <p class="text">
              {{rating.text}}
              <span class="time">{{rating.rateTime}}</span>
            </p>
            <span class="iconfont-my rating-like" :class="{'icon-mylike' : ratinglike===0,'mylikefill' : ratinglike===1}"></span>
            <div class="rlikenum">5.5w</div>
            <!--回复-->
            <ul v-show="replycount">
              <li v-for="reply in replys" :key='reply.key' class="rating-item">
                <div class="user">
                  <img class="avatar" width="20" height="20" :src="reply.avatar">
                  <span class="name">{{reply.username}}</span>
                </div>
                <p class="text">
                  <span v-show="reply.replyname.length!=0">回复<span style="font-size:8px;color:rgb(147,153,159)">{{reply.replyname}}</span>:</span>{{reply.text}}
                  <span class="time">{{reply.rateTime}}</span>
                </p>
                <span class="iconfont-my reply-like" :class="{'icon-mylike' : ratinglike===0,'mylikefill' : ratinglike===1}"></span>
                <div class="rylikenum">5.5w</div>
              </li>
            </ul>
            <!--回复end-->
          </li>
        </ul>
      </div>
      <ul class="message_ul">

        <div class="clear"></div>

      </ul>

    </div>
    <!--评论弹框end-->
    <!--test-->
    <!--test-->
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: "rvideo",
    data() {
      return {
        isCancel:false,
        state:"关注",
        islike:false,
        likecount:123,
        showShareBox:false,
        showMessageBox: false,
        value:true,
        ratingcount:6,
        replycount:3,
        ratinglike:1,
        tempreplys:[],
        ratings: [
          { id:'',
            username: 'Runoob' ,
            avatar:'static/img/sky.jpg',
            rateTime:'40分钟前',
            text:'良辰美景奈何天，赏心乐事谁家院'
          },
          { id:'',
            username: 'BOb' ,
            avatar:'static/img/smiling.jpg',
            rateTime:'40分钟前',
            text:'良辰美景奈何天，赏心乐事谁家院'
          },
          { id:'',
            username: 'Cndy' ,
            avatar:'static/img/sky.jpg',
            rateTime:'40分钟前',
            text:'良辰美景奈何天，赏心乐事谁家院'
          },
          { id:'',
            username: 'Deny' ,
            avatar:'static/img/smiling.jpg',
            rateTime:'40分钟前',
            text:'良辰美景奈何天，赏心乐事谁家院'
          },
          { id:'',
            username: 'Eilly' ,
            avatar:'static/img/sky.jpg',
            rateTime:'40分钟前',
            text:'良辰美景奈何天，赏心乐事谁家院'
          },
          { id:'',
            username: 'Fine' ,
            avatar:'static/img/smiling.jpg',
            rateTime:'40分钟前',
            text:'良辰美景奈何天，赏心乐事谁家院'
          },
        ],
        replys:[
          { id:'',
            username: 'Runoob' ,
            replyname:'Fine',
            avatar:'static/img/sky.jpg',
            rateTime:'40分钟前',
            text:'则为你如花美眷，似水流年。'
          },
          { id:'',
            username: 'Bob' ,
            replyname:'',
            avatar:'static/img/smiling.jpg',
            rateTime:'40分钟前',
            text:'则为你如花美眷，似水流年。'
          },
          { id:'',
            username: 'Fine' ,
            replyname:'',
            avatar:'static/img/sky.jpg',
            rateTime:'40分钟前',
            text:'则为你如花美眷，似水流年啊啊啊啊。'
          }
        ],

      };
    },
    components: {
    },
    mounted() {
      this.initVideo();
      this.scroll(this.ratings);
    },
    created(){
      //for(var i=0;i<this.replys.length;i++){
      if(this.replys.length>=1)
        this.tempreplys.push(this.replys[0]);
     // }
    },

    methods: {
      //初始化视频方法
      initVideo() {
        //初始化视频方法
        let myPlayer = this.$video(myVideo, {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          autoplay: "muted",
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          //设置视频播放器的显示宽度（以像素为单位）
          width: "100%",
          //设置视频播放器的显示高度（以像素为单位）
          height: "100%",
          //Video.js播放器将具有流畅的大小。换句话说，它将扩展以适应其容器。
          fluid: true
        });
      },
      //取消关注
      cancelfoucus: function (message) {
        this.isCancel=!this.isCancel;
        if(this.isCancel)
          ;//this.state="取消关注";
        else
          this.state="关注";
      },
      //取消评论
      cancelrate: function () {
        this.showMessageBox=false;
      },
      //回复
      relay:function(){
        this.showShareBox=!this.showShareBox;
        this.myGlobal.setdisplay(true);
      },
      //取消回复
      cancelrelay:function(){
        this.showShareBox=false
      },
      //复制链接
      copyUrl:function(){

      },
      //评论框处理
      message:function(){
        this.showMessageBox=!this.showMessageBox
      },
      //点赞
      like:function(){
        this.islike=!this.islike;
        if(this.islike){
          this.likecount++;
        }
        else{
          this.likecount--;
        }
      },

      scroll(ratings) {
        let isLoading = false
        window.onscroll = () => {
          // 距离底部200px时加载一次
          let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 10
          if (bottomOfWindow && isLoading == false) {
            isLoading = true
            axios.get(`https://randomuser.me/api/`).then(response => {
              person.push(response.data.results[0])
              isLoading = false
            })
          }
        }
      },
      //点击加载更多评论
      listClick2: function(index){
        this.tempreplys.push(this.replys);
      },
    }
  };
</script>

<!--<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
