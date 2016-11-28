# first_little_order

the road for web

the road for git study

git 学习与命令操作

git安装与环境配置
    git config --global user.name "mmm"
    git config --global user.email aaaa@example.com
    --global 选项命令只需要运行一次，之后无论你在该系统上做任何事情， Git 都会使用那些信息。

创建版本库
    git init 初始化仓库

基本操作
    git add 添加文件到暂存区
    git commit 提交文件到仓库
    git diff 比对本地和版本库里面的文件
    git log 查看历史提交记录

git diff命令结论: 
    git diff 比较a跟b   
    git diff --cached  比较b跟c    
    git diff HEAD  比较a跟c

git reset跟 git checkout结论: 
    git reset HEAD  c覆盖b   
    git checkout -- <file>  b覆盖a  
    git checkout HEAD <file> c覆盖a,b

git rm命令结论: 
    git rm  删除a跟b   
    git rm --cached 只删除b   
    rm file   只删除a

撤销或者回退版本总结：
    v1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。
    v2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD file，就回到了场景1，第二步按场景1操作。
    v3：已经提交了不合适的修改到版本库时，想要撤销本次提交，使用git reset --hard HEAD^。

Git连接远程仓库:
    git remote               查看远程库的信息  
    git remote -v            显示更详细的信息  
    git remote add origin git@git.coding.net:aaaa/gitLearn.git  连接远程仓库  
    git clone git@git.coding.net:aaaa/gitLearn.git            复制一份远程仓库项目到本地  
    git remote rm origin     关闭连接远程仓库  
    git push origin master   推送分支  
    git pull origin master   抓取更新

Git分支管理:
    git branch           查看当前分支
    git branch -v        查看每一个分支的最后一次提交
    git branch -a        查看本地和远程分支的情况
    git branch --merged  查看已经与当前分支合并的分支
    git branch --no-merged 查看已经与当前分支未合并的分支
    git branch -r        查看远程分支
    git branch dev       创建分支 dev
    git checkout dev     切换到分支dev
    git checkout -b dev  创建并切换分支dev
    git merge dev        名称为dev的分支与当前分支合并
    git branch -d dev    删除分支dev

es6的学习与实践
node的学习之路
react事件之路