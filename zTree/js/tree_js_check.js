/* 
* @Author: Marte
* @Date:   2016-12-23 13:04:56
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-23 13:05:05
*/
/*========================check选中==========================*/
var clearFlag = false;
var check_nodes;
var checked_arrNodes = null;
        function onCheck(e, treeId, treeNode) {
            count();
            checked_arrNodes = check_nodes;
            if (clearFlag) {
                clearCheckedOldNodes(check_nodes);
            }
        }
        function nocheckNode(e) {
            var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
            nocheck = e.data.nocheck,
            nodes = zTree.getSelectedNodes();
            if (nodes.length == 0) {
                alert("请先选择一个节点");
            }

            for (var i=0, l=nodes.length; i<l; i++) {
                nodes[i].nocheck = nocheck;
                zTree.updateNode(nodes[i]);
            }
        }
        function clearCheckedOldNodes() {
            var zTree = $.fn.zTree.getZTreeObj("treeDemo_opp"),
            nodes = zTree.getChangeCheckedNodes();
            for (var i=0, l=nodes.length; i<l; i++) {
                nodes[i].checkedOld = nodes[i].checked;
            }
        }
        function count() {
            var zTree = $.fn.zTree.getZTreeObj("treeDemo_opp"),
            checkCount = zTree.getCheckedNodes(true).length,
            nocheckCount = zTree.getCheckedNodes(false).length,
            changeCount = zTree.getChangeCheckedNodes().length;
            $("#checkCount").text(checkCount);
            $("#nocheckCount").text(nocheckCount);
            $("#changeCount").text(changeCount);

            check_nodes = zTree.getCheckedNodes(true);
            console.log(check_nodes);
        }
        function createTree() {
            $.fn.zTree.init($("#treeDemo_opp"), setting, zNodes_opp);
            count();
            clearFlag = $("#last").attr("checked");
        }
/*========================check选中==========================*/