/* 
* @Author: Marte
* @Date:   2016-12-23 13:00:48
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-26 14:52:30
*/
/*========================拖拽排序==========================*/
        function dropPrev(treeId, nodes, targetNode) {
            var pNode = targetNode.getParentNode();
            if (pNode && pNode.dropInner === false) {
                return false;
            } else {
                for (var i=0,l=curDragNodes.length; i<l; i++) {
                    var curPNode = curDragNodes[i].getParentNode();
                    if (curPNode && curPNode !== targetNode.getParentNode() && curPNode.childOuter === false) {
                        return false;
                    }
                }
            }
            return true;
        }
        function dropInner(treeId, nodes, targetNode) {
            if (targetNode && targetNode.dropInner === false) {
                return false;
            } else {
                for (var i=0,l=curDragNodes.length; i<l; i++) {
                    if (!targetNode && curDragNodes[i].dropRoot === false) {
                        return false;
                    } else if (curDragNodes[i].parentTId && curDragNodes[i].getParentNode() !== targetNode && curDragNodes[i].getParentNode().childOuter === false) {
                        return false;
                    }
                }
            }
            return true;
        }
        function dropNext(treeId, nodes, targetNode) {
            var pNode = targetNode.getParentNode();
            if (pNode && pNode.dropInner === false) {
                return false;
            } else {
                for (var i=0,l=curDragNodes.length; i<l; i++) {
                    var curPNode = curDragNodes[i].getParentNode();
                    if (curPNode && curPNode !== targetNode.getParentNode() && curPNode.childOuter === false) {
                        return false;
                    }
                }
            }
            return true;
        }

        var log, className = "dark", curDragNodes, autoExpandNode;
        function beforeDrag(treeId, treeNodes) {
            className = (className === "dark" ? "":"dark");
            showLog("[ "+getTime()+" beforeDrag ]&nbsp;&nbsp;&nbsp;&nbsp; drag: " + treeNodes.length + " nodes." );
            for (var i=0,l=treeNodes.length; i<l; i++) {
                if (treeNodes[i].drag === false) {
                    curDragNodes = null;
                    return false;
                } else if (treeNodes[i].parentTId && treeNodes[i].getParentNode().childDrag === false) {
                    curDragNodes = null;
                    return false;
                }
            }
            curDragNodes = treeNodes;
            return true;
        }
        function beforeDragOpen(treeId, treeNode) {
            autoExpandNode = treeNode;
            return true;
        }
        function beforeDrop(treeId, treeNodes, targetNode, moveType, isCopy) {
            className = (className === "dark" ? "":"dark");
            showLog("[ "+getTime()+" beforeDrop ]&nbsp;&nbsp;&nbsp;&nbsp; moveType:" + moveType);
            showLog("target: " + (targetNode ? targetNode.name : "root") + "  -- is "+ (isCopy==null? "cancel" : isCopy ? "copy" : "move"));
            return true;
        }
        function onDrag(event, treeId, treeNodes) {
            className = (className === "dark" ? "":"dark");
            showLog("[ "+getTime()+" onDrag ]&nbsp;&nbsp;&nbsp;&nbsp; drag: " + treeNodes.length + " nodes." );
        }
        function onDrop(event, treeId, treeNodes, targetNode, moveType, isCopy) {
            className = (className === "dark" ? "":"dark");
            showLog("[ "+getTime()+" onDrop ]&nbsp;&nbsp;&nbsp;&nbsp; moveType:" + moveType);
            showLog("target: " + (targetNode ? targetNode.name : "root") + "  -- is "+ (isCopy==null? "cancel" : isCopy ? "copy" : "move"));

            /*=========改变顺序后的方法写在此处=========*/
            var pNode = targetNode.getParentNode();
            console.log(pNode.id); //当前元素的父级的id
            console.log(pNode.children); //拖拽排序后的数据集合
            console.log(pNode.children[0].id); //从新排序后的元素的id
            var aIdArr = new Array();
            var str ;
            for (var i = 0; i < pNode.children.length; i++) {
                console.log(pNode.children[i].id);
                str += pNode.children[i].id
            }
            /*=========改变顺序后的方法写在此处=========*/
        }
        function onExpand(event, treeId, treeNode) {
            if (treeNode === autoExpandNode) {
                className = (className === "dark" ? "":"dark");
                showLog("[ "+getTime()+" onExpand ]&nbsp;&nbsp;&nbsp;&nbsp;" + treeNode.name);
            }
        }

        function showLog(str) {
            if (!log) log = $("#log");
            log.append("<li class='"+className+"'>"+str+"</li>");
            if(log.children("li").length > 8) {
                log.get(0).removeChild(log.children("li")[0]);
            }
        }