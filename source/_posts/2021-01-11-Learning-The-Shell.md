---
title: Learning-The-Shell
date: 2021-01-11 23:48:21
tags:
- Linux
---
## 01 - What Is the shell 什么是脚本

| **命令** | **EN**                                   | **ZH**             |
| -------- | ---------------------------------------- | ------------------ |
| `date`   | Displays the current time and date.      | 显示当前日期       |
| `cal`    | Displays a calendar of thecurrent month. | 显示日历           |
| `df`     | Disk free                                | 剩余磁盘           |
| `free`   | Display the amount of free memor         | 剩余内存           |
| `exit`   | Ending a Terminal Session.               | 关闭一个命令行会话 |

## 02 - Navigation 导航

| **命令** | **EN**                                   | **ZH**         |
| -------- | ---------------------------------------- | -------------- |
| `pwd`    | Print name of current working directory. | 显示当前文件夹 |
| `cd`     | Change directory.                        | 切换文件夹     |
| `ls`     | List directory contents.                 | 显示文件夹内容 |

## 03 - Exploring the System 探索系统

| **命令** | **EN**                    | **ZH**         |
| -------- | ------------------------- | -------------- |
| `ls`     | List directory contents.  | 显示文件夹内容 |
| `file`   | Determining a File’s Type | 查看文件类型   |
| `less`   | Viewing File Contents     | 查看文件内容   |

## 04 - Manipulating Files and Directories 操作文件和目录

| **命令** | **EN**                            | **ZH**                  |
| -------- | --------------------------------- | ----------------------- |
| `cp`     | Copy files and directories        | 拷贝文件和文件夹        |
| `mv`     | Move/rename files and directories | 移动/重命名文件和文件夹 |
| `mkdir`  | Create directories                | 创建文件夹              |
| `rm`     | Remove files and directories      | 删除文件和文件夹        |
| `ln`     | Create hard and symbolic links    | 创建硬链接和符号链接    |

### cp - Copy Files and Directories

| **命令**              | **结果**                                                     |
| --------------------- | ------------------------------------------------------------ |
| `cp file1 file2`      | 把 file1 拷贝到 file2 . 如果 file2 存在， 那么 file2 的内容被 file1 的内容覆盖 . 如果 file2 不存在，那么 创建 file2 ，并把 file1 的内容拷贝到 file2。 |
| `cp -i file1 file2`   | 与上一条命令相似，不同的是如果 file2 存在，那么 file2 被覆盖前会提示用户。 |
| `cp file1 file2 dir1` | 把 file1 和 file2 拷贝进 dir1，前提是 dir1 一定要存在。      |
| `cp dir1/* dir2`      | 使用通配符，把 dir1 的内容都拷贝进 dir 中，前提是 dir2 一定要存在。 |
| `cp -r dir1 dir2`     | 把 dir1 的内容拷贝进 dir2 ，如果 dir2 不存在，就新建 dir2，并把 dir1 的内容拷贝进 dir2 .如果 dir2 存在就把 dir1 这个文件夹整个拷贝进 dir2，成为 dir2 的子文件夹。 |

> `-i` 代表 `interactive`交互的（会有提示问你要不要这样做）
>
> `-r` 代表 `recursive`递归的（递归地复制目录及其内容）

### mv - Move and Rename Files

| **命令**              | **结果**                                                                                                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mv file1 file2`      | 把 file1 移动到 file2 .。如果 file2 存在， 那么 file2 的内容被 file1 的内容覆盖 .。如果 file2 不存在，那么 创建 file2 ，并把 file1 的内容拷贝到 file2，file1 不再存在。 |
| `mv -i file1 file2`   | 与上一条命令相似，不同的是如果 file2 存在，那么 file2 被覆盖前会提示用户。                                                                                              |
| `mv file1 file2 dir1` | 把 file1 和 file2 移动到 dir1，前提是 dir1 一定要存在。                                                                                                                 |
| `mv dir1 dir2`        | 如果 dir2 不存在, 创建 dir2 并把 dir1 的内容移动到 dir2 并删除 dir1.。如果 dir2 存在，把 dir1 移动到 dir2，成为 dir2 的子文件夹。                                       |

### rm - Remove Files and Directories

| **命令**            | **结果**                                                       |
| ------------------- | -------------------------------------------------------------- |
| `rm file1`          | 静默删除 file1。                                               |
| `rm -i file1`       | 与上一条命令类似，区别是在执行删除之前会提示用户确认。         |
| `rm -r file1 dir1`  | 删除 file1 和 dir1 以及 dir1 中的内容                          |
| `rm -rf file1 dir1` | 与上一条命令类似，但如果 file1 或 dir1 不存在，rm 将静默继续。 |

> **注意**
>
> 类 Unix 的操作系统比如 Linux 是没有撤销删除命令的。
>
> 一旦你使用 `rm` 命令删除一些文件，它就不存在了。Linux 假定你很聪明并且知道你在做什么。
>
> 要特别小心使用通配符。 请考虑下面这个经典的例子。 比方说，你想在一个目录仅删除`HTML`文件。 为此，请键入以下内容：
>
> ```bash
> rm *.html
> ```
>
> 这是正确的，但如果你不小心在 `*` 和 `.html` 之间放置了一个空格
>
> ```bash
> rm * .html
> ```
>
> `rm` 命令将删除目录中的所有文件，然后抱怨没有名为`.html`的文件。
>
> 这里有一个实用的提示：每当你使用带有通配符的`rm`命令之前（除了仔细检查你的输入！），先用`ls`测试通配符。 这会让你看到即将被删除的文件。 然后按向上箭头调用该命令并用`rm`替换`ls`。

### ln - Create Links

#### Hard Links

```bash
ln file link
```

#### Symbolic Links

```bash
ln -s item link
```

#### 区别

{% mermaid graph LR %}
A[hard link]
B[file]
C[soft link]
D[inode]
E[inode]
F[data block]
G[data block]
%% 定义样式类
classDef one fill:#83a8d5,stroke:#333,stroke-width:2px;
classDef two fill:#f3a2a8,stroke:#333,stroke-width:2px;
classDef three fill:#fbd4b3,stroke:#333,stroke-width:2px;
%% 应用样式类，markdown里没效果
class A one
class B one
class C one
class D two
class E two
class F three
class G three
A --> D
B --> D
C --> E
D --> F
E --> G
G -.-> B
{% endmermaid %}

由于硬链接是有着相同 inode 号仅文件名不同的文件，因此硬链接存在以下几点特性：

-   文件有相同的 inode 及 data block；
-   只能对已存在的文件进行创建；
-   不能交叉文件系统进行硬链接的创建；
-   不能对目录进行创建，只可对文件创建；
-   删除一个硬链接文件并不影响其他有相同 inode 号的文件。

软链接与硬链接不同，若文件用户数据块中存放的内容是另一文件的路径名的指向，则该文件就是软连接。软链接就是一个普通文件，只是数据块内容有点特殊。软链接有着自己的 inode 号以及用户数据块。因此软链接的创建与使用没有类似硬链接的诸多限制：

-   软链接有自己的文件属性及权限等；
-   可对不存在的文件或目录创建软链接；
-   软链接可交叉文件系统；
-   软链接可对文件或目录创建；
-   创建软链接时，链接计数 i_nlink 不会增加；
-   删除软链接并不影响被指向的文件，但若被指向的原文件被删除，则相关软连接被称为死链接（即 dangling link，若被指向路径文件被重新创建，死链接可恢复为正常的软链接）。

> [理解 Linux 的硬链接与软链接](https://www.ibm.com/developerworks/cn/linux/l-cn-hardandsymb-links/index.html)

## 05 - Working With Commands 使用命令

| **命令**  | **EN**                                            | **ZH**                       |
| --------- | ------------------------------------------------- | ---------------------------- |
| `type`    | Indicate how a command name is interpreted        | 显示指定命令的类型           |
| `which`   | Display which executable program will be executed | 查找并显示给定命令的绝对路径 |
| `help`    | Get help for shell builtins                       | 显示内置 shell 的帮助信息    |
| `man`     | Display a command’s manual page                   | 查看 Linux 中的指令帮助      |
| `apropos` | Display a list of appropriate commands            | 在 whatis 数据库中查找字符串 |
| `info`    | Display a command’s info entry                    | Linux 下 info 格式的帮助指令 |
| `whatis`  | Display one-line manual page descriptions         | 查询一个命令执行什么功能     |
| `alias`   | Create an alias for a command                     | 用来设置指令的别名           |

### 什么是命令

命令可以是以下四种类型之一

| **概念**   | **描述**                                                            |
| ---------- | ------------------------------------------------------------------- |
| 可执行程序 | 就像我们在 `/usr/bin`这个文件夹中看到的文件一样。比如常用的 `yum`。 |
| 内置 shell | Bash 支持一些叫作内置 shell 的命令。举个例子 `cd`就是一个内置命令。 |
| shell 函数 | 脚本。                                                              |
| 别名       | 通过组合其他命令构成的一个自定义命令。                              |

### 认识命令

#### type - 显示一个命令的类型

```bash
[root@golinux /]# type yum
yum is /usr/bin/yum
[root@golinux /]# type type
type is a shell builtin
[root@golinux /]# type ll
ll is aliased to `ls -l --color=auto'
```

#### which - 显示可执行文件的位置

有时，系统上安装了多个版本的可执行程序。 虽然这在桌面系统上并不常见，但在较大的服务器上并不罕见。 要确定给定可执行文件的确切位置，请使用which命令。

```bash
[root@golinux /]# which yum
/usr/bin/yum
[root@golinux /]# which type
/usr/bin/which: no type in (/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin)
[root@golinux /]# which ll
alias ll='ls -l --color=auto'
	/usr/bin/ls
```

### 获取命令文档

#### help - 显示内置 shell 的帮助信息

```bash
[root@golinux /]# help cd
cd: cd [-L|[-P [-e]]] [dir]
    Change the shell working directory.
    
    Change the current directory to DIR.  The default DIR is the value of the
    HOME shell variable.
    
    The variable CDPATH defines the search path for the directory containing
    DIR.  Alternative directory names in CDPATH are separated by a colon (:).
    A null directory name is the same as the current directory.  If DIR begins
    with a slash (/), then CDPATH is not used.
    
    If the directory is not found, and the shell option `cdable_vars' is set,
    the word is assumed to be  a variable name.  If that variable has a value,
    its value is used for DIR.
    
    Options:
        -L	force symbolic links to be followed
        -P	use the physical directory structure without following symbolic
    	links
        -e	if the -P option is supplied, and the current working directory
    	cannot be determined successfully, exit with a non-zero status
    
    The default is to follow symbolic links, as if `-L' were specified.
    
    Exit Status:
    Returns 0 if the directory is changed, and if $PWD is set successfully when
    -P is used; non-zero otherwise.
```

#### --help  - 显示可执行程序的帮助信息

```bash
[root@golinux /]# mkdir --help
Usage: mkdir [OPTION]... DIRECTORY...
Create the DIRECTORY(ies), if they do not already exist.

Mandatory arguments to long options are mandatory for short options too.
  -m, --mode=MODE   set file mode (as in chmod), not a=rwx - umask
  -p, --parents     no error if existing, make parent directories as needed
  -v, --verbose     print a message for each created directory
  -Z                   set SELinux security context of each created directory
                         to the default type
      --context[=CTX]  like -Z, or if CTX is specified then set the SELinux
                         or SMACK security context to CTX
      --help     display this help and exit
      --version  output version information and exit

GNU coreutils online help: <http://www.gnu.org/software/coreutils/>
For complete documentation, run: info coreutils 'mkdir invocation'

```

#### man - 在线参考手册界面

#### apropos - 手册页的搜索引擎（在 whatis 数据库中查找字符串）

```bash
[root@golinux ~]# apropos partition
addpart (8)          - simple wrapper around the "add partition" ioctl
cfdisk (8)           - display or manipulate disk partition table
delpart (8)          - simple wrapper around the "del partition" ioctl
fdisk (8)            - manipulate disk partition table
iostat (1)           - Report Central Processing Unit (CPU) statistics and input/output statistics for devices and partitions.
kpartx (8)           - Create device maps from partition tables
os-prober (1)        - Discover bootable partitions on the local system.
parted (8)           - a partition manipulation program
partprobe (8)        - inform the OS of partition table changes
partx (8)            - tell the Linux kernel about the presence and numbering of on-disk partitions
resizepart (8)       - simple wrapper around the "resize partition" ioctl
sfdisk (8)           - partition table manipulator for Linux
systemd-efi-boot-generator (8) - Generator for automatically mounting the EFI System Partition used by the current boot to /boot
systemd-gpt-auto-generator (8) - Generator for automatically discovering and mounting root, /home and /srv partitions, as well as discover...
```

#### whatis - 一行描述手册页

```bash
[root@golinux ~]# whatis ls
ls (1)               - list directory contents
[root@golinux ~]# whatis yum
yum (8)              - Yellowdog Updater Modified
[root@golinux ~]# whatis type
type (1)             - bash built-in commands, see bash(1)
```

### 使用 `alias` 创建自己的命令

```bash
[root@golinux ~]# alias la='ls -la'
[root@golinux ~]# la
total 104
dr-xr-x---.  8 root root 4096 Aug 29 17:38 .
dr-xr-xr-x. 18 root root 4096 May 10 15:12 ..
-rw-------   1 root root 8694 Sep  4 16:22 .bash_history
-rw-r--r--.  1 root root   18 Dec 29  2013 .bash_logout
-rw-r--r--.  1 root root  176 Dec 29  2013 .bash_profile
-rw-r--r--.  1 root root  176 Sep  4 16:21 .bashrc
drwx------   3 root root 4096 Oct 15  2017 .cache
-rw-r--r--.  1 root root  100 Dec 29  2013 .cshrc
drwxr-xr-x   7 root root 4096 Dec 21  2018 .nvm
drwxr-xr-x   2 root root 4096 Oct 15  2017 .pip
drwxr-----   3 root root 4096 Dec 21  2018 .pki
-rw-r--r--   1 root root   64 Oct 15  2017 .pydistutils.cfg
-rw-------   1 root root   37 Feb 16  2019 .python_history
drwx------   2 root root 4096 Dec 20  2018 .ssh
-rw-r--r--.  1 root root  129 Dec 29  2013 .tcshrc
drwxr-xr-x   6 root root 4096 Aug 26 15:15 .vim
-rw-------   1 root root 5324 Aug 29 17:38 .viminfo
-rw-------   1 root root 5121 Aug 26 23:19 .viminfo.tmp
```

## 06 - Redirection 重定向
| **命令**  | **EN**                                            | **ZH**                       |
| --------- | ------------------------------------------------- | ---------------------------- |
| `cat` | Concatenate files | |
| `sort` | Sort lines of text | |
| `uniq` | Report or omit repeated lines | |
| `grep` | Print lines matching a pattern | |
| `wc` | Print newline, word, and byte counts for each file | |
| `head` | Output the first part of a file | |
| `tail` | Output the last part of a file | |
| `tee` | Read from standard input and write to standard output and files | |

### Standard Input, Output, and Error 标准输入，输出和错误

Many of the programs that we have used so far produce output of some kind. This output often consists of two types.

- The program’s results; that is, the data the program is designed to produce
- Status and error messages that tell us how the program is getting along 

如果我们使用`ls`这样的命令，我们可以在屏幕上看到它显示的结果和错误消息。
保持`Unix`主题“一切都是文件”，像`ls`这样的程序实际上是将结果发送到一个名为标准输出（通常表示为`stdout`）的特殊文件，并将其状态消息发送到另一个名为标准错误（`stderr`）的文件。 默认情况下，标准输出和标准错误都会链接到屏幕上，而不是保存到磁盘文件中。
此外，许多程序从名为标准输入（stdin）的工具获取输入，默认情况下，该工具连接到键盘。
I / O重定向允许我们改变输出的位置和输入的来源。 通常，输出从屏幕上显示而输入则来自于键盘，但是通过I / O重定向，我们可以改变它。

### Redirecting Standard Output 重定向标准输出

把`ls -l /usr/bin`的结果通过`>`重定向到`ls-output.txt`这个文件

```
ls -l /usr/bin > ls-output.txt
```

当你想把`ls -l /bin/usr`的结果通过`>`重定向到`ls-output.txt`这个文件时，你会发现并不可行，因为`ls`这个命令不会把它的错误信息通过标准输出的方式进行输出

```bash
[root@golinux playground]# ls -l /bin/usr > ls-output.txt
ls: cannot access /bin/usr: No such file or directory
```

| 操作符 | 功能     |
| ------ | -------- |
| `>`    | 重写内容 |
| `>>`   | 追加内容 |

### Redirecting Standard Error 重定向标准错误

要重定向标准错误，我们必须引用其文件描述符。 程序可以在几个编号的文件流中的任何一个上产生输出。 虽然我们将前三个文件流称为标准输入，输出和错误，但shell在内部分别将它们作为文件描述符0,1和2引用。 shell提供了使用文件描述符编号重定向文件的表示法。 由于标准错误与文件描述符编号2相同，因此我们可以使用以下表示法重定向标准错误：

文件描述符（File Descriptor）是计算机科学中的一个术语，是一个用于表述指向[文件](https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6)的引用的抽象化概念。

| 整数值 | 名称 | <unistd.h>符号常量 | <stdio.h>文件流 |
| ------ | ---- | ------------------ | --------------- |
| 0      | [Standard input](https://zh.wikipedia.org/wiki/Stdin)   | STDIN_FILENO       | stdin           |
| 1      | [Standard output](https://zh.wikipedia.org/wiki/Stdout) | STDOUT_FILENO      | stdout          |
| 2      | [Standard error](https://zh.wikipedia.org/wiki/Stderr)  | STDERR_FILENO      | stderr          |

重定向标准错误到文件

```bash
ls -l /bin/usr 2> ls-error.txt
```

重定向标准输出和标准错误到同一个文件

```bash
ls -l /bin/usr > ls-output.txt 2>&1
# 或者
ls -l /bin/usr &> ls-output.txt
```

处理不需要的输出

```bash
ls -l /bin/usr 2> /dev/null
```

> [关于/dev/null的趣闻](https://zh.wikipedia.org/wiki//dev/null)

### Redirecting Standard Input 重定向标准输入

#### cat - 合并输出文件

显示内容不多的文本文件

```bash
cat ls-output.txt
```

合并文件，比如我们有 `movie.mpeg.001 movie.mpeg.002 ... movie.mpeg.099` 这些文件，使用如下命令就可以合并成一个文件

```bash
cat movie.mpeg.0* > movie.mpeg
```

只输入`cat`就变成了输入什么输出什么的交互命令行

```bash
[root@golinux playground]# cat
hello world
hello world
```

利用这个特性可以用`cat`创建内容不多的文本文件

```bash
[root@izbp13gye2rcpn1at3vj69z playground]# cat > little.txt
this is a little.txt # 输入文件内容
[root@izbp13gye2rcpn1at3vj69z playground]# cat little.txt 
this is a little.txt # 打印文件内容
```

使用`<` 重定向操作符，我们将标准输入源从键盘更改为`little.txt` 文件。

我们可以看到结果与`cat little.txt`这种传递单个文件名参数的结果相同

```bash
[root@izbp13gye2rcpn1at3vj69z playground]# cat < little.txt 
this is the little.txt
```

### Pipelines 管道操作符

管道运算符`|` 可以把一个命令的标准输出传递到另一命令的标准输入

{% mermaid graph TD %}
A[前一个命令的标准输出]
B[前一个命令的标准输出]
%% 定义样式类
classDef one fill:#83a8d5,stroke:#333,stroke-width:2px;
classDef two fill:#f3a2a8,stroke:#333,stroke-width:2px;
classDef three fill:#fbd4b3,stroke:#333,stroke-width:2px;
%% 应用样式类，markdown里没效果
class A one
class B two
A --管道运算符--> B
{% endmermaid %}

举个栗子 通过管道运算符 我们可以把 `/`的目录信息通过`less`命令打印出来

```bash
[root@golinux playground]# ll / | less
```

管道通常用于对数据执行复杂的操作。 可以将几个命令放到管道中。 通常，以这种方式使用的命令称为过滤器。 过滤器接受输入，以某种方式对其进行更改，然后输出。 我们将尝试的第一个是`sort`。 想象我们想在`/bin`和`/usr/bin`中列出所有可执行程序的组合列表，将它们按排序顺序放置，然后查看结果列表。

```bash
ls /bin /usr/bin/ | sort | less
```

> `>`与 `|`的区别
>
> 简单来讲，重定向操作符`>`将命令与文件连接，而管道操作符`|`将一个命令的输出与第二个命令的输入连接。
>
> ```bash
> command1 > file1
> command1 | command2
> ```

| 命令      | EN                                             | ZH                              |
| --------- | ---------------------------------------------- | ------------------------------- |
| uniq      | Report or Omit Repeated Lines                  | 忽略重复的行                    |
| wc        | Print Line, Word, and Byte Counts              | 打印行数，字数和字节数          |
| grep      | Print Lines Matching a Pattern                 | 匹配模式                        |
| head/tail | Print First/Last Part of Files                 | 打印文件的最前/最后一部分       |
| tee       | Read from Stdin and Output to Stdout and Files | 从Stdin读取并输出到Stdout和文件 |



## 07 - Seeing the World as the Shell Sees it 用脚本解决问题

## 08 - Advanced Keyboard Tricks 高级键盘技巧

## 09 - Permissions 权限

## 10 -  Processes 进程

## 11 - The Environment 环境

## 12 - A Gentle Introduction to VIM 一个柔和的 VIM 介绍

## 13 - Customizing the Prompt 自定义提示
