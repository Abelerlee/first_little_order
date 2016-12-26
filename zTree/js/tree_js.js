/* 
* @Author: Marte
* @Date:   2016-12-22 13:42:11
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-26 16:36:40
*/
        var setting = {
            edit: {
                drag: {
                    autoExpandTrigger: true,
                    prev: dropPrev,
                    inner: dropInner,
                    next: dropNext,
                },
                enable: true,
                showRemoveBtn: false,
                showRenameBtn: false,
            },
            check: {
                 enable: true,
                 nocheckInherit: true
            },
            data: {
                simpleData: {
                    enable: true,
                }
            },
            view: {             
                showLine: true,
                selectedMulti: true,
                dblClickExpand: false,
            },
            async: {
                enable: true
            },
            callback: {

                beforeDrag: beforeDrag,
                beforeDrop: beforeDrop,
                beforeDragOpen: beforeDragOpen,
                onDrag: onDrag,
                onDrop: onDrop,
                onExpand: onExpand,

                onRightClick: OnRightClick,

                onCheck: onCheck,

                beforeRemove: beforeRemove,
                onRemove: onRemove,

                beforeRename: beforeRename,
            }
        };

        var zNodes = [
            { id:1, pId:0, name:"电", open:true, childOuter:false,drag:false, nocheck:true},
                { id:11, pId:1, name:"景观用电", open:true, childOuter:false},
                    { id:111, pId:11, name:"can drag 1-1-1", dropRoot:false},
                    { id:112, pId:11, name:"can drag 1-1-2", dropRoot:false},
                    { id:113, pId:11, name:"can drag 1-1-3", dropRoot:false},
                    { id:114, pId:11, name:"can drag 1-1-4", dropRoot:false},
                    { id:115, pId:11, name:"can drag 1-1-5", dropRoot:false},
                    { id:116, pId:11, name:"can drag 1-1-6", dropRoot:false},
                    { id:117, pId:11, name:"can drag 1-1-7", dropRoot:false},
                    { id:118, pId:11, name:"can drag 1-1-8", dropRoot:false},
                    { id:119, pId:11, name:"can drag 1-1-9", dropRoot:false},
                { id:12, pId:1, name:"水景用电", open:true, childOuter:false},
                    { id:121, pId:12, name:"can drag 1-2-1",dropRoot:false},
                    { id:122, pId:12, name:"can drag 1-2-2",dropRoot:false},
                    { id:123, pId:12, name:"can drag 1-2-3",dropRoot:false},
                    { id:124, pId:12, name:"can drag 1-2-4",dropRoot:false},
                    { id:125, pId:12, name:"can drag 1-2-5",dropRoot:false},
                    { id:126, pId:12, name:"can drag 1-2-6",dropRoot:false},
                    { id:127, pId:12, name:"can drag 1-2-7",dropRoot:false},
                    { id:128, pId:12, name:"can drag 1-2-8",dropRoot:false},
                    { id:129, pId:12, name:"can drag 1-2-9",dropRoot:false},
                { id:13, pId:1, name:"照明用电", open:true, childOuter:false},
                    { id:131, pId:13, name:"can drag 1-3-1",dropRoot:false},
                    { id:132, pId:13, name:"can drag 1-3-2",dropRoot:false},
                    { id:133, pId:13, name:"can drag 1-3-3",dropRoot:false},
                    { id:134, pId:13, name:"can drag 1-3-4",dropRoot:false},
                    { id:135, pId:13, name:"can drag 1-3-5",dropRoot:false},
                    { id:136, pId:13, name:"can drag 1-3-6",dropRoot:false},
                    { id:137, pId:13, name:"can drag 1-3-7",dropRoot:false},
                    { id:138, pId:13, name:"can drag 1-3-8",dropRoot:false},
                    { id:139, pId:13, name:"can drag 1-3-9",dropRoot:false},
            { id:2, pId:0, name:"水", open:true, childOuter:false,drag:false,nocheck:true},
                { id:21, pId:2, name:"景观用水", open:true, childOuter:false},
                    { id:211, pId:21, name:"can drag 2-1-1", dropRoot:false},
                    { id:212, pId:21, name:"can drag 2-1-2", dropRoot:false},
                    { id:213, pId:21, name:"can drag 2-1-3", dropRoot:false},
                    { id:214, pId:21, name:"can drag 2-1-4", dropRoot:false},
                    { id:215, pId:21, name:"can drag 2-1-5", dropRoot:false},
                    { id:216, pId:21, name:"can drag 2-1-6", dropRoot:false},
                    { id:217, pId:21, name:"can drag 2-1-7", dropRoot:false},
                    { id:218, pId:21, name:"can drag 2-1-8", dropRoot:false},
                    { id:219, pId:21, name:"can drag 2-1-9", dropRoot:false},
            { id:3, pId:0, name:"油", open:true, childOuter:false,drag:false,nocheck:true},
                { id:31, pId:3, name:"汽油质量", open:true, childOuter:false},
                    { id:311, pId:31, name:"can drag 3-1-1", dropRoot:false},
                    { id:312, pId:31, name:"can drag 3-1-2", dropRoot:false},
                    { id:313, pId:31, name:"can drag 3-1-3", dropRoot:false},
                    { id:314, pId:31, name:"can drag 3-1-4", dropRoot:false},
                    { id:315, pId:31, name:"can drag 3-1-5", dropRoot:false},
                    { id:316, pId:31, name:"can drag 3-1-6", dropRoot:false},
                    { id:317, pId:31, name:"can drag 3-1-7", dropRoot:false},
                    { id:318, pId:31, name:"can drag 3-1-8", dropRoot:false},
                    { id:319, pId:31, name:"can drag 3-1-9", dropRoot:false},
            { id:4, pId:0, name:"气", open:true, childOuter:false,drag:false,nocheck:true},
                { id:41, pId:4, name:"燃气用量", open:true, childOuter:false},
                    { id:411, pId:41, name:"can drag 4-1-1", dropInner:false},
                    { id:412, pId:41, name:"can drag 4-1-2", dropRoot:false},
                    { id:413, pId:41, name:"can drag 4-1-3", dropRoot:false},
                    { id:414, pId:41, name:"can drag 4-1-4", dropRoot:false},
                    { id:415, pId:41, name:"can drag 4-1-5", dropRoot:false},
                    { id:416, pId:41, name:"can drag 4-1-6", dropRoot:false},
                    { id:417, pId:41, name:"can drag 4-1-7", dropRoot:false},
                    { id:418, pId:41, name:"can drag 4-1-8", dropRoot:false},
                    { id:419, pId:41, name:"can drag 4-1-9", dropRoot:false},
        ];

        var zNodes_opp = [
                    { id:111, pId:11, name:"添加1111111111"},
                    { id:112, pId:11, name:"添加2222222222"},
                    { id:113, pId:11, name:"添加3333333333"},
                    { id:114, pId:11, name:"添加4444444444"},
                    { id:115, pId:11, name:"添加5555555555"},
                    { id:116, pId:11, name:"添加6666666666"}
        ];
/*  获取时间  */
        function getTime() {
            var now= new Date(),
            h=now.getHours(),
            m=now.getMinutes(),
            s=now.getSeconds(),
            ms=now.getMilliseconds();
            return (h+":"+m+":"+s+ " " +ms);
        };
/* 执行关闭方法 */
        function onClickOff(obj) {
            obj.hide();
        }
/* 初始化方法 */
        function initTree() {
            alert("树形结构");
            //初始化文件
            $.fn.zTree.init($("#treeDemo"), setting, zNodes);
            zTree = $.fn.zTree.getZTreeObj("treeDemo");
        }

/*  初始化加载tree文件 */
        var zTree, zTree_opp, rMenu;
        $(document).ready(function(){
            initTree();
            rMenu = $("#rMenu");
            //获取树型结构
            zTree_Menu = $.fn.zTree.getZTreeObj("treeDemo");
            curMenu = zTree_Menu.getNodes()[0].children[0].children[0];
            zTree_Menu.selectNode(curMenu);
            var a = $("#" + zTree_Menu.getNodes()[0].tId + "_a");
            a.addClass("cur");

            //绑定事件
            $("#nocheckTrue").bind("click", {nocheck: true}, nocheckNode);
            $("#nocheckFalse").bind("click", {nocheck: false}, nocheckNode);
            $("#m_edit").bind("click", edit);

            //保存添加的表柜方法
            var name_bg = "";
            $("#sure_an_bg").click(function() {
                alert("添加表柜");
                name_bg = $("#bg_name").val()
                console.log(name_bg);
                if(name_bg == "") {
                    alert("您输入的字段为空，请重新输入或关闭");
                }else{
                    console.log("--------"+name_bg);
                    console.log("--------"+ID);
                    $('#opp_bg').hide();
                }
                initTree();
            });
            // 保存添加表单的方法          
            $("#sure_an_bd").click(function() {
                alert("提交添加选中的表单");
                console.log(checked_arrNodes)
                console.log(checked_arrNodes.length)
                if(parseInt(checked_arrNodes.length) > 0) {
                    $("#opp_bd").hide();
                    console.log(checked_arrNodes);
                }else{
                    alert("请选择或关闭");
                }    
                initTree();
            });
           
            
        });

/* 添加表单弹窗文件 */
        $(document).ready(function(){
            $.fn.zTree.init($("#treeDemo_opp"), setting, zNodes_opp);
            zTree = $.fn.zTree.getZTreeObj("treeDemo_opp");
            zTree_Menu = $.fn.zTree.getZTreeObj("treeDemo_opp");
        });
