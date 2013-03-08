#!/bin/bash

#####################
# 初始
#####################
WORK_PATH="/home/kalxd/WorkSpace/git/kalxd"
JEKYLL=$(which jekyll)
GIT=$(which git)
GIT_PAGE="gitcafe-pages"
EDITOR=$(which vim)
RAKE=$(which rake)

#####################
# 菜单序列
#####################
START_JEKYLL=11
STOP_JEKYLL=12

CREATE_POST=21
CRT_PUB_POST=22
MOD_LAST_POST=23
MOD_UPDATE_POST=24
DEL_LAST_POST=25

#####################
# 函数实现
#####################

#=== 菜单打印 ===#
function print_menu(){
	echo -e "\e[0;33;1m===== 欢迎使用jekyll =====\e[0m"
	echo -e "\e[0;32;1m($START_JEKYLL) 开启jekyll"
	echo -e "($STOP_JEKYLL) 关闭jekyll\e[0m"
	echo ""
	echo -e "\e[0;32;1m($CREATE_POST) 新建日志"
	echo -e "($CRT_PUB_POST) 新建日志并发布"
	echo -e "($MOD_LAST_POST) 修改最近日志"
	echo -e "($MOD_UPDATE_POST) 修改并更新日志"
	echo -e "($DEL_LAST_POST) 删除最近日志\e[0m"
}

#=== 打开jekyll ===#
function start_jekyll(){
	$JEKYLL --server > /dev/null 2>&1 &
}

#=== 关闭jekyll ===#
function stop_jekyll(){
	killall jekyll > /dev/null 2>&1 &
}

#=== 新建post ===#
# 需传入post title,返回创建文件名
function create_post(){
	if [ -z $1 ]; then
		echo -e "\e[0;41;1m呐，我们不是说好标题不能为空的嘛?\e[0m"
		exit
	else
		$RAKE post title\="$1" > /dev/null 2>&1
		echo $(get_lastest_post)
	fi
}

#=== 获取最新日志 ===#
# 返回日期最近的文件名
function get_lastest_post(){
	echo `ls $WORK_PATH/_posts/* -t | head -n 1`
}

#####################
# 传说中的主函数 
#####################

# 进入工作目录
if [ ! -d $WORK_PATH ]; then
	echo -e "\e[44;37;1m不要骗人家了啦，才，才没有你说的那地方呢，哼！"
	echo -e "人家生气不理你了！！！>_<\e[0m"
	exit
fi
cd $WORK_PATH

# 漫无止境的八月
while [ true ]
do
	print_menu

	echo -e "\e[40;34;1m选择> \e[0m \c"
	read input

	case $input in
		#####################
		# jekyll功能区
		#####################
		$START_JEKYLL)
			#=== 打开jekyll ===#
			$JEKYLL --server > /dev/null 2>&1 &
			;;
		$STOP_JEKYLL)
			#=== 关闭jekyll ===#
			killall jekyll > /dev/null 2>&1 &
			;;
		#####################
		# post功能区
		#####################
		$CREATE_POST)
			while [ true ]
			do
				echo ""
				echo -e "\e[42;37;1m告诉人家标题啦>\e[0m \c"
				read post_title
				if [ -z $post_title ]; then
					echo -e "\e[42;33;1m人家都说了要写标题╮(￣▽ ￣)╭\e[0m"
				else
					filename=$(create_post $post_title)
					echo "$EDITOR $filename"
					break;
				fi
			done
			;;
		*)
			echo -e "\e[41;37;1m大爷儿，下次记得来玩呀～\e[0m"
			break
			;;
	esac
	echo ""
done
