<template>
    <p>Party dashboard</p>
    <ul>
        <li v-for="(item,idx) in features" :key="idx">
            <span>{{ item.name }} </span>            
            <ul v-if="item.subs && item.subs.length >0 "> 
                <li v-for="(sub,sidx) in item.subs" :key="sidx">
                    <span>{{ sub.name}}</span>: 
                    <pre>{{ sub.sql? sub.sql.replace(/ \s /g,''):''}}</pre>
                    <span>{{ sub.memo }}</span><br/>                  
                </li>
            </ul>
        </li>        
    </ul>    
</template>
<script >
export default {
    name:"dashboard",
    mounted(){
        console.log(this.features[0].subs[0].sql.charAt(0));
        for (let index = 0; index < this.features[0].subs[0].sql.length; index++) {
           //console.log(this.features[0].subs[0].sql.charCodeAt(index));
        }
        //match(/\s/g)
        console.log(this.features[0].subs[0].sql.replace(/ \s /g,'')) //.replace(/\s/g,'')
    },
    data(){
        return {
            msg:'ok',
            features:[
                {name:'学习',
                    subs:[
                        {
                            name:'党课（次数）',
                            sql:'SELECT DISTINCT  c."meeting_name" \
                            FROM "party_three_meeting_one_course_member" m  \
	                        \r\n INNER JOIN "party_three_meeting_one_course" c ON m."meeting_id" =c."id"\
	                        \r\n -- 关联正式党员 \
                            \r\n INNER JOIN "party_user_basic" u ON u."id" =m."uid" \
                            \r\n LEFT JOIN "party_user_ext" x ON u."id" =x."uid" AND x."party_type"=\'正式党员\' \
                            \r\n WHERE 1=1  AND c."meeting_type" IN (3,4)  AND u."id" =230392',
                            memo:'条件：u.id=?'
                        },
                        {
                            name:'自主学习',
                            sql:'SELECT a."Name", b.* FROM "party_task_data_auto_learning" b\
                                INNER JOIN "party_main_data_auto_learning"  a ON b."MainDataGuid" = a."MainDataGuid" \
                                WHERE b."UserUid" =\'dhua\'',
                            memo:'条件: b.UserUid=?'
                        },
                        {
                            name:'专项学习',
                            sql:'select b.*,a.name from \
                            (SELECT DISTINCT MainDataGuid, StartDate, TYPE, Name FROM party_main_data) as a \
                            inner join party_task_data as b \
                                    on b.MainDataGuid=a.MainDataGuid where b.UserUid=\'dhua\' and a.TYPE = 6 \
                            ',
                            memo:'条件: b.UserUid=?'
                        },
                        {
                            name:'评测',
                            sql:'SELECT COUNT(*) FROM "party_train_exam" a  \
                                INNER  JOIN party_train_paper_task b ON a."TaskID" =b.ID \
                            WHERE a."UserUid" =\'dhua\' ',
                            memo:'条件：a.UserUid=?'
                        },
                        {
                            name:'线下培训',
                            sql:'select count(*)from party_offline_train_class c \
                                inner join party_offline_train_user u on c.id = u.class_id \
                                where c.is_del = 0  and u.is_del = 0  and u.user_id = 121455',
                            memo:'条件 u.user_id=?'
                        },
                        {
                            name:'云课堂',
                            sql:'暂无'
                        },
                        {
                            name:'党校培训'
                        }
                    ]
                },
                {
                    name:'荣誉',
                    subs:[
                        {
                            name:'荣誉次数',
                            sql:'SELECT pub."id",pub."user_name" ,"honor_type",count(*) AS "honor_type_count" \r\n FROM "party_user_basic" pub INNER JOIN "party_honor_detail" phd ON pub."id" =phd."uid" WHERE 1=1 AND pub."id" =121455  \r\n GROUP BY  pub."id", pub."user_name" , "honor_type";',
                            memo:'条件：pub.id=?'
                        },
                        {
                            name:'荣誉明细',
                            sql:' SELECT * FROM "party_honor_detail" phd WHERE phd."uid"=121455',
                            memo:'条件：phd.uid=?'
                        }
                    ]
                },
                {
                    name :'党费',
                    subs:[
                        {name:'党费通',memo:'找不到党费通标识'},
                        {name:'非党费通',memo:'找不到党费通标识'}
                    ]                    
                },
                {
                    name:'心得',
                    subs:[
                        {name:'网络党课',memo:''},
                        {name:'自主学习',memo:'参考学习情况'}

                    ]
                },
                {
                    name:'会议统计',
                    subs:[

                    ]
                },
                {name:'积分',
                    subs:[
                        {
                            name:'当前积分', 
                            sql:'SELECT SUM("R_currentValue") FROM "party_user_basic" pub LEFT JOIN "party_user_ext" pue ON pub."id" =pue."uid"\
                            INNER JOIN "party_person_integral" ppi ON ppi."R_uCode" =pub."oa_account" \r\n \
                            WHERE 1=1 AND pue."party_type" =\'正式党员\' AND ( OR pub."oa_account" =\'dhua\')-- 这里积分用的是oa_account，对应的是 ppi."R_uCode" =\'dhua\'\
                            ',
                            memo:''
                        },
                        {
                            name:'积分排名',
                            sql:'SELECT ppi."R_uCode",sum("R_currentValue") FROM "party_person_integral" ppi \r\n WHERE ppi."R_userOrgId" =	(SELECT TOP 1 ppi."R_userOrgId" FROM "party_person_integral" ppi WHERE ppi."R_uCode" =\'dhua\' )  GROUP BY ppi."R_uCode"  ORDER BY sum("R_currentValue") desc',
                            memo:'使用分组后排序后的关键字索引来最终获取排名'
                        },
                        {
                            name:'总排名',
                            sql:'SELECT ppi."R_uCode",sum("R_currentValue") FROM "party_person_integral" ppi \
                                GROUP BY ppi."R_uCode"ORDER BY sum("R_currentValue") DESC',
                            memo:''
                        }
                    ]
                },
            ]            
        }
    }
}
</script>
<style scoped>
    pre {
        white-space:break-spaces;
    }

    ul{
        list-style-type:none;
        li{
            margin-bottom: 5px;
        }
    }

    li span:nth-child(1){
        background-color: aquamarine;
    }
</style>