/* 
* @Author: Marte
* @Date:   2016-12-23 13:07:28
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-26 17:27:53
*/
/*========================右键菜单==========================*/
            var ID,treeNodeLevel,changeWrap;
            function OnRightClick(event, treeId, treeNode) {
                console.log(treeNode.level);
                console.log(typeof(treeNode.level))
                ID = treeNode.id;
                treeNodeLevel = treeNode.level
                if(treeNode.level == 0){
                    zTree.cancelSelectedNode();
                    showRMenu("root", event.clientX, event.clientY);
                }
                if(treeNode.level == 1){
                    zTree.selectNode(treeNode);
                    showRMenu("node_0", event.clientX, event.clientY);
                }
                if(treeNode.level == 2){
                    zTree.selectNode(treeNode);
                    showRMenu("node", event.clientX, event.clientY);
                }
                
                /*if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
                    zTree.cancelSelectedNode();
                    showRMenu("root", event.clientX, event.clientY);
                } else if (treeNode && !treeNode.noR) {
                    zTree.selectNode(treeNode);
                    showRMenu("node", event.clientX, event.clientY);
                }*/
            }

            function showRMenu(type, x, y) {
                $("#rMenu ul").show();
                if(type == "root"){
                    $("#m_add").show();
                    $("#m_del").hide();
                    $("#m_edit").hide();
                }
                if(type == "node_0"){
                    $("#m_add").show();
                    $("#m_del").show();
                    $("#m_edit").show();
                }   
                
                if(type == "node"){
                    $("#m_add").hide();
                    $("#m_del").show();
                    $("#m_edit").hide();
                }
                rMenu.css({"top":y+"px", "left":x+"px", "visibility":"visible"});
                $("body").bind("mousedown", onBodyMouseDown);
            }
            function hideRMenu() {
                if (rMenu) {
                    rMenu.css({"visibility": "hidden"});
                }
                $("body").unbind("mousedown", onBodyMouseDown);
            }
            function onBodyMouseDown(event){
                if (!(event.target.id == "rMenu" || $(event.target).parents("#rMenu").length>0)) {
                    rMenu.css({"visibility" : "hidden"});
                }
            }

            //var addCount = 1;
            
            function addTreeNode() {
                hideRMenu();
                console.log(ID);
                if(treeNodeLevel == 0){
                    alert("添加表柜");
                    $("#opp_bg").show();
                }

                if(treeNodeLevel == 1){
                    alert("添加表单");
                    $("#opp_bd").show();
                }
                $("#rMenu").hide();
            }

            function beforeRemove(treeId, treeNode) {
                className = (className === "dark" ? "":"dark");
                showLog("[ "+getTime()+" beforeRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
                return confirm("确认删除 节点 -- " + treeNode.name + " 吗？");
            }
            function onRemove(e, treeId, treeNode) {
                showLog("[ "+getTime()+" onRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
            }
            //删除表柜 传该表柜的ID 
            //删除表单 传该表柜的ID  传该表单的ID 
            function remove(e) {
                hideRMenu();
                var zTree = $.fn.zTree.getZTreeObj("treeDemo");
                var nodes = zTree.getSelectedNodes();
                var treeNode = nodes[0];
                console.log(treeNode);

                
                console.log(pNode);
                if (nodes.length == 0) {
                    alert("请先选择一个节点");
                    return;
                }
                if(treeNode.level === 1){
                    confirm("确认删除"+ treeNode.name+"表柜");
                    //console.log(treeNode.id);
                    var callbackFlag = $("#callbackTrigger").attr("checked");
                    zTree.removeNode(treeNode, callbackFlag);

                    //zTree.updateNode(nodes[0]);
                    //zTree.refresh();
                    //zTree.reAsyncChildNodes(nodes[0], "refresh");
                    return;
                }
                if(treeNode.level === 2){
                    //console.log(treeNode.id);
                    //console.log(treeNode.pId);
                    confirm("确认删除"+ treeNode.name+"表单");
                    //console.log(treeNode.ID);
                    var callbackFlag = $("#callbackTrigger").attr("checked");
                    zTree.removeNode(treeNode, callbackFlag);
                    return;
                }   
            };

            function beforeRename(treeId, treeNode, newName) {
                if (newName.length == 0) {
                    alert("节点名称不能为空.");
                    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
                    setTimeout(function(){zTree.editName(treeNode)}, 10);
                    return false;
                }
                return true;
            }

            function edit() {
                var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
                nodes = zTree.getSelectedNodes(),
                treeNode = nodes[0];
                console.log(treeNode);
                console.log("mmmmmmmmmmmmmmmmmmmmmmmmm"+treeNode.id);
                if (nodes.length == 0) {
                    alert("请先选择一个节点");
                    return;
                }
                //console.log(treeNode.name);

                $("#opp_rename").show();            
                $("#sure_an_rename").click(function() {
                    hideRMenu();
                    alert("修改了表柜名称");
                    //console.log($("#rename_name").val());
                    //console.log($("#rename_name").val().length)
                    if($("#rename_name").val() != " ") {
                        
                        $("#opp_rename").hide();
                    }else{
                        alert("请选择或关闭");
                    }  
                });    
            };
/*========================右键菜单==========================*/
